'use strict';

//function

function myCreate(tag, className, content) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.innerText = content;
    return newElement;
}

function imageCreation(image, search, alternative) {
    image.src = search;
    image.alt = alternative;
}

function nextImage() { // tolgo active e thumbnail-active la assegno al successivo
    if (contatoreImmagini < selectAllItem.length - 1) {

        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini++;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
    else {
        // resetta il contatore imagini a zero
        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini = 0;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
}

// end function

const imageArray = [  // array con immagini
    { url: '01.jpg', titolo: 'Lago', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ad molestias quaerat ipsum suscipit, beatae accusamus architecto eum vero fugit mollitia accusantium nemo quia rerum illum aliquam porro exercitationem.' },
    { url: '02.jpg', titolo: 'Paese di montagna', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ad molestias quaerat ipsum suscipit, beatae accusamus architecto eum vero fugit mollitia accusantium nemo quia rerum illum aliquam porro exercitationem.' },
    { url: '03.jpg', titolo: 'London', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ad molestias quaerat ipsum suscipit, beatae accusamus architecto eum vero fugit mollitia accusantium nemo quia rerum illum aliquam porro exercitationem.' },
    { url: '04.jpg', titolo: 'Night city', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ad molestias quaerat ipsum suscipit, beatae accusamus architecto eum vero fugit mollitia accusantium nemo quia rerum illum aliquam porro exercitationem.' },
    { url: '05.jpg', titolo: 'Mare', descrizione: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos ad molestias quaerat ipsum suscipit, beatae accusamus architecto eum vero fugit mollitia accusantium nemo quia rerum illum aliquam porro exercitationem.' }];


const divItems = document.querySelector('.items'); // div items
let contatoreImmagini = 0; // contatore
const prev = document.querySelector('.prev');  // elemento prev
const next = document.querySelector('.next'); // elemento next
const divThumbnail = document.querySelector('.thumbnail'); // elemento thumbnail

for (let i = 0; i <= imageArray.length - 1; i++) {

    const imageElement = imageArray[i];

    // div contenitore per le immagini
    const imageContainer = myCreate('div', 'item', '');
    // immagini
    const image = myCreate('img', 'carousel-image', '');
    imageCreation(image, `/img/${imageElement.url}`, `paesaggio${i}`);

    //titolo
    const titolo = myCreate('h2', 'titolo', imageElement.titolo);

    //descrizione     
    const descrizione = myCreate('p', 'descrizione', imageElement.descrizione);

    imageContainer.append(image);
    imageContainer.append(titolo);
    imageContainer.append(descrizione);
    divItems.append(imageContainer);

    // thumbnail container
    const thumbnailContainer = myCreate('div', 'thumbnail-container', '');
    //thumbnail
    const thumbnailImage = document.createElement('img');
    imageCreation(thumbnailImage, `/img/${imageElement.url}`, `thumbnail${i}`)

    thumbnailContainer.addEventListener('click', function () {
        imageContainer.classList.add('active');
    })

    thumbnailContainer.append(thumbnailImage);
    divThumbnail.append(thumbnailContainer);

    if (i === contatoreImmagini) {
        imageContainer.classList.add('active');
        thumbnailContainer.classList.add('thumbnail-active');
    }
}

// const templateCarousel = document.getElementById('carousel-template');
// let isActive = true;

// for (let i = 0; i < imageArray.length; i++) {

//     const currentImage = imageArray[i];
//     const divElement = templateCarousel.content.cloneNode(true);

//     divElement.querySelector('div.item img').src = `img/${currentImage.url}`;
//     divElement.querySelector('h2.titolo').innerText = currentImage.titolo;
//     divItems.append(divElement);

//     if (isActive) {
//         divElement.querySelector('div.item img').classList.add('active');
//         isActive = false; // Imposta isFirstElement a false dopo aver aggiunto la classe
//     }


// }

const selectAllItem = document.querySelectorAll('.item'); // simil array che contiene tutti i div con le immagini
const selectAllThumbnail = document.querySelectorAll('.thumbnail-container'); //simil array che contiene tutti i div con le thumbnail


prev.addEventListener('click', function () { // tolgo active e thumbnail-active la assegno al precedente
    if (contatoreImmagini > 0) {

        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini--;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
    else {

        // resetta il contatore imagini all'ultima immagine
        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini = selectAllItem.length - 1;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
})


next.addEventListener('click', function () { // tolgo active e thumbnail-active la assegno al successivo
    if (contatoreImmagini < selectAllItem.length - 1) {

        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini++;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
    else {

        // resetta il contatore imagini a zero
        selectAllItem[contatoreImmagini].classList.remove('active');
        selectAllThumbnail[contatoreImmagini].classList.remove('thumbnail-active');
        contatoreImmagini = 0;
        selectAllItem[contatoreImmagini].classList.add('active');
        selectAllThumbnail[contatoreImmagini].classList.add('thumbnail-active');
    }
})

const start = document.getElementById('start');  // elemento prev
const end = document.getElementById('stop'); // elemento next
let changeImage;

start.addEventListener('click', function () {
    changeImage = setInterval(nextImage, 1000);
})

end.addEventListener('click', function () {
    clearInterval(changeImage);
})
