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

let radioVal = "thisMonth";

let x = document.getElementById(transactionPg) != null;
if (x != null && x == "") {
  displayTransaction("thisMonth");
}

window.addEventListener("load", (event) => {
  getValue();
});

function getValue() {
  var tds = document.getElementsByTagName("td");
  for (let x = 0; x < tds.length; x++) {
    var tr = tds[x].parentNode;
    document.getElementById(tr.id).style.display = "table-row";
  }
  var radios = document.getElementsByName("optionsRadios");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioVal = radios[i].value;
      break;
    }
  }
  displayTransaction(radioVal);
}

function displayTransaction(radioVal) {
  //getting all dates as array from table
  let table = document.getElementById("dataTables");
  var columnIndex = 4;
  allDates = [];
  for (var i = 1, row; (row = table.rows[i]); i++) {
    var col = row.cells[columnIndex];
    allDates.push(col.innerHTML);
  }

  //this month, 6month, year dates.
  let thisMonth = new Date().getMonth() + 1;
  let last6month = new Date().getMonth() + 1 - 6;
  let year = new Date().getFullYear();
  if (last6month < 0) {
    last6month = 13 + last6month;
  }

  //setting param
  let param = thisMonth;
  if (radioVal == "thisMonth") {
    param = thisMonth;
  } else if (radioVal == "last6month") {
    param = last6month;
  } else {
    param = year - 1;
  }
  // console.log(param, radioVal, "this is param");

  //display none
  var tds = document.getElementsByTagName("td");
  for (m = 0; m < allDates.length; m++) {
    console.log(param, allDates[m].split("/"), "------");
    let splitIndex = 1;
    if (radioVal == "thisMonth") {
      splitIndex = 1;
    } else if (radioVal == "year") {
      splitIndex = 2;
    }
    if (allDates[m].split("/")[splitIndex] != param) {
      for (let x = 0; x < tds.length; x++) {
        var tr = tds[x].parentNode;
        if (tds[x].innerHTML === allDates[m]) {
          console.log("Found element with id: " + tds[x].id);
          document.getElementById(tr.id).style.display = "none";
        }
      }
      // for (let x = 0; x < tds.length; x++) {
      //   if (tds[x].innerHTML !== allDates[m]) {
      //     console.log("Found element: " + tds[x].id);
      //     var tr = tds[x].parentNode;
      //     document.getElementById(tr.id).style.display = "block";
      //   }
      // }
    }
  }
}
