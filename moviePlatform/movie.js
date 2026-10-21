// Library > moods > movies > actors
let movieLibrary = [
  ["Cozy", [
    ["Paddington 2", ["Ben Whishaw", "Hugh Grant"]],
    ["Little Women", ["Saoirse Ronan", "Florence Pugh"]],
    ["The Grand Budapest Hotel", ["Ralph Fiennes", "Tony Revolori"]],
    ["Chef", ["Jon Favreau", "Sofia Vergara"]],
    ["Julie & Julia", ["Meryl Streep", "Amy Adams"]]
  ]],
  ["Thrilling", [
    ["Inception", ["Leonardo DiCaprio", "Elliot Page"]],
    ["Se7en", ["Brad Pitt", "Morgan Freeman"]],
    ["Parasite", ["Song Kang-ho", "Choi Woo-shik"]],
    ["Gone Girl", ["Ben Affleck", "Rosamund Pike"]],
    ["Prisoners", ["Hugh Jackman", "Jake Gyllenhaal"]]
  ]],
  ["Funny", [
    ["Superbad", ["Jonah Hill", "Michael Cera"]],
    ["Bridesmaids", ["Kristen Wiig", "Maya Rudolph"]],
    ["Step Brothers", ["Will Ferrell", "John C. Reilly"]],
    ["Game Night", ["Jason Bateman", "Rachel McAdams"]],
    ["Anchorman", ["Will Ferrell", "Christina Applegate"]]
  ]],
  ["Sad", [
    ["Manchester by the Sea", ["Casey Affleck", "Michelle Williams"]],
    ["Past Lives", ["Greta Lee", "Teo Yoo"]],
    ["Marriage Story", ["Adam Driver", "Scarlett Johansson"]],
    ["Blue Valentine", ["Ryan Gosling", "Michelle Williams"]],
    ["Atonement", ["Keira Knightley", "James McAvoy"]]
  ]]
];

// Finds a mood in the library and returns its list of movies
function getMoviesForMood(mood) {
  for (let i = 0; i < movieLibrary.length; i++) {
    if (movieLibrary[i][0] === mood) {
      return movieLibrary[i][1];
    }
  }
  return [];
}

// Picks random movies, removing each one from the pool so there are no repeats
function getRandomWatchlist(movies, howMany) {
  let pool = [...movies];
  let watchlist = [];

  while (watchlist.length < howMany && pool.length > 0) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    let chosen = pool.splice(randomIndex, 1);
    watchlist.push(chosen[0]);
  }

  return watchlist;
}

// Runs when a mood button is clicked and shows the watchlist on the page
function showMovies(mood) {
  let movies = getRandomWatchlist(getMoviesForMood(mood), 3);
  let list = document.getElementById("watchlist");

  list.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    let title = movies[i][0];
    let actors = movies[i][1].join(", ");
    list.innerHTML += "<li>" + title + " (starring " + actors + ")</li>";
  }
}