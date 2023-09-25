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
    farmerLogin(account)
      .then((data) => {
        if (data) {
          window.location.href = `/src/pages/farmer.html`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    distributerLogin(account)
      .then((data) => {
        if (data) {
          window.location.href = `/src/pages/distributer.html`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    retailerLogin(account)
      .then((data) => {
        if (data) {
          window.location.href = `/src/pages/retailer.html`;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    if (window.location.pathname != "/src/pages/main.html") {
      document.getElementById("profileWalletId").innerHTML = accounts[0];
    }
  });
}
window.onload = function () {
  onInit();
};

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
    // console.log(data.result);
    let oldTran = data.result;
    let table = document.getElementById("transaction");
    // console.log(oldTran);
    for (let i = 0; i <= oldTran.length - 1; i++) {
      if (oldTran[i].to != "") {
        let x = oldTran[i].timeStamp;
        const date = new Date(x * 1000);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // January is 0
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        let row = document.createElement("tr");
        let html = `<td>${oldTran[i].blockHash}</td><td>${oldTran[i].to}</td><td>${oldTran[i].from}</td><td>${oldTran[i].gasUsed}</td><td>${formattedDate}</td>`;
        row.innerHTML = html;
        table.appendChild(row);
      }
    }

    let element = document.getElementsByTagName("td");
    element.classList.add("text-truncate");
  })
  .catch((error) => {
    console.error(error);
  });

if (window.location.pathname == "/src/pages/distributer.html") {
  document.getElementById("qualCard").style.display = "none";
}

async function fetchData(data) {
  const currentDomain = window.location.hostname;
  const currentProtocol = window.location.protocol;
  const portNumber = `8000`;
  const route = "/";
  console.log("line 102", portNumber);
  const queryParams = new URLSearchParams({ data: JSON.stringify(data) });

  const response = await fetch(
    `${currentProtocol}//${currentDomain}:${portNumber}${route}?${queryParams}`,
    {
      method: "GET", // change the method to GET
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("line 114", response);
  const ans = await response.json();
  return ans;
}

if (document.getElementById("qualityCheckBtn")) {
  document.getElementById("qualityCheckBtn").addEventListener("click", () => {
    param = {};
    for (let i = 1; i < 16; i++) {
      let ele = document.getElementById(`param${i}`);
      let val = parseFloat(ele.value);
      let key = ele.name;
      param[key] = val;
    }
    fetchData(param)
      .then((data) => {
        console.log("line 130", data.quality.quality);
        let qualityEstimated = data.quality.quality;
        // console.log("hehre");
        document.getElementById("qualCard").style.display = "block";
        let image = document.getElementById("qualImg");
        let heading = document.getElementById("qualType");
        let info = document.getElementById("qualUsage");
        if (qualityEstimated >= 90) {
          image.src = "../img/LuxQual.png";
          heading.innerHTML = `Luxury Quality(${qualityEstimated})`;
          info.innerHTML =
            "Exceptionally rare specialty coffee , which is considered outstanding and has the boldest taste notes, hence is also considered a luxury coffee.";
        } else if (qualityEstimated < 90 && qualityEstimated >= 80) {
          image.src = "../img/goodQual.png";
          heading.innerHTML = `Good Quality(${qualityEstimated})`;
          info.innerHTML =
            "Standard specialty coffee, more commercially available and comparatively cheaper.";
        } else {
          image.src = "../img/MediocQaul.png";
          heading.innerHTML = `Mediocre Quality(${qualityEstimated})`;
          info.innerHTML =
            "Non specialty coffee, often categorized as commercial coffee or the instant coffee which is available in the markets.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
async function x(toAccount, ammount) {
  // Check if MetaMask is installed
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  }

  // Request access to the user's accounts
  window.ethereum.request({ method: "eth_requestAccounts" });

  // Send a transaction using the user's account
  window.ethereum.request({
    method: "eth_sendTransaction",
    params: [
      {
        from: window.ethereum.selectedAddress,
        to: toAccount,
        value:
          "0x" +
          Web3.utils.toBN(Web3.utils.toWei(ammount, "ether")).toString(16),
      },
    ],
  });
  document.getElementById("forsale1").classList.remove("forSale");
  document.getElementById("forsale2").classList.remove("forSale");
  document.getElementById("forsale2").innerHTML = "Sold";
  document.getElementById("forsale1").classList.add("soldBatch");
  document.getElementById("forsale2").classList.add("soldBatch");
}

if (document.querySelectorAll(".moneyTrans")) {
  const elements = document.querySelectorAll(".moneyTrans");

  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      // console.log(index);
      let toAccount = document.getElementById(`td${index + 1}`).innerHTML;
      let ammount = document.getElementById(`eth${index + 1}`).innerHTML;
      x(toAccount, ammount);
    });
  });
}
