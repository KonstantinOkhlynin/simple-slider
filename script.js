const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

let activeSlideIdx = 0


sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('mousewheel', (event) => {
if (event.deltaY < 0) {
    changeSlide('up')
} else {
    changeSlide('down')
}
})

function changeSlide(direction) {

 if (direction === 'up') {
    activeSlideIdx++
    if (activeSlideIdx === slideCount) {
        activeSlideIdx = 0
    }


 } else if (direction === 'down') {
    activeSlideIdx--
    if (activeSlideIdx < 0) {
        activeSlideIdx = slideCount - 1
    }
 }

 const height = container.clientHeight
 mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`
 sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`

}