const FARMER_CONTRACT_ADDRESS = "0x3db847400071a10ffacb7d75ce150cbadab7082c";
const FARMER_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "FarmerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "FarmerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addFarmer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isFarmer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceFarmer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const DISTRIBUTOR_CONTRACT_ADDRESS =
  "0x39090c4b880fb8db1f93e0ce9dfddf9c93e2d477";
const DISTRIBUTOR_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "DistributorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "DistributorRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isDistributor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const RETAILER_CONTRACT_ADDRESS = "0x39090C4b880Fb8db1F93E0ce9DFdDF9C93e2d477";
const RETAILER_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RetailerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RetailerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isRetailer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const CONSUMER_CONTRACT_ADDRESS = "0xad408035a8191dcd3161e08fdcc1be646211b619";
const CONSUMER_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "consumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "consumerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isConsumer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const SUPPLYCHAIN_CONTRACT_ADDRESS =
  "0x31462439c29e67dab494726d0d714754003e013b";
const SUPPLYCHAIN_ABI = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "DistributorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "DistributorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "FarmerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "FarmerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "ForSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Harvested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Packed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Processed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Purchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RetailerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "RetailerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Shipped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "upc",
        type: "uint256",
      },
    ],
    name: "Sold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "TransferOwnership",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "consumerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "consumerRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addFarmer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "fetchItemBufferOne",
    outputs: [
      {
        internalType: "uint256",
        name: "itemSKU",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "itemUPC",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "ownerID",
        type: "address",
      },
      {
        internalType: "address",
        name: "originFarmerID",
        type: "address",
      },
      {
        internalType: "string",
        name: "originFarmName",
        type: "string",
      },
      {
        internalType: "string",
        name: "originFarmInformation",
        type: "string",
      },
      {
        internalType: "string",
        name: "originFarmLatitude",
        type: "string",
      },
      {
        internalType: "string",
        name: "originFarmLongitude",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "fetchItemBufferTwo",
    outputs: [
      {
        internalType: "uint256",
        name: "itemSKU",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "itemUPC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "productID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productNotes",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "productPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "itemState",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "distributorID",
        type: "address",
      },
      {
        internalType: "address",
        name: "retailerID",
        type: "address",
      },
      {
        internalType: "address",
        name: "consumerID",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_originFarmerID",
        type: "address",
      },
      {
        internalType: "string",
        name: "_originFarmName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_originFarmInformation",
        type: "string",
      },
      {
        internalType: "string",
        name: "_originFarmLatitude",
        type: "string",
      },
      {
        internalType: "string",
        name: "_originFarmLongitude",
        type: "string",
      },
      {
        internalType: "string",
        name: "_productNotes",
        type: "string",
      },
    ],
    name: "harvestItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isConsumer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isDistributor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isFarmer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isRetailer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kill",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "packItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "processItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "purchaseItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "receiveItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceDistributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceFarmer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceRetailer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "sellItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_upc",
        type: "uint256",
      },
    ],
    name: "shipItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false,
    },
    "google_translate_element"
  );
}

let account;
const connectMetamask = async () => {
  if (window.ethereum !== "undefined") {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    // console.log(accounts);
    account = accounts[0];
    const data1 = farmerLogin(account);
    const data2 = distributerLogin(account);
    if (data2) {
      window.location.href = `/src/pages/distributer.html`;
    } else if (data1) {
      window.location.href = `/src/pages/farmer.html`;
    } else {
      window.location.href = `/src/pages/main.html`;
    }
  }
};

//2- connect to farmer smart contract
const connectContract = async () => {
  const Address = FARMER_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(FARMER_ABI, Address);
  document.getElementById("contractArea").innerHTML =
    "connected to smart contract";
};

//2- connect to distributer smart contract
const connectContract2 = async () => {
  const Address = DISTRIBUTOR_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(
    DISTRIBUTOR_ABI,
    Address
  );
  document.getElementById("contractArea").innerHTML =
    "connected to smart contract2";
};

//3) read value from smart contract
const farmerLogin = async (account) => {
  const Address = FARMER_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(FARMER_ABI, Address);
  const data = await window.contract.methods.isFarmer(account).call();
  return data;
};

//3) read value from smart contract 2
const distributerLogin = async (account) => {
  const Address = DISTRIBUTOR_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(
    DISTRIBUTOR_ABI,
    Address
  );
  const data = await window.contract.methods.isDistributor(account).call();
  return data;
};

// -------------------------------------------TESTING------------------------------------------------
const distributer = async () => {
  const Address = DISTRIBUTOR_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(
    DISTRIBUTOR_ABI,
    Address
  );
  const data = await window.contract.methods
    .isDistributor("0xFd5CBc6d9a03d36B350c9b7634093e30856c3Ca6")
    .call();
  console.log("dis", data);
};

distributer();

const farmer = async () => {
  const Address = FARMER_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(FARMER_ABI, Address);
  const data = await window.contract.methods
    .isFarmer("0xFd5CBc6d9a03d36B350c9b7634093e30856c3Ca6")
    .call();
  console.log(data);
};

farmer();

// const retail = async () => {
//   const Address = RETAILER_CONTRACT_ADDRESS;
//   window.web3 = await new Web3(window.ethereum);
//   window.contract = await new window.web3.eth.Contract(RETAILER_ABI, Address);
//   const data = await window.contract.methods
//     .isRetailer("0x44D2431899bDe95Cc922703340f2EA9D7086d2C7")
//     .call();
//   console.log("retail", data);
// };

// retail();

// account (admin)= 0xEb9C140356e1Cb4b3385D6Af3e5e1fddBa769515
// tiwari (farmer)= 0xFd5CBc6d9a03d36B350c9b7634093e30856c3Ca6
//distri = 0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc
// retail= 0x44D2431899bDe95Cc922703340f2EA9D7086d2C7
