// acceder au element html necessaire

// acceder au productMain
/** @type {HTMLImageElement} */
const productMain = document.querySelector('.product__main')
// acceder au productThumb2
/** @type{HTMLImageElement} */
const productThumb2 = document.querySelector('.product__thumb-2')
const productDiv = document.querySelector('.product')
const productThumb2Src = productThumb2.src

const productThumb3 = document.querySelector('.product__thumb-3')
const productThumb3Src = productThumb3.src

const productThumb4 = document.querySelector('.product__thumb-4')
const productThumb4Src = productThumb4.src
// traiter le clic sur l'image no 2
productThumb2.addEventListener('click', () => {
  productMain.src = productThumb2Src
  productDiv.className = 'product active-2'
})
productThumb3.addEventListener('click', () => {
  productMain.src = productThumb3Src
  productDiv.className = 'product active-3'
})
productThumb4.addEventListener('click', () => {
  productMain.src = productThumb4Src
  productDiv.className = 'product active-4'
})

// quand je clic sur l'image no2 , l'imange principale prend le src de l'imager no 2
