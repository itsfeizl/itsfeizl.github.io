const projectsContainer = document.getElementById("projects-container");
const categoryLinks = document.querySelectorAll(".category-link");

      const projects = [
        {
          link: "images/external-link.png",
          linkhref: "https://littlelemongh.netlify.app/",
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
          title: "Little Lemon",
          description:
            "Capstone project for Meta's Front-End Developer Certificate on Coursera",
          category: "web-dev",
          stack: ["React"],
        },
        {
          link: null,
          linkhref: null,
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/Perspectives",
          title: "Perspectives",
          description: "Blogsite for exploring life, design, and code.",
          category: "web-dev",
          stack: ["Python", "Flask", "Bootstrap"],
        },
        {
          link: null,
          linkhref: null,
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
          title: "Briefer",
          description: "AI-powered news app that summarizes important new updates from global sources.",
          category: "web-dev",
          stack: ["Python", "Flask", "BeautifulSoup", "ChatGPT"],
        },
        {
          link: "images/external-link.png",
          linkhref: "originaltrombonesgh.netlify.app",
          git: null,
          githref: null,
          title: "Original Trombones",
          description: "Redesigning landing page for Original Trombones ()",
          category: "web-dev",
          stack: ["HTML, CSS"]
        },
        {
          link: "images/external-link.png",
          linkhref: "algreatest.netlify.app",
          git: null,
          githref: null,
          title: "The Greatest",
          description: "Tribute page for the late Muhammed Ali.",
          category: "web-dev",
          stack: ["HTML, CSS"]
        },
        {
          link: "images/external-link.png",
          linkhref: "https://littlelemongh.netlify.app/",
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
          title: "Project 4",
          description: "Description of Project 4",
          category: "ux-design",
          stack: ["Bootstrap", "React", "Node.js"],
        },
        {
          link: "images/external-link.png",
          linkhref: "https://littlelemongh.netlify.app/",
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
          title: "Project 5",
          description: "Description of Project 4",
          category: "ux-design",
          stack: ["Bootstrap", "React", "Node.js"],
        },
        {
          link: "images/external-link.png",
          linkhref: "https://littlelemongh.netlify.app/",
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
          title: "Project 6",
          description: "Description of Project 4",
          category: "ux-design",
          stack: ["Bootstrap", "React", "Node.js"],
        },
      ];

      function displayProjects(category) {
        projectsContainer.innerHTML = "";
        projects
          .filter((project) => project.category === category)
          .forEach((project) => {
            const projectHtml = `
              <div class="col-md-4 ">
                <div class="project" style="padding-bottom: 0">
                  <!-- Project HTML content -->
                  <div style="display: flex;">
                    ${
                      (project.link && project.linkhref) 
                        ? `<div style="width: 20px; margin-right: 5px">
                            <a href=${project.linkhref} target="_blank"><img src=${project.link}
                            style="max-width: 100%" /></a>
                          </div>`
                        : ""
                    }
                    ${
                      (project.git && project.githref) 
                        ? `<div style="width: 20px;">
                            <a href=${project.githref} target="_blank"><img src=${project.git} style="max-width: 100%" /></a>
                          </div>`
                        : ""
                    }
                  </div>
                  <div style="text-align: left; justify-content: space-between">
                    <h5>${project.title}</h5>
                    <p style="font-size: 0.9rem; margin-bottom: 10px">${project.description}</p>
                    <ul style="padding: 15px;">
                      ${project.stack.map((tech) => `<li style="font-size:0.9rem">${tech}</li>`).join("")}
                    </ul>
                  </div>
                </div>
              </div>
            `;
            projectsContainer.innerHTML += projectHtml;
          });
      }
      


      categoryLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          const category = this.getAttribute("data-category");
          categoryLinks.forEach((link) => link.classList.remove("active"));
          this.classList.add("active");
          displayProjects(category);
        });
      });

      // Initial display of projects
      displayProjects("web-dev");

      document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", function (event) {
          event.preventDefault();

          // Client-side validation
          const name = document.getElementById("name").value.trim();
          const email = document.getElementById("email").value.trim();
          const message = document.getElementById("message").value.trim();

          if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
          }

          // Send data to server using fetch
          const formData = new FormData();
          formData.append("name", name);
          formData.append("email", email);
          formData.append("message", message);

          fetch("your-server-endpoint", {
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                alert("Form submitted successfully.");
                form.reset();
              } else {
                alert("Error submitting form. Please try again later.");
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        });
      });