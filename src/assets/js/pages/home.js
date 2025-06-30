// Basic slideshow script
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.left = i === index ? '0' : '100%';
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 5000);
}

// Previous Slideshow functionality
//  const slides = document.querySelectorAll('.slide');
//  if (slides.length > 0) {
//    let currentSlide = 0;

//    function showSlide(index) {
//      slides.forEach((slide, i) => {
//        slide.style.transform = `translateX(${(i - index) * 100}%)`;
//        slide.style.zIndex = i === index ? 1 : 0;
//      });
//    }

//    function nextSlide() {
//      currentSlide = (currentSlide + 1) % slides.length;
//      showSlide(currentSlide);
//    }

//    setInterval(nextSlide, 5000);
//    showSlide(currentSlide);
//  }
