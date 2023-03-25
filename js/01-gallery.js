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

galleryCreate.insertAdjacentHTML('beforeend', galleryEl)

galleryCreate.addEventListener('click', imgClick);

function imgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'img') {
        return;
 }     
}

const modalOpen = basicLightbox.create(
    `<img src = "${e.target.dataset.source}" width = 600 height = 400 margin=10px>`,

    {
        open: () => window.addEventListener('keydown', onKey),  
        close: () => window.addEventListener('keydown', onKey),
    }
);

modalOpen.show();

function onKey(e) {
    if (e.code === "Escape") {
        modalOpen.close();  
    }
}