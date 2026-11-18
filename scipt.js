
// Mobile Navigation
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// Close menu after clicking a link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("active");
    });
});

// Typing Animation
const words = [
    "Web Developer",
    "Computer Science Student",
    "Video Editor",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

// Welcome Message
console.log("Welcome to Shivtej Zaware's Portfolio!");
