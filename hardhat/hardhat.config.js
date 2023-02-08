require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require('dotenv').config()

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.7.4",
  networks: {
    hardhat: {
    },
    goerli: {
      url:  [API_KEY],
      accounts: [PRIVATE_KEY],
    },
  },
};