function changeLink() {
    const amount = document.getElementById("amount").value;
    const url = `upi://pay?pn=SIDDHESH%20RAMCHANDRA%20PATIL&pa=sidpatil1770@okhdfcbank&cu=INR&am=${amount}&tn=From%20Website`;
    const upi = document.getElementById("upi");
    console.log(url)
    console.log(amount)
    upi.href = url;
}

function checkLink() {
    const link = document.getElementById("amount").value;
    if (link.length == 0) {
        alert("Please enter a valid amount");
    } else {
        return;
    }
}

document.getElementById("amount").addEventListener("keyup", changeLink);
document.getElementById("upi").addEventListener("click", checkLink);