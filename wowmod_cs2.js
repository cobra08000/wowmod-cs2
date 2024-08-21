document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic background effect
    const background = document.getElementById('background');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;

        updateBackground();
    });

    function updateBackground() {
        const moveX = mouseX * 50; // max 50px move
        const moveY = mouseY * 50; // max 50px move
        background.style.backgroundPosition = `${moveX}px ${moveY}px`;
    }

    // Class cards hover effect
    const classCards = document.querySelectorAll('.class-card');
    classCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 0 20px rgba(240, 203, 122, 0.3)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });
    });

    // Add a simple loading animation
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = 'opacity 1s ease-in';

    window.setTimeout(() => {
        body.style.opacity = 1;
    }, 500);
});
