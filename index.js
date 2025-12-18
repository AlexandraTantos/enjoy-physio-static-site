const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrap = document.querySelector('.carousel-items');
const imgs = document.querySelectorAll('.carousel-items img');

let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`;
}

next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});



showImg();