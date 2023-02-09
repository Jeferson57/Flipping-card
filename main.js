const flipBtn = document.querySelector('#flip-btn');
const card = document.querySelector('.container');

function flippingCard () {
    card.classList.toggle('flipping');
}

flipBtn.addEventListener('click', flippingCard);