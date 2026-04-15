// YEAR + LAST MODIFIED //
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const lastModEl = document.getElementById("lastModified");
if (lastModEl) {
  lastModEl.textContent = "Last Updated: " + document.lastModified;
}

// NAV MENU //
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn?.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// PROJECTS //
const projects = [
  {
    name: "Expedition Site",
    category: "AI",
    image: "images/expedition.png",
    live: "https://isaacihoon-python.github.io/wdd130/wwr/index.html",
    github: "https://github.com/isaacihoon-python/wdd130"
  },
  {
    name: "Portfolio Website",
    category: "Web",
    image: "images/portfolio_site.jpeg",
    live: "https://isaacihoon-python.github.io/wdd131/week01/index.html",
    github: "https://github.com/isaacihoon-python/wdd131"
  },
  {
    name: "temple album",
    category: "Web",
    image: "images/temple_album.jpeg",
    live: "https://IsaacIhoon-python.github.io/wdd131/week02/temple-assignment/temples.html",
    github: "https://github.com/isaacihoon-python/wdd131/"
  }
];

// DISPLAY PROJECTS //
function displayProjects(list) {
  const container = document.getElementById("projectContainer");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <article class="project-card">
        <img src="${p.image}" loading="lazy" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>

        <div class="project-links">
          <a href="${p.live}" target="_blank" class="btn live-btn">Live Demo</a>
          <a href="${p.github}" target="_blank" class="btn github-btn">Github</a>
        </div>
      </article>
    `;
  });
}

// FILTER //
function filterProjects(category) {
  localStorage.setItem("category", category);

  if (category === "All") {
    displayProjects(projects);
  } else {
    displayProjects(projects.filter(p => p.category === category));
  }
}

// LOAD FILTER //
const saved = localStorage.getItem("category");
saved ? filterProjects(saved) : displayProjects(projects);

// FORM
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const status = document.getElementById("formStatus");

    if (!name) {
      status.textContent = "Please enter your name.";
      status.style.color = "red";
      return;
    }

    localStorage.setItem("contactName", name);

    status.textContent = "Message sent successfully!";
    status.style.color = "green";

    // Auto clear after 3 seconds //
    setTimeout(() => {
      status.textContent = "";
    }, 3000);

    form.reset();
  });
}