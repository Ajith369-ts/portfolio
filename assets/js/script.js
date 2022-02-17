import * as bootstrap from "bootstrap";

// Some random colors
const colors = ["#1ed760", "#33aaff", "#f2f2f2", "#fcba03", "#ff471a"];

const numBalls = 40;
const balls = [];

let ball_animation = document.querySelector(".ball-animation");

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 85)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    // document.body.appendChild(ball);
    ball_animation.appendChild(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out",
        }
    );
});

// Reveal Sections

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add("section--hidden");
});

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("navbarcontent");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//         bsCollapse.toggle();
//     });
// });

// Form input reset

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};
