const hardhat = require("hardhat");
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  //Deploy Supplychain
  const SupplyChain = await hardhat.ethers.getContractFactory('SupplyChain');
  const supplyChain = await SupplyChain.deploy();
  await supplyChain.deployed();
  console.log(`SupplyChain Address deployed to ${supplyChain.address}`);

  // Deploy Farmer
  const FarmerRole = await hardhat.ethers.getContractFactory('FarmerRole');
  const farmerRole = await FarmerRole.deploy();
  await farmerRole.deployed();
  console.log(`Farmer Address deployed to ${farmerRole.address}`);

  // Deploy Consumer
  const ConsumerRole = await hardhat.ethers.getContractFactory('ConsumerRole');
  const consumerRole = await ConsumerRole.deploy();
  await consumerRole.deployed();
  console.log(`Consumer Address deployed to ${consumerRole.address}`);

  // Deploy Retailer
  const RetailerRole = await hardhat.ethers.getContractFactory('RetailerRole');
  const retailerRole = await RetailerRole.deploy();
  await retailerRole.deployed();
  console.log(`Retailer Address deployed to ${retailerRole.address}`); 

  // Deploy Distributor
  const DistributorRole = await hardhat.ethers.getContractFactory('DistributorRole');
  const distributorRole = await DistributorRole.deploy();
  await distributorRole.deployed();
  console.log(`Distributor Address deployed to ${distributorRole.address}`); 
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });