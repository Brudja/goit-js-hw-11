import axios from 'axios';
import notiflix from 'notiflix';
const refs = {
  serchForm: document.querySelector('#search-form'),
  input: document.querySelector('[name="searchQuery"]'),
  btnSerch: document.querySelector('[type="submit"]'),
  btnLoadMore: document.querySelector('[type="button"]'),
  gallery: document.querySelector('.gallery'),
};
refs.serchForm.addEventListener('submit', onSerch);
function onSerch(e) {
  e.preventDefault();
  const searchQuery = e.currentTarget.elements.searchQuery.value;
  const options = {
    key: '30084767-7a1e2118a8f7c64e4377bd167',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  const url = `https://pixabay.com/api/?key=30084767-7a1e2118a8f7c64e4377bd167&q=${searchQuery}&image_type=photo&per_page=40&page=1`;
  fetch(url, options)
    .then(r => r.json())
    .then(console.log);
}