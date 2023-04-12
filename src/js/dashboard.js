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
