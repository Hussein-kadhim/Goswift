const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// Toggle menu open/close
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle between hamburger and X icon
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");

  // Prevent scrolling when menu is open
  if (navLinks.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "auto";
  }
});

// Close menu when clicking a nav item
document.querySelectorAll("#nav-links li").forEach((li) => {
  li.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});
