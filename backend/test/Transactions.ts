import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { EventLog } from "ethers";

import hre from "hardhat";

describe("Transactions", function () {
  // We define a fixture to reuse the same setup in every test.
  async function deployTransactionsFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, thirdAccount] = await hre.ethers.getSigners();

    const Transactions = await hre.ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    return { transactions, owner, otherAccount, thirdAccount };
  }

  describe("Transaction Operations", function () {
    describe("Success Cases", function () {
      it("Should start with zero transactions", async function () {
        const { transactions } = await loadFixture(deployTransactionsFixture);
        expect(await transactions.getTransactionCount()).to.equal(0);
      });

      it("Should add a new transaction with zero amount", async function () {
        const { transactions, otherAccount } = await loadFixture(deployTransactionsFixture);
        
        await expect(transactions.addToBlockChain(
          otherAccount.address,
          0,
          "Zero amount transfer",
          "test"
        )).to.not.be.reverted;
      });

      it("Should handle multiple transactions from different senders", async function () {
        const { transactions, otherAccount, thirdAccount } = await loadFixture(deployTransactionsFixture);
        
        await transactions.connect(otherAccount).addToBlockChain(
          thirdAccount.address,
          1000,
          "From second account",
          "test"
        );

        const allTx = await transactions.getAllTransactions();
        expect(allTx[0].sender).to.equal(otherAccount.address);
        expect(allTx[0].receiver).to.equal(thirdAccount.address);
      });

      it("Should handle special characters in message and keyword", async function () {
        const { transactions, otherAccount } = await loadFixture(deployTransactionsFixture);
        
        await expect(transactions.addToBlockChain(
          otherAccount.address,
          1000,
          "Special chars: !@#$%^&*()",
          "test!@#"
        )).to.not.be.reverted;
      });
    });

    describe("Error Cases", function () {
      it("Should fail when sending to zero address", async function () {
        const { transactions } = await loadFixture(deployTransactionsFixture);
        
        await expect(transactions.addToBlockChain(
          "0x0000000000000000000000000000000000000000",
          1000,
          "To zero address",
          "test"
        )).to.be.reverted;
      });

      it("Should handle empty message and keyword", async function () {
        const { transactions, otherAccount } = await loadFixture(deployTransactionsFixture);
        
        await expect(transactions.addToBlockChain(
          otherAccount.address,
          1000,
          "",
          ""
        )).to.not.be.reverted;
      });

      it("Should handle very large amounts", async function () {
        const { transactions, otherAccount } = await loadFixture(deployTransactionsFixture);
        const largeAmount = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
        
        await expect(transactions.addToBlockChain(
          otherAccount.address,
          largeAmount,
          "Large amount",
          "test"
        )).to.not.be.reverted;
      });
    });

    describe("Event Verification", function () {
      it("Should emit correct event data", async function () {
        const { transactions, owner, otherAccount } = await loadFixture(deployTransactionsFixture);
        
        const amount = 1000;
        const message = "Test Message";
        const keyword = "test";

        await expect(transactions.addToBlockChain(
          otherAccount.address,
          amount,
          message,
          keyword
        )).to.emit(transactions, "Transfer")
          .withArgs(
            owner.address,
            otherAccount.address,
            amount,
            message,
            anyValue,
            keyword
          );
      });

      it("Should emit events for multiple transactions in order", async function () {
        const { transactions, otherAccount } = await loadFixture(deployTransactionsFixture);
        
        const tx1 = await transactions.addToBlockChain(
          otherAccount.address,
          1000,
          "First",
          "test"
        );
        await tx1.wait();

        const tx2 = await transactions.addToBlockChain(
          otherAccount.address,
          2000,
          "Second",
          "test"
        );
        await tx2.wait();

        const events = await transactions.queryFilter(transactions.filters.Transfer());
        expect(events.length).to.equal(2);
        expect((events[0] as EventLog).args.amount).to.equal(1000);
        expect((events[1] as EventLog).args.amount).to.equal(2000);
      });
    });
  });
});
