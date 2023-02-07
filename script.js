var baseLink = "https://api.themoviedb.org/3"
var imgLink = "http://image.tmdb.org/t/p/w500"
var requestLatest = new XMLHttpRequest()
var latest = `${baseLink}/movie/latest?api_key=${apiKey}`
requestLatest.addEventListener("load", loadLatest)
requestLatest.open("GET", latest)
requestLatest.send()

function loadLatest() {
    let response = JSON.parse(this.response)
    var latestId = response.id
    var movieId = Math.floor((Math.random()*latestId)+1)
console.log(latestId)
    var requestMovie = new XMLHttpRequest()
    var link = `${baseLink}/movie/${movieId}?api_key=${apiKey}`
    requestMovie.addEventListener("load", load)
    requestMovie.open("GET", link)
    requestMovie.send()
}

function load() {
    let response = JSON.parse(this.response)
    display(response)
}

function display(movie) {
    var poster = imgLink + movie.poster_path
    document.getElementById("poster").src = poster
    document.getElementById("title").textContent = movie.title
    document.getElementById("plot").textContent = movie.overview
    document.getElementById("date").textContent = movie.release_date
    document.getElementById("rating").textContent = movie.vote_average

}


