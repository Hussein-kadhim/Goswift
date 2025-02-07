const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const heroContent = document.querySelector(".hero-content");
const body = document.body;

hamburger.addEventListener("click", () => {
  const menuOpen = navLinks.classList.toggle("show");
  heroContent.classList.toggle("menu-open");
  body.classList.toggle("no-scroll", menuOpen);
});

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    heroContent.classList.remove("menu-open");
    body.classList.remove("no-scroll");
  });
});
