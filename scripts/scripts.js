// Initialize tsParticles (unchanged)
tsParticles.load("tsparticles", {
    fpsLimit: 30,
    background: {color: {value: "#001f3f"}},
    particles: {
        number: {value: 65, density: {enable: true, area: 800}},
        color: {value: "#FFA500"},
        shape: {type: "circle"},
        opacity: {value: 0.7, random: {enable: true, minimumValue: 0.3}},
        size: {value: {min: 2, max: 5}},
        links: {
            enable: true,
            distance: 120,
            color: "#FFA500",
            opacity: 0.4,
            width: 2
        },
        move: {enable: true, speed: 2, outModes: {default: "bounce"}}
    },
    interactivity: {
        events: {
            onHover: {enable: true, mode: "grab"},
            onClick: {enable: true, mode: "push"},
            resize: true
        },
        modes: {
            grab: {distance: 200, links: {opacity: 0.6}},
            push: {quantity: 4}
        }
    },
    detectRetina: true
});

// Slide-show logic with slide-up effect
const slides = [
    "Blockchain profiling and tracking",
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

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');
    if (!nav) return;

    // Determine the “page filename” (empty string for root "/")
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    const isIndex = (page === '' || page === 'index.html');

    if (!isIndex) {
        // On all non-index pages: solid navbar immediately
        nav.classList.add('scrolled');
        return;  // skip scroll handling
    } else {
        changeSlide();
        setInterval(changeSlide, 5000);
    }

    // On index.html: change navbar on scroll
    function throttle(fn, wait = 100) {
        let last = 0;
        return function(...args) {
            const now = Date.now();
            if (now - last >= wait) {
                last = now;
                fn.apply(this, args);
            }
        };
    }

    function onScroll() {
        if (window.scrollY > window.innerHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    // Initial check in case page loads already scrolled
    onScroll();
    // Listen for scroll, throttled
    window.addEventListener('scroll', throttle(onScroll));
});