// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "hardhat/console.sol";

// Smart Contract to add transactions to the blockchain
contract Transactions {
    uint256 transactionCounter;

    // Event to emit when a transaction is added to the blockchain
    event Transfer(address indexed from,address indexed to,uint amount,string message,uint256 timestamp);

    // Struct to store transaction details
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
    }

    // Array to store all transactions
    TransferStruct[] transactions;

    // Function to add a transaction to the blockchain
    function addToBlockChain(address payable receiver, uint amount, string memory message) public {
        transactionCounter += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    // Function to get all transactions from the blockchain
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        // Return all transactions from the blockchain
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // Return the number of transactions in the blockchain
        return transactionCounter;
    }
}
