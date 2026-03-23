// Navigation Elements
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

// Toggle Navigation Menu
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// Footer Elements
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

// Set Dynamic Footer Content
if (year) {
  year.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = "Last Updated: " + document.lastModified;
}