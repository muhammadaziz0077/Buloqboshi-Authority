let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusSlides(1);
}, 5000);

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const container = document.querySelector('.havolalar-container');

let scrollAmount = 0;
const scrollStep = 1000; // Bitta elementning eni + qo'shimcha joy (padding, margin)

nextBtn.addEventListener('click', () => {
    if (scrollAmount <= container.scrollWidth - container.clientWidth) {
        scrollAmount += scrollStep;
        container.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});
document.querySelectorAll('.footer-links a, .footer-social a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
    });
  });
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', () => {
      const value = star.getAttribute('data-value');
      document.querySelectorAll('.star').forEach(s => {
        s.style.color = s.getAttribute('data-value') <= value ? '#ffbf00' : '#ffd700';
      });
    });
    
    star.addEventListener('mouseout', () => {
      document.querySelectorAll('.star').forEach(s => {
        s.style.color = '#ffd700';
      });
    });
    star.addEventListener('click', () => {
      const value = star.getAttribute('data-value');
      document.querySelectorAll('.star').forEach(s => {
        s.classList.remove('selected');
        if (s.getAttribute('data-value') <= value) {
          s.classList.add('selected');
        }
      });
    });
  });