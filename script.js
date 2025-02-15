// Select all navbar links
const navLinks = document.querySelectorAll('.navbar ul li a');

// Function to generate random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create a random gradient
function getRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const color4 = getRandomColor();
    return `linear-gradient(45deg, ${color1}, ${color2}, ${color3}, ${color4})`;
}

// Add hover effect to change gradient dynamically
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.background = getRandomGradient();
    });

    link.addEventListener('mouseleave', () => {
        // Reset to the default gradient on mouse leave
        link.style.background = 'linear-gradient(45deg, #ff6f61, #ffcc00, #00ccff, #ff00ff)';
    });
});

// Add click animation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Add a scaling animation
        link.style.transform = 'scale(0.9)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 200);

        // Change the background color on click
        link.style.background = getRandomGradient();

        // Highlight the active link
        navLinks.forEach(otherLink => {
            otherLink.classList.remove('active');
        });
        link.classList.add('active');

        // Smooth scroll to the target section
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight the active link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionBottom = sectionTop + targetSection.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});