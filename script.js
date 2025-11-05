// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll animation for elements
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

// Observe hero section elements
document.querySelectorAll('.hero > *').forEach((element) => {
    observer.observe(element);
});

// Add animation class for hero section elements on load
window.addEventListener('load', () => {
    document.querySelectorAll('.hero > *').forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('show');
        }, index * 200);
    });
});