import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryCreate = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, description, original }) =>
    `<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__img" src ="${preview}" data-source="${original}" alt = "${description}" />
</a>
</div>`
).join('');

galleryCreate.insertAdjacentHTML('beforeend', galleryEl)

galleryCreate.addEventListener('click', imgClick);

function imgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }


    const modal = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width = 600 height = 400 >`,

        {
            onOpen: () => window.addEventListener('keydown', onEscKey),
            onClose: () => window.addEventListener('keydown', onEscKey),
        }
    );

    modal.show();

    function onEscKey(evt) {
        if (evt.code === "Escape") {
            modal.close();
        }
    }
}