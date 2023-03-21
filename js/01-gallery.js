import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCreate = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, original, description }) =>
    `<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__img" src ="${preview}" alt = "${description}" />
</a>
</div>`
).join('');
