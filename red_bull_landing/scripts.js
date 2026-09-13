// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-mode');

    // Save the preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize Theme based on localStorage
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
}

// Event Listeners
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// GSAP Scroll Animations
const { ScrollTrigger } = window.gsap.getAll();

ScrollTrigger.create({
    selector: '.hero h1',
    start: 'top center',
    animation: {
        opacity: 0,
        y: -50,
        ease: 'power4.inOut'
    },
    onEnter: function() {
        gsap.to(this.selector, { 
            opacity: 1,
            y: 0,
            duration: 1
        });
    }
});
