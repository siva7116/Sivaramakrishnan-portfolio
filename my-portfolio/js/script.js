const projects = [
  {
    title: "Calculator App",
    description: "A functional calculator built with vanilla JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/alex/calculator"
  },
  {
    title: "Weather App",
    description: "Shows live weather using a public API.",
    tags: ["HTML", "CSS", "Fetch API"],
    link: "https://github.com/alex/weather"
  },
  {
    title: "To-Do List",
    description: "Add, complete and delete tasks. Data in localStorage.",
    tags: ["HTML", "CSS", "DOM"],
    link: "https://github.com/alex/todo"
  }
];

// ── 2. RENDER FUNCTION ────────────
function renderProjects() {
  const grid = document.querySelector("#projects-grid");
  grid.innerHTML = ""; // clear first

  // ── 3. FOR LOOP over the array ────
  for (const project of projects) {

    // Build the tags HTML string
    const tagsHTML = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    // Build the card HTML using template literals
    const cardHTML = ` <div class="project-card"> <h3>${project.title}</h3> <p>${project.description}</p> <div class="tags">${tagsHTML}</div> <a href="${project.link}" target="_blank" class="card-link">View on GitHub →</a> </div>`;

    // Inject into the DOM
    grid.innerHTML += cardHTML;
  }
}

// ── 4. RUN ON PAGE LOAD ───────────
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
});
const skills = ["HTML", "CSS", "JavaScript", "Git", "Responsive Design"];

function renderSkills() {
  const list = document.querySelector("#skills-list");
  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    li.classList.add("skill-item");
    list.appendChild(li);
  });
}

// ── 2. NAVBAR SCROLL EFFECT ───────
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// CSS: .navbar.scrolled { background: rgba(15,23,42,1); }

// ── 3. ACTIVE NAV LINK ─────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < bottom) {
      navLinks.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`a[href="#${section.id}"]`);
      if (active) active.classList.add("active");
    }
  });
});