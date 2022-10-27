import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'regenerator-runtime/runtime';

import axios from 'axios';
let myGal = {};
let count = 1;

let typeField = '';
const form = document.querySelector('.search-form');

const file = document.querySelector('.myGalery');
const btnLoadMore = document.querySelector('.load-more');

const BASE_URL = 'https://pixabay.com/api/';

const searchImg = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=30854424-1209f63ff7d7cc0fa6ddacf5b&q=${typeField}&per_page=40&page=${count}&image_type=photo+operation=horizontal+safesearch=true`
    );

     if(response.data.hits.length===0){
        Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      }
      if(typeField.length===0){
        Notify.failure(`Field can not be empty`);
        return
      }
    const askImg = response.data;

     letDrowImg(askImg);

  } catch (errors) {
    console.error(errors);
  }
};

btnLoadMore.addEventListener('click', loadMoreImg);
function loadMoreImg(event) {
  event.target = count++;

  searchImg();
}

form.addEventListener('input', getTypeField);

function getTypeField(event) {
  typeField = event.target.value;
  file.innerHTML = '';
  btnLoadMore.classList.add('visualy-hiden');
}

form.addEventListener('submit', sendImgREq);

async function sendImgREq(event) {
  event.preventDefault();
  file.innerHTML = '';
  event.target = await searchImg(`${typeField}`);

}


function letDrowImg(askImg) {
  btnLoadMore.classList.remove('visualy-hiden');
  const agaga = askImg.hits;

  myGal = agaga
    .map(
      hits =>
        `<div class="photo-card">
    <img src="${hits.previewURL}" alt="${hits.tags}" loading="lazy" />
    <div class="info">
    <p class="info-item">
      <b>Likes</b> ${hits.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${hits.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${hits.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${hits.downloads}
    </p>
  </div>
  </div>`
    )
    .join('');
    if (agaga.length < 40) {
        btnLoadMore.classList.add('visualy-hiden');
      }
  if (agaga.length < 40 && count > 1) {
    btnLoadMore.classList.add('visualy-hiden');
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
  if(count===1){
    Notify.success(`Hooray! We found ${askImg.total} images.`);
    
  }

  file.innerHTML += myGal;
}

