import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryContainer = document.querySelector('.gallery');

  const galleryHTML = galleryItems.map(item => createGalleryItem(item)).join('');

  galleryContainer.innerHTML = galleryHTML;
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${largeImageUrl}" alt="">`);

    instance.show();

    document.addEventListener('keydown', closeModalOnEscape);

    function closeModalOnEscape(event) {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', closeModalOnEscape);
      }
    }
  }
}

document.querySelector('.gallery').addEventListener('click', openModal);

document.addEventListener('DOMContentLoaded', renderGallery);