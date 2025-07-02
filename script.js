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
    link: "#"document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio JavaScript loaded!");

    // --- Dynamic Projects Section ---
    // Define your projects here. This data will be used to populate the projects section.
    // IMPORTANT: Replace 'githubLink' and 'liveLink' with your actual project URLs.
    const projects = [
        {
            title: "E-commerce Platform Backend",
            description: "Developed scalable microservices for a full-featured e-commerce platform using Spring Boot and PostgreSQL, handling user authentication, product catalog, and order processing. Implemented secure REST APIs.",
            technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Microservices"],
            githubLink: "https://github.com/ReddySujith883/ecommerce-backend", // Replace with your actual GitHub link
            liveLink: "#" // Replace with a live demo link if available, or keep '#' if none
        },
        {
            title: "Patient Portal UI",
            description: "Built an intuitive and responsive patient portal user interface with React.js and TypeScript, focusing on improving user engagement and mobile load times. Features included appointment scheduling and health record viewing.",
            technologies: ["React.js", "TypeScript", "Redux", "Material UI", "HTML5", "CSS3"],
            githubLink: "https://github.com/ReddySujith883/patient-portal-ui", // Replace with your actual GitHub link
            liveLink: "#"
        },
        {
            title: "Real-time Data Pipeline",
            description: "Engineered real-time streaming and event-driven data pipelines using Apache Kafka to efficiently process high-volume diagnostic data, significantly increasing data ingestion speed and responsiveness.",
            technologies: ["Apache Kafka", "Java", "Spring Boot", "Event-Driven", "Data Streaming"],
            githubLink: "https://github.com/ReddySujith883/realtime-data-pipeline", // Replace with your actual GitHub link
            liveLink: "#"
        },
        {
            title: "CI/CD Automation with Docker & Jenkins",
            description: "Constructed automated deployment workflows leveraging Docker and Jenkins, enabling CI/CD pipelines that shortened release cycles and improved deployment consistency across environments.",
            technologies: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Terraform"],
            githubLink: "https://github.com/ReddySujith883/cicd-automation", // Replace with your actual GitHub link
            liveLink: "#"
        },
        {
            title: "Financial Reporting System",
            description: "Architected and maintained backend services using Java Spring Boot with MySQL and MongoDB, significantly reducing financial report generation times through optimized queries and efficient data retrieval.",
            technologies: ["Java", "Spring Boot", "MySQL", "MongoDB", "Data Optimization"],
            githubLink: "https://github.com/ReddySujith883/financial-reporting", // Example, replace
            liveLink: "#"
        },
        {
            title: "Responsive Web Design Framework",
            description: "Developed interactive frontend components and reusable React.js modules, implementing responsive web design principles that enhanced accessibility and usability across desktop and mobile platforms.",
            technologies: ["React.js", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
            githubLink: "https://github.com/ReddySujith883/responsive-framework", // Example, replace
            liveLink: "#"
        }
        // Add more projects following the same structure
    ];

    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            // Constructing project links dynamically
            let linksHtml = `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>`;
            if (project.liveLink && project.liveLink !== '#') {
                linksHtml += `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live Demo</a>`;
            }

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                <div class="links">
                    ${linksHtml}
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                displayMessage('Please fill in all fields.', 'error');
                return;
            }
            if (!validateEmail(email)) {
                displayMessage('Please enter a valid email address.', 'error');
                return;
            }

            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest. For this example, we'll just simulate success.
            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate API call success/failure
            setTimeout(() => {
                const success = true; // Change to false to test error message

                if (success) {
                    displayMessage('Thank you for your message! I will get back to you soon.', 'success');
                    contactForm.reset(); // Clear the form
                } else {
                    displayMessage('There was an error sending your message. Please try again later.', 'error');
                }
            }, 1000); // Simulate network delay

        });
    }

    // Helper function to display form messages
    function displayMessage(msg, type) {
        formMessage.textContent = msg;
        formMessage.className = `form-message ${type}`; // Add success or error class
        formMessage.style.display = 'block'; // Make visible
        // Hide message after a few seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message'; // Reset classes
        }, 5000);
    }

    // Basic email validation regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- Smooth Scrolling for Navigation (if you add a navigation bar) ---
    // Example: If you add <nav><a href="#about">About</a></nav>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

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
