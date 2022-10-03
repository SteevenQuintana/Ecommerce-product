const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
const userInput = document.querySelector('.input__number');

const cartNotification = document.querySelector('.header__cart--notification');
const addCartBtn = document.querySelector('.details__button');

const cartBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const cartModalPrice = document.querySelector('.cart-modal__price');
const emptyCart = document.querySelector('.cart-modal__empty');

const deleteProduct = document.querySelector('.cart-modal__delete');
const productContainer = document.querySelector(
    '.cart-modal__checkout-container'
);
const detailsContainer = document.querySelector(
    '.cart-modal__details-container'
);

const imageContainer = document.querySelector('.gallery__img-container');
const prevBtn = document.querySelector('.gallery__previous');
const nextBtn = document.querySelector('.gallery__next');

const modalGallery = document.querySelector('.modal-gallery__background');
const imageModalContainer = document.querySelector(
    '.modal-gallery__img-container'
);
const prevModalBtn = document.querySelector('.modal-gallery__previous');
const nextModalBtn = document.querySelector('.modal-gallery__next');
const closeModalBtn = document.querySelector('.modal-gallery__close');

const thumbnails = document.querySelectorAll('.gallery__thumnail');
const modalThumbnails = document.querySelectorAll('.modal-gallery__thumnail');

const headerMenu = document.querySelector('.header__menu');
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavBtn = document.querySelector('.modal-navbar__close');

let userInputNumber = 0;

minusBtn.addEventListener('click', (e) => {
    if (userInputNumber <= 0) return;
    userInputNumber--;
    userInput.value = userInputNumber;
});

plusBtn.addEventListener('click', (e) => {
    userInputNumber++;
    userInput.value = userInputNumber;
});

let previousValue = Number(cartNotification.textContent);
addCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    previousValue += userInputNumber;
    cartNotification.textContent = previousValue;
    cartNotification.style.display = 'block';

    if (previousValue > 0) {
        productContainer.classList.remove('hide');
        emptyCart.classList.add('hide');
        cartModalPrice.innerHTML = '';
        const html = `
        $125.00 x ${previousValue} <span>$${new Intl.NumberFormat().format(
            previousValue * 125
        )}</span>`;
        cartModalPrice.insertAdjacentHTML('afterbegin', html);
    }
});

cartBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');
});

deleteProduct.addEventListener('click', () => {
    productContainer.classList.add('hide');
    emptyCart.classList.remove('hide');
    previousValue = 0;
    cartNotification.textContent = previousValue;
});

thumbnails.forEach((thumbnail, key) => {
    thumbnail.addEventListener('click', () => {
        imageContainer.style.backgroundImage = `url('./images/image-product-${
            key + 1
        }.jpg')`;
    });
});

modalThumbnails.forEach((thumbnail, key) => {
    thumbnail.addEventListener('click', () => {
        imageModalContainer.style.backgroundImage = `url('./images/image-product-${
            key + 1
        }.jpg')`;
    });
});

let imgIndex = 1;
prevBtn.addEventListener('click', () => {
    changePrevImage(imageContainer);
});
nextBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

const changeNextImage = (imgContainer) => {
    if (imgIndex === 4) {
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
};
const changePrevImage = (imgContainer) => {
    if (imgIndex === 1) {
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
};

imageContainer.addEventListener('click', () => {
    if (window.innerWidth >= 1115) {
        modalGallery.style.display = 'grid';
        console.log(imageContainer.style.backgroundImage);
    }
});

prevModalBtn.addEventListener('click', () => {
    changePrevImage(imageModalContainer);
});

nextModalBtn.addEventListener('click', () => {
    changeNextImage(imageModalContainer);
});

closeModalBtn.addEventListener('click', () => {
    modalGallery.style.display = 'none';
});

headerMenu.addEventListener('click', () => {
    modalNavbar.style.display = 'block';
});
closeModalNavBtn.addEventListener('click', () => {
    modalNavbar.style.display = 'none';
});
