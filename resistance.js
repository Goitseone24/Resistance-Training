document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Exercise card hover effects
    const exerciseCards = document.querySelectorAll('.exercise-card');
    exerciseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.querySelector('.exercise-gif img').style.transform = 'scale(1.1)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.querySelector('.exercise-gif img').style.transform = '';
        });
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.classList.add('was-validated');
        }, false);
    }

    // BMI Calculator
    const bmiForm = document.getElementById('bmiForm');
    if (bmiForm) {
        bmiForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (bmiForm.checkValidity()) {
                calculateBMI();
            }
            bmiForm.classList.add('was-validated');
        });
    }

    function calculateBMI() {
        const height = parseFloat(document.getElementById('height').value) / 100;
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value) || 30;
        
        const bmi = weight / (height * height);
        document.getElementById('bmiValue').textContent = bmi.toFixed(1);
        
        // Determine BMI category
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            document.getElementById('bmiCategory').className = 'metric-category text-info';
        } else if (bmi < 25) {
            category = 'Normal weight';
            document.getElementById('bmiCategory').className = 'metric-category text-success';
        } else if (bmi < 30) {
            category = 'Overweight';
            document.getElementById('bmiCategory').className = 'metric-category text-warning';
        } else {
            category = 'Obese';
            document.getElementById('bmiCategory').className = 'metric-category text-danger';
        }
        document.getElementById('bmiCategory').textContent = category;
        
        // Calculate heart rate zones
        const maxHr = 220 - age;
        document.getElementById('maxHrValue').textContent = maxHr + ' bpm';
        
        const moderateMin = Math.round(maxHr * 0.50);
        const moderateMax = Math.round(maxHr * 0.70);
        document.getElementById('moderateRange').textContent = moderateMin + '-' + moderateMax + ' bpm';
        
        const vigorousMin = Math.round(maxHr * 0.70);
        const vigorousMax = Math.round(maxHr * 0.85);
        document.getElementById('vigorousRange').textContent = vigorousMin + '-' + vigorousMax + ' bpm';
        
        // Show results
        document.getElementById('bmiResult').style.display = 'block';
    }
});
