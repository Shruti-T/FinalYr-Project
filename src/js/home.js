const FARMER_CONTRACT_ADDRESS = "0x457d47c99af82b79f46d6d98cc5fcdb50b95facf";
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
    account = accounts[0];
    document.getElementById("accountArea").innerHTML = account;
  }
};

//2- connect to smart contract
const connectContract = async () => {
  const Address = FARMER_CONTRACT_ADDRESS;
  window.web3 = await new Web3(window.ethereum);
  window.contract = await new window.web3.eth.Contract(FARMER_ABI, Address);
  document.getElementById("contractArea").innerHTML =
    "connected to smart contract";
};

// let radioVal = "all";

// let x = document.getElementById(transactionPg) != null;
// if (x != null && x == "") {
//   displayTransaction("all");
// }

// window.addEventListener("load", (event) => {
//   getValue();
// });

// function getValue() {
//   var tds = document.getElementsByTagName("td");
//   for (let x = 0; x < tds.length; x++) {
//     var tr = tds[x].parentNode;
//     document.getElementById(tr.id).style.display = "table-row";
//   }
//   var radios = document.getElementsByName("optionsRadios");
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       radioVal = radios[i].value;
//       break;
//     }
//   }
//   displayTransaction(radioVal);
// }

// function displayTransaction(radioVal) {
//   //getting all dates as array from table
//   let table = document.getElementById("dataTables");
//   var columnIndex = 4;
//   allDates = [];

//   if (radioVal == "all") {
//     var tds = document.getElementsByTagName("td");
//     for (let x = 0; x < tds.length; x++) {
//       var tr = tds[x].parentNode;
//       document.getElementById(tr.id).style.display = "table-row";
//     }
//   } else {
//     for (var i = 1, row; (row = table.rows[i]); i++) {
//       var col = row.cells[columnIndex];
//       allDates.push(col.innerHTML);
//     }

//     //this month, 6month, year dates.
//     let thisMonth = new Date().getMonth() + 1;
//     let last6month = new Date().getMonth() + 1 - 6;
//     let year = new Date().getFullYear();
//     if (last6month < 0) {
//       last6month = 13 + last6month;
//     }

//     //setting param
//     let param = thisMonth;
//     if (radioVal == "thisMonth") {
//       param = thisMonth;
//     } else if (radioVal == "last6month") {
//       param = last6month;
//     } else {
//       param = year - 1;
//     }
//     //display none
//     var tds = document.getElementsByTagName("td");
//     for (m = 0; m < allDates.length; m++) {
//       let splitIndex = 1;
//       if (radioVal == "thisMonth") {
//         splitIndex = 1;
//       } else if (radioVal == "year") {
//         splitIndex = 2;
//       }

//       if (radioVal == "thisMonth" || radioVal == "year") {
//         if (allDates[m].split("/")[splitIndex] != param) {
//           for (let x = 0; x < tds.length; x++) {
//             var tr = tds[x].parentNode;
//             if (tds[x].innerHTML === allDates[m]) {
//               console.log("Found element with id: " + tds[x].id);
//               document.getElementById(tr.id).style.display = "none";
//             }
//           }
//         }
//       } else {
//         if (allDates[m].split("/")[splitIndex] <= param) {
//           for (let x = 0; x < tds.length; x++) {
//             var tr = tds[x].parentNode;
//             if (tds[x].innerHTML === allDates[m]) {
//               console.log("Found element with id: " + tds[x].id);
//               document.getElementById(tr.id).style.display = "none";
//             }
//           }
//         }
//       }
//     }
//   }
// }
