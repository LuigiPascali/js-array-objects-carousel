const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Seleziono gli elementi del DOM
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelector('.carousel-slide img');
const carouselTitle = document.querySelector('.carousel-text h2');
const carouselText = document.querySelector('.carousel-text p');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

// Inizializzazione dell'indice della slide corrente a 0
let currentSlide = 0;

// Funzione per visualizzare la slide corrente
function showSlide() {
  carouselImg.src = images[currentSlide].image;
  carouselImg.alt = images[currentSlide].title;
  carouselTitle.textContent = images[currentSlide].title;
  carouselText.textContent = images[currentSlide].text;
}

// Visualizzo la prima slide all'avvio
showSlide();

// Aggiunta di un event listener al bottone "Next" per passare alla slide successiva
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  showSlide();
});

// Aggiunta di un event listener al bottone "Prev" per tornare alla slide precedente
prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  showSlide();
});

// Aggiunta immagini alla thumbnails
const thumbnails = document.querySelectorAll('.carousel-thumbnail');

thumbnails.forEach((thumbnail, index) => {
  const image = images[index];
  thumbnail.querySelector('img').src = image.image;
  thumbnail.querySelector('img').alt = image.title;
});

// Aggiunta di un event listener per le miniature
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentSlide = index;
    showSlide();

    // Rimozione della classe "active" dalle miniature e aggiunta alla miniatura selezionata
    thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    });
    thumbnail.classList.add('active');
  });
});
