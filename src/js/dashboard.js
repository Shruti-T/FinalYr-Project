async function onInit() {
  let wallet = document.getElementById("profileWalletId").innerHTML;
  await window.ethereum.enable();
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  document.getElementById("profileWalletId").innerHTML = accounts[0];
  //   console.log(account);
  window.ethereum.on("accountsChanged", function (accounts) {
    // Time to reload your interface with accounts[0]!
    const account = accounts[0];
    const data1 = farmerLogin(account);
    const data2 = distributerLogin(account);
    if (data2) {
      window.location.href = `/src/pages/distributer.html`;
    } else if (data1) {
      window.location.href = `/src/pages/farmer.html`;
    } else {
      window.location.href = `/src/pages/main.html`;
    }
    // console.log(accounts[0]);
    document.getElementById("profileWalletId").innerHTML = accounts[0];
  });
}

onInit();

// if (!ethereum.isConnected()) {
//     document.body.innerHTML =
//       "401:- Unauthorised Login!, Please Login to access dashBoard.";
//   }
const apiKey = "6IS3MJPANXX6WVPNHRBZIT5B2EBPN1MZ61";
const address = "0xEb9C140356e1Cb4b3385D6Af3e5e1fddBa769515";

const url = `https://api-goerli.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.result);
    let oldTran = data.result;
    let table = document.getElementById("transaction");
    for (let i = 0; i <= oldTran.length; i++) {
      var row = document.createElement("tr");
      let html = `<td>${oldTran[i].blockHash}</td><td>${oldTran[i].to}</td><td>${oldTran[i].from}</td><td>${oldTran[i].timeStamp}</td>`;
      row.innerHTML = html;
      table.appendChild(row);
    }
  })
  .catch((error) => {
    console.error(error);
  });
