let offset = 0;
const sliderLine = document.querySelector('.sliderLine');

document.querySelector('.left').addEventListener('click', function () {
    offset = offset + 1000;
    if (offset > 3000) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});



document.querySelector('.right').addEventListener('click', function () {
    offset = offset - 1000;
    if (offset < 0) {
        offset = 3000;
    }
    sliderLine.style.left = -offset + 'px';
});
