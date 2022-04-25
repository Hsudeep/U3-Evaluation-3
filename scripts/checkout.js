// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletAmount = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#wallet").innerText = walletAmount;

let defaultPrice = 100;
function checkoutfn(){
   let seats = document.getElementById("number_of_seats").value;

   let price = seats*defaultPrice;
    console.log(price)
   if(price>walletAmount){
       alert("Insufficient Balance!")
   }else{
       alert("Booking successful!")
       newamount = walletAmount-price
       localStorage.setItem("amount", JSON.stringify(Number(newamount)))
       window.location.reload()
   }
}



//movie data
let data = JSON.parse(localStorage.getItem("movie"))
console.log(data.Poster)
let moviedata = document.getElementById("movie")

let movieImage = document.createElement("img")
movieImage.src = data.Poster;

let movieTitle = document.createElement("h1")
movieTitle.innerText = data.Title;

moviedata.append(movieTitle,movieImage)