function changeLink() {
    const amount = document.getElementById("amount").value;
    const pn = "pn=SIDDHESH%20RAMCHANDRA%20PATIL"; // Reciever name
    const am = `am=${amount}`; // amount
    const pa = "pa=paytmqr281005050101h17vvz9lx3o2@paytm" // upi address
    const cu = "cu=INR"; // currency
    const mc = "mc=5499"; // merchant code
    const mode = "mode=02"; // mode
    const orgid = "orgid=000000"; // orgid
    const paytmqr = "paytmqr=281005050101H17VVZ9LX3O2"
    const sign = "sign=MEQCIGQBQVpl0pgTPT8DxWdzWlBJLoEKGo+7XjGTa+qFDRRaAiAaOcO/R4lQueZ/dxFrRGC9G7TfNdv+gE3NXdnaoGAODA=="; // signature
    const url = "upi://pay?" + pn + "&" + am + "&" + pa + "&" + cu + "&" + mc + "&" + mode + "&" + orgid + "&" + paytmqr + "&" + sign;
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

// upi://pay?pa=paytmqr281005050101h17vvz9lx3o2@paytm&pn=Paytm%20Merchant&mc=5499&mode=02&orgid=000000&paytmqr=281005050101H17VVZ9LX3O2&sign=MEQCIGQBQVpl0pgTPT8DxWdzWlBJLoEKGo+7XjGTa+qFDRRaAiAaOcO/R4lQueZ/dxFrRGC9G7TfNdv+gE3NXdnaoGAODA==