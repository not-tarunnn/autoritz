document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('alertButton');
  button.addEventListener('click', () => {
    alert('Hello! This alert is from script.js 🎉');
  });
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    // Toggle active class
    item.classList.toggle('active');
  });
});

const container = document.querySelector('.testimonial-container');
const dots = document.querySelectorAll('.dot');
let index = 0;

function updateSlider() {
  container.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % dots.length;
  updateSlider();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

setInterval(nextSlide, 5000); // slide every 5 seconds


     // Get the video element
        var video = document.querySelector('.video-background');

        // Event listener to stop the video once it finishes playing
        video.addEventListener('ended', function() {
            video.pause();
            video.currentTime = video.duration; // Make sure the video stops at the last frame
        });


const menuIcon = document.getElementById('menuIcon');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
  const isActive = menuOverlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll', isActive);
}

menuIcon.addEventListener('click', toggleMenu);

// Optional: Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

// Get the overlay and close button
const overlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeBtn');

// Toggle overlay visibility
closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// To open the overlay, add this somewhere in your script:
function openMenu() {
  overlay.classList.add('active');
}
