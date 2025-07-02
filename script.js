const projects = [
  {
    title: "Portfolio Website",
    description: "A modern responsive portfolio to showcase personal projects.",
    tech: "HTML, CSS, JS",
    link: "#"
  },
  {
    title: "To-Do App",
    description: "A simple yet powerful to-do list with local storage support.",
    tech: "React, Tailwind",
    link: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Weather app using OpenWeatherMap API.",
    tech: "JavaScript, API, Bootstrap",
    link: "#"
  }
];

const projectContainer = document.getElementById('projects');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <small><strong>Tech:</strong> ${project.tech}</small><br><br>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectContainer.appendChild(card);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent!');
  this.reset();
});
