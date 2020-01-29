const objectArray = [];
const movieTitle = document.querySelector('.title__input');
const movieBio = document.querySelector('.bio__input');
const movieGenre = document.querySelector('.genre__input');
const createMovieButton = document.querySelector('.button__create__movie');
const randomMovie = document.querySelector('.random__button');
const main = document.querySelector('.main');
const winnerCard = document.querySelector('.winner-all');
const inputs = document.querySelector('.input');

const createHandler = () => {
  inputError();
}

const randomHandler = () => {
  watchRandom();
}

const mainHandler = () => {
  deleteCard();
}

const winnerCircle = () => {
  deleteWinnerCard();
}

const makeCard = (movieObj) => {
  main.insertAdjacentHTML('afterbegin', `  <article class="card" data-id="${movieObj.id}">
  <header class="card-header">
    <p class="card__title">${movieTitle.value}</p>
    <img class="delete__image" src="images/delete.svg">
  </header>
    <p class="card__genre">${movieGenre.value}</p>
    <p class="fill-bio">${movieBio.value}</p>
</article>`)
}

const randomPopulator = (rndmMovie) => {
  winnerCard.insertAdjacentHTML('afterbegin', `<article class="winner-card" data-id="${rndmMovie.id}">
  <header class="winner-card-header">
    <p class="winner-card__title">${rndmMovie.title}</p>
    <img class="winner-delete__image" src="images/delete.svg">
  </header>
  <p class="winner-card__genre">${rndmMovie.genre}</p>
  <p class="winner-fill-bio">${rndmMovie.bio}</p>
</article>`)
}

const makeObject = () => {
  const newObj = new Movie(Date.now(), movieTitle.value, movieGenre.value, movieBio.value);
  objectArray.push(newObj);
  console.log(objectArray);
}

const watchRandom = () => {
  var tonightsMovie = objectArray[Math.floor(Math.random()*objectArray.length)];
  console.log(tonightsMovie);
  randomPopulator(tonightsMovie);
}

const clearInputs = () => {
  movieTitle.value = '';
  movieGenre.value = '';
  movieBio.value = '';
}

const inputError = () => {
  if(movieTitle.value === '' || movieGenre.value === '' || movieBio.value === '') {
    return;
} else {
  makeObject();
  makeCard(Movie);
  clearInputs(); 
  }
}

const deleteCard = () => {
  event.target.closest('.card').remove();
}

const deleteWinnerCard = () => {
  event.target.closest('.winner-card').remove();
}

createMovieButton.addEventListener('click', createHandler);
randomMovie.addEventListener('click', randomHandler);
main.addEventListener('click', mainHandler);
winnerCard.addEventListener('click', winnerCircle);
