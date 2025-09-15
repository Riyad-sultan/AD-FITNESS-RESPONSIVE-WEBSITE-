let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Make sure DOM is loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });

    // Close menu on scroll
    window.addEventListener('scroll', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    // Add smooth scrolling for all navigation links
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        });
    });

    // Handle registration form submission
    const registrationForm = document.getElementById('registrationForm');
    const registrationMessage = document.querySelector('.registration-message');

    if (registrationForm) {
        // Add input event listener for phone validation
        const phoneInput = registrationForm.querySelector('input[type="tel"]');
        phoneInput.addEventListener('input', function(e) {
            // Remove any non-numeric characters
            this.value = this.value.replace(/\D/g, '');
        });

        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const phoneInput = this.querySelector('input[type="tel"]');

            // Validate phone number
            if (!/^[0-9]+$/.test(phoneInput.value)) {
                registrationMessage.textContent = "Please provide valid phone number";
                registrationMessage.style.display = 'block';
                registrationMessage.style.color = '#ff3333';
                return;
            }

            // Get form values
            const name = nameInput.value;
            const email = emailInput.value;
            const phone = phoneInput.value;

            // Display success message
            registrationMessage.textContent = "Registration successful! We'll contact you soon.";
            registrationMessage.style.display = 'block';
            registrationMessage.style.color = '#45ffca';
            
            // Clear the form
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                registrationMessage.style.display = 'none';
            }, 5000);
        });
    }
});

// typing text code
