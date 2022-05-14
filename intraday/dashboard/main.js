async function hello() {
  console.log("hellofromhello")
  console.log("hellofromhello")
  const cookie = localStorage.getItem("cookie");
  const url = `https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/getTotalIntraData`;
  const raw = {
    cookie: cookie,
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(raw),
  })
  const data = await res.json();
  if(data.success == false){
    alert(data.message);
    return;
  }
  const totalDays = document.getElementById("totalDays");
  const totalCharges = document.getElementById("totalCharges");
  const totalTurnover = document.getElementById("totalTurnover");
  const netPl = document.getElementById("netPl");
  const grossPl = document.getElementById("grossPl");
  totalCharges.innerHTML = `
    <h3>Total Charges Paid since day 1 = ${data.data.totalCharges}</h3>`;
  totalTurnover.innerHTML = `
    <h3>Total Turnover since day 1 = ${data.data.totalTurnover}</h3>`;
  netPl.innerHTML = `
    <h3>Net Profit/Loss since day 1 = ${data.data.totalNetPl}</h3>`;
  grossPl.innerHTML = `
    <h3>Gross Profit/Loss since day 1 = ${data.data.totalGrossPl}</h3>`;
  totalDays.innerHTML = `
    <h3>Total Days = ${data.data.totalDays}</h3>`;
  if (data.data.totalNetPl < 0) {
    netPl.style.color = "red";
  } else {
    netPl.style.color = "green";
  }
  if (data.data.totalGrossPl < 0) {
    grossPl.style.color = "red";
  } else {
    grossPl.style.color = "green";
  }
  createList(data);
}

function createList(data){
  const list = document.getElementById("stocksList");
  data.data.stocks.forEach(element => {
    const temp = document.createElement("li");
    temp.innerHTML = `
    <h3>${element.name} Has been traded ${element.trades} times.</h3>`;
    list.appendChild(temp);
  });
}

function setCookie() {
  if (localStorage.getItem("cookie") == null || localStorage.getItem("cookie") == "") {
    const temp =  prompt("Enter your cookie");
    localStorage.setItem("cookie", temp);
    hello();
    return;
  }
  hello();
}

setCookie();