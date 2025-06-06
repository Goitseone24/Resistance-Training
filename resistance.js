document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Exercise card hover effects
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const gif = this.querySelector('.exercise-gif img');
            gif.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseleave', function () {
            const gif = this.querySelector('.exercise-gif img');
            gif.style.transform = 'scale(1)';
        });
    });

    // Animate elements when they come into view
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.feature-card, .exercise-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
    });

    const exerciseCardsAll = document.querySelectorAll('.exercise-card');
    exerciseCardsAll.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease ' + (index * 0.1) + 's';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Form validation (from previous implementation)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Validation logic here
        });
    }

    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // BMI calculation logic here
        });
    }
});