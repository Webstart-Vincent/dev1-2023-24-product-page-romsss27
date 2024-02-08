/**
 @type {NodeListOf<HTMLImageElement}
 */
const productThumbs = document.querySelectorAll('[class^="product__thumb-"]')

const productDiv = document.querySelector('.product')

/** @type {HTMLImageElement}*/
const productMainimg = document.querySelector('.product__main')

productThumbs.forEach((productThumb, index) => {
  //ajouter un event handler sur le clik du productThumb

  productThumb.addEventListener('click', () => {
    const src = productThumb.src
    productMainimg.src = src
    productDiv.className = `product active-${index + 1}`
  })
  //recuperer le src du productThumb
  //donner au src de la productDiv
})
