// Initialize tsParticles (unchanged)
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    background: { color: { value: "#001f3f" } },
    particles: {
        number: { value: 60, density: { enable: true, area: 800 } },
        color: { value: "#FFA500" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: { enable: true, minimumValue: 0.3 } },
        size: { value: { min: 1, max: 4 } },
        links: {
            enable: true,
            distance: 120,
            color: "#FFA500",
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2, outModes: { default: "bounce" } }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 200, links: { opacity: 0.6 } },
            push: { quantity: 4 }
        }
    },
    detectRetina: true
});

// Slide-show logic with slide-up effect
const slides = [
    "Secure your digital assets",
    "Expert key management",
    "24/7 blockchain support"
];
let idx = 0;
const slideText = document.getElementById("slide-text");

function changeSlide() {
    // slide out
    slideText.style.opacity = 0;
    slideText.style.transform = 'translateY(30px)';
    setTimeout(() => {
        // update text
        slideText.textContent = slides[idx];
        // slide in
        slideText.style.opacity = 1;
        slideText.style.transform = 'translateY(0)';
        idx = (idx + 1) % slides.length;
    }, 600); // match roughly the CSS transition timing
}

// kick off
changeSlide();
setInterval(changeSlide, 5000);
