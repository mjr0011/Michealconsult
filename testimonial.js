const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

// Event Listeners for Previous and Next Buttons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
  showTestimonial(currentIndex);
});

// Initialize the first testimonial
showTestimonial(currentIndex);
