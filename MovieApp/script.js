const KEY = "c981e5288c2a894869f2af1df9214e8c";

const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desec&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const home = document.getElementById("home")

/*
The provided code snippet defines a function named getClassByRate in JavaScript. This function likely plays a role in a movie recommendation application by assigning CSS classes based on movie ratings
*/
const getClassByRate = (vote) => {
    if (vote >= 7.5) return "green";
    else if (vote >= 7) return "orange";
    else return "red";
};

/*
The provided code snippet defines a function named showMovies in JavaScript. This function is likely a core part of a movie recommendation application responsible for displaying movie information on the webpage.
*/
const showMovies = (movies) => {
    main.innerHTML = "";
    movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieElement);
    });
};

// The provided code snippet defines an asynchronous function named getMovies in JavaScript. This function is likely a core part of a movie recommendation application responsible for fetching movie data from the TMDb API and then displaying it on the webpage
// async: This keyword indicates that the function can perform asynchronous operations, meaning it might involve waiting for something to happen before continuing. In this case, it waits for the network request to fetch movie data.
/*
const res = await fetch(url);:
This line fetches data from the URL provided in the url parameter using the fetch API.
await ensures the function pauses execution until the fetch operation completes.
*/
/*
const data = await res.json();:

This line assumes the response is in JSON format. It calls the json() method on the response object (res) to parse the response body as JSON data.
await again ensures the function pauses until the JSON parsing is complete.
The parsed JSON data (data) is likely an object containing an array of movie objects retrieved from the TMDb API.
*/
const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

if (main) {
  getMovies(API_URL); // Call getMovies only if main element exists
} else {
  console.error("main element not found!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else history.go(0);
});

home.addEventListener("click", () => {
  getMovies(API_URL);
});
  