// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let walletAmount = JSON.parse(localStorage.getItem("amount"))

document.querySelector("#wallet").innerText = walletAmount;
let moviepage = document.getElementById("movies");
let id;

async function movieSearch(){

    try{
        const movieName = document.getElementById("search").value

        let res = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=32b5127e`)

        let data = await res.json();
        // console.log(data)
        const movies = data.Search;
        return movies;
    }
    catch (err){
        console.log(err, "err");
    }
}

async function main(){
    let data = await movieSearch();

    if(data === undefined){
        return false;
    }

    showmovie(data);
}

function showmovie(data){
    // console.log(data)
    moviepage.innerHTML = null;
    data.forEach(function(el){
        let moviedata = document.createElement("div")
        let movieImage = document.createElement("img")
        movieImage.src = el.Poster
        let movieTitle = document.createElement("p")
        movieTitle.innerText = el.Title

        let booknow = document.createElement("button")
        booknow.innerText = "Book Now"
        booknow.setAttribute("class","book_now")
        booknow.addEventListener("click", function(){
            // fetch(`https://www.omdbapi.com/?apikey=32b5127e&t=${el.Title}`)
            // .then(function(res){
            //     return res.json();
            // })
            // .then(function(res){
            //     console.log("newdata",res)
            //     localStorage.setItem("movie",JSON.stringify(res))
            // })
            // .catch(function(err){
            //     console.log("err", err)
            // })
            // window.location.href="checkout.html"
            moviesdata(el)
        })

        moviedata.append(movieImage, movieTitle, booknow)
        moviepage.append(moviedata)
    })
}

function debounce(fn,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        fn()
    },delay)
}

function moviesdata(el){
    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}