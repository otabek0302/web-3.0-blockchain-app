import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();
    const provider = ethers.provider;

    console.log("Deploying with address:", deployer.address);
    console.log("Account balance:", (await provider.getBalance(deployer.address)).toString());

    const factory = await ethers.getContractFactory("Transactions");

    // Increase gas limit and adjust gas prices for better deployment success
    const contract = await factory.deploy({
        gasLimit: 3_000_000,  // Increased gas limit
        maxPriorityFeePerGas: ethers.parseUnits("3", "gwei"),  // Higher priority fee
        maxFeePerGas: ethers.parseUnits("10", "gwei"),  // Higher max fee
    });

    console.log("Deploying contract...");
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log("Contract deployed successfully to:", address);
    console.log("Remaining balance:", (await provider.getBalance(deployer.address)).toString());
}

// Better error handling
main().then(() => process.exit(0)).catch((error) => {
    console.error("Deployment failed!");
    console.error(error);
    process.exit(1);
});