require("dotenv").config({ path: ".env" });
const hardhat = require("hardhat");
const { ethers } = require("hardhat");
// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


const FARMER_CONTRACT_ADDRESS = process.env.FARMER_CONTRACT_ADDRESS;
const DISTRIBUTOR_CONTRACT_ADDRESS = process.env.DISTRIBUTOR_CONTRACT_ADDRESS;
const RETAILER_CONTRACT_ADDRESS = process.env.RETAILER_CONTRACT_ADDRESS;
const CONSUMER_CONTRACT_ADDRESS = process.env.CONSUMER_CONTRACT_ADDRESS;
const SUPPLYCHAIN_CONTRACT_ADDRESS = process.env.SUPLLYCHAIN_CONTRACT_ADDRESS;

const farmer_contract = require("../artifacts/contracts/FarmerRole.sol/FarmerRole.json");
const distributor_contract = require("../artifacts/contracts/DistributorRole.sol/DistributorRole.json");
const retailer_contract = require("../artifacts/contracts/RetailerRole.sol/RetailerRole.json");
const consumer_contract = require("../artifacts/contracts/ConsumerRole.sol/ConsumerRole.json");
const supplychain_contract = require("../artifacts/contracts/Supplychain.sol/Supplychain.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("this is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage);
}

main();