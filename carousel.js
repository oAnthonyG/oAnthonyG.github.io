const btnRight = document.querySelector('.arrow-right')
const btnLeft = document.querySelector('.arrow-left')
const elements = document.querySelector('.elements')
let pixels = 50

btnRight.addEventListener('click', function () {
  pixels = pixels + 100

  elements.style = `transform: translateX(${pixels}px);`
})
btnLeft.addEventListener('click', function () {
  pixels = pixels - 100

  elements.style = `transform: translateX(${pixels}px)`
})