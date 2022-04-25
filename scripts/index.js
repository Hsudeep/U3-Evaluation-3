// Store the wallet amount to your local storage with key "amount"

let bag = JSON.parse(localStorage.getItem("amount")) || 0 ;

function addtoWallet(){
    let amountEntered = Number(document.getElementById("amount").value);
    bag=bag+amountEntered;  
    // console.log(bag)
    localStorage.setItem("amount", JSON.stringify(Number(bag)));
    // window.location.reload()
    document.querySelector("#wallet").innerText = JSON.parse(localStorage.getItem("amount"))
}




