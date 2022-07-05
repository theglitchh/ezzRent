const productImages = document.querySelectorAll('.product-images img');
const productImageSLide = document.querySelector('.image-slider');

let activeImageSLide = 0;

productImages.forEach((item,i) => {
   item.addEventListener('click', () => {
       productImages[activeImageSLide].classList.remove('active');
   item.classList.add('active');
   productImageSLide.style.backgroundImage = `url(${item.src})`;
   activeImageSLide = i;

   })


    }
)

//toggle size buttons
