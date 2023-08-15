const projectsContainer = document.getElementById("projects-container");
const categoryLinks = document.querySelectorAll(".category-link");

      const projects = [
        {
          title: "Little Lemon",
          description:"Capstone project for Meta's Front-End Developer Certificate on Coursera",
          category: "web-dev",
          stack: ["React"],
          link: "images/external-link.png",
          linkhref: "https://littlelemongh.netlify.app/",
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/little-lemon",
        },
        {
          title: "Perspectives",
          description: "Blogsite for exploring life, design, and code.",
          category: "web-dev",
          stack: ["Flask, Bootstrap"],
          link: null,
          linkhref: null,
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/Perspectives",
        },
        {
          title: "Briefer",
          description: "AI-powered news app for news summaries from global sources.",
          category: "web-dev",
          stack: ["Flask, BeautifulSoup, ChatGPT"],
          link: null,
          linkhref: null,
          git: "images/github-square.png",
          githref: "https://github.com/itsfeizl/Briefer"
        },
        {
          title: "Original Trombones",
          description: "Landing page for Original Trombones (A capstone project for FreeCodeCamp's Responsive Web Design course)",
          category: "web-dev",
          stack: ["HTML, CSS"],
          link: "images/external-link.png",
          linkhref: "https://originaltrombonesgh.netlify.app/",
          git: null,
          githref: null
        },
        {
          title: "The Greatest",
          description: "Tribute page for the late Muhammed Ali (A capstone project for FreeCodeCamp's Responsive Web Design course).",
          category: "web-dev",
          stack: ["HTML, CSS"],
          link: "images/external-link.png",
          linkhref: "https://aligreatest.netlify.app/",
          git: null,
          githref: null
        }
      ];

      

const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Initialize current page
let currentPage = 0;

// Function to display projects based on current page
function displayProjects() {
  projectsContainer.innerHTML = "";
  const projectsPerPage = 3;
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  projects.slice(startIndex, endIndex).forEach((project) => {
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

// Initial display of projects
displayProjects();

// Navigation event listeners
nextButton.addEventListener("click", () => {
  currentPage++;
  displayProjects();
  prevButton.disabled = false; // Enable the Previous button

  // Disable the Next button if there are no more projects
  if (currentPage * 3 >= projects.length - 3) {
    nextButton.disabled = true;
  }
});

prevButton.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    displayProjects();
    nextButton.disabled = false; // Enable the Next button
    if (currentPage === 0) {
      prevButton.disabled = true; // Disable the Previous button when on the first page
    }
  }
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    categoryLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    currentPage = 0; // Reset current page when changing category
    displayProjects();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea, #contact-form button[type="submit"]');
  const alertMessage = document.querySelector('.alert');
  const submitButton = document.querySelector('button[type="submit"]');
  const socialIcons = document.querySelectorAll(".contact-details i");

  // Function to change social media icons color
  function changeIconColor(color) {
    socialIcons.forEach((icon) => {
      icon.style.color = color;
    });
  }

  // Function to handle form field click
  function handleFieldClick() {
    alertMessage.style.display = 'block';
    alertMessage.style.width ="90%";
    alertMessage.style.margin ="0 auto 20px";
    formFields.forEach(f => f.setAttribute('disabled', 'true'));
    submitButton.classList.add('disable-hover'); // Add the "disable-hover" class
    changeIconColor("#01a2e2"); // Change icon color to red
  }

  // Attach click event listeners to form fields
  formFields.forEach(field => {
    field.addEventListener('click', handleFieldClick);
  });

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
          formFields.forEach(f => f.removeAttribute('disabled'));
          submitButton.classList.remove('disable-hover'); // Remove the "disable-hover" class
          changeIconColor("#333"); // Reset icon color to default
        } else {
          alert("Error submitting form. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
