import { ethers } from "hardhat";

import fs from "fs";
import path from "path";

async function main() {
    const [deployer] = await ethers.getSigners();
    const provider = ethers.provider;
    const network = await provider.getNetwork();

    console.log("Deploying to:", network.name, `(chainId: ${network.chainId})`);
    console.log("Deployer address:", deployer.address);

    const balanceBefore = await provider.getBalance(deployer.address);
    console.log("Balance before deployment:", balanceBefore.toString());

    const factory = await ethers.getContractFactory("Transactions");

    const contract = await factory.deploy({
        gasLimit: 3_000_000,
        maxPriorityFeePerGas: ethers.parseUnits("3", "gwei"),
        maxFeePerGas: ethers.parseUnits("10", "gwei"),
    });

    console.log("Deploying contract...");
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    const balanceAfter = await provider.getBalance(deployer.address);
    const cost = balanceBefore - balanceAfter;

    console.log("Contract deployed to:", address);
    console.log("Deployment cost:", cost.toString());
    console.log("Remaining balance:", balanceAfter.toString());

    // Create folder if it doesn't exist
    const addressPath = path.join(__dirname, "../constants");
    if (!fs.existsSync(addressPath)) {
        fs.mkdirSync(addressPath, { recursive: true });
    }

    // Write contract Address
    fs.writeFileSync(
        path.join(addressPath, "contractAddress.json"),
        JSON.stringify({ address }, null, 2)
    );
}

main().then(() => process.exit(0)).catch((error) => {
    console.error("Deployment failed!");
    console.error(error);
    process.exit(1);
});