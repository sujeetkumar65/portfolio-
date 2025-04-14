// Typing Effect
var typed = new Typed("#typed-text", {
  strings: ["SUJEET KUMAR", "UI/UX Designer", "Web Developer"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true
});

// AOS Initialization
AOS.init({
  duration: 1000,
  once: true
});

// Toggle Light/Dark Mode
function toggleMode() {
  document.body.classList.toggle("light-mode");
}
