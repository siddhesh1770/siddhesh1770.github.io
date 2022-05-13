function convertDate(e) {
  const [year, month, day] = e.split("-");
  const result = [day, month, year].join("/");
  return result;
}

async function hello() {
  const pwd = localStorage.getItem("password");
  console.log(pwd);
  if (pwd == null) {
    alert("Please login first!");
    return;
  }
  const dateIST = convertDate(document.getElementById("date").value);
  const stocksTemp = document.getElementById("stocks").value.split(",");
  var stocks = [];
  stocksTemp.forEach(element => {
    var temp = {
      "name" : element,
    }
    stocks.push(temp);
  });
  const charges = Number(document.getElementById("charges").value);
  const netPl = Number(document.getElementById("netPl").value);
  const grossPl = netPl + charges;
  const turnover = Number(document.getElementById("turnover").value);
  const url = "https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/contractNoteEntry"
  const data = {
    dateIST: dateIST,
    stocks: stocks,
    charges: charges,
    grossPl: grossPl,
    netPl: netPl,
    turnover: turnover,
    password: pwd
  }
  
  const res = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    })
    const json = await res.json();
    console.log(json);
}


function setPassword() {
  console.log("setPassword");
  var flag = false;
  while(!flag) {
    var pwd = prompt("Enter password");
    if (pwd == null || pwd == "" || pwd == undefined) {
      alert("Please enter a valid password");
      continue;
    } else {
      flag = true;
      localStorage.setItem("password", pwd);
    }
  }
}