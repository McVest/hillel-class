const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

function showPrevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

function showNextSlide() {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
}

function updateSliderPosition() {
  const slideWidth = slider.children[0].clientWidth;
  slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  
  // Show/hide buttons based on index
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slider.children.length - 1;
}

// Initialize slider position and button states
updateSliderPosition();