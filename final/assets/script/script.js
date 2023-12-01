let currentIndex = 0;
let intervalId;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slideWidth = document.querySelector('.carousel img').clientWidth;

  currentIndex = index;
  const transformValue = -index * slideWidth;
  carousel.style.transform = `translateX(${transformValue}px)`;

  updateDots(index);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
  resetTimer();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
  resetTimer();
}

function resetTimer() {
  clearInterval(intervalId);
  startTimer();
}

function startTimer() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 3000); // Change the interval (in milliseconds) as needed
}

function createDots() {
	const dotContainer = document.getElementById('dotContainer');
	for (let i = 0; i < totalSlides; i++) {
	  const dot = document.createElement('div');
	  dot.className = 'dot';
	  dotContainer.appendChild(dot);
	}
  }
  
  function updateDots(index) {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
	  dot.classList.toggle('active', i === index);
	});
  }

// You can add more images to the carousel as needed
const totalSlides = document.querySelectorAll('.carousel img').length;

// Initial display and start the timer
showSlide(currentIndex);
startTimer();
createDots();
