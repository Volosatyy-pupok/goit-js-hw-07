import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const galleryHTML = galleryItems.map(item => createGalleryItem(item)).join('');
  galleryContainer.innerHTML = galleryHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
});
console.log(galleryItems);
