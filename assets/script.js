// LOAD PROJECTS
async function loadProjects() {
  const res = await fetch('data/projects.json');
  const projects = await res.json();
  renderProjects(projects);
}

// RENDER PROJECTS
function renderProjects(projects) {
  const grid = document.getElementById("projectGrid");
  if (!grid) return;

  grid.innerHTML = "";

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" style="width:100%;border-radius:10px;">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <span style="color:#00ffb3;">${p.category}</span>
    `;
    grid.appendChild(card);
  });
}

// FILTER SYSTEM
function filterProjects(type, allProjects) {
  if (type === "all") return renderProjects(allProjects);
  renderProjects(allProjects.filter(p => p.category === type));
}
