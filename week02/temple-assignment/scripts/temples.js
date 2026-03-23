const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Footer dates
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Last Updated: " + document.lastModified;