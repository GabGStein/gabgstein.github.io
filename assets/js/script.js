const slide = document.querySelector('.skills-track')
const dot = document.querySelectorAll('.dot').forEach((item) => {
    item.addEventListener('click', changeSlide)
})

function changeSlide(e) {
    document.querySelector('.dot.active').classList.remove('active')
    e.target.classList.add('active')
    let dotIndex = parseInt(e.target.dataset.slide);
    moveSlide(dotIndex)
}

function moveSlide(index) {
    let pctSlide = index * -100
    slide.style.transform = `translateX(${pctSlide}%)`;
}