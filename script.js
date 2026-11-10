const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Update these values with your real profile links before publishing.
const profileLinks = {
  github: "",   // Example: https://github.com/your-username
  linkedin: ""  // Example: https://www.linkedin.com/in/your-profile
};

document.querySelectorAll(".profile-link").forEach((link) => {
  const platform = link.textContent.toLowerCase().includes("github") ? "github" : "linkedin";
  if (profileLinks[platform]) {
    link.href = profileLinks[platform];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your " + platform + " profile URL in js/script.js.");
    });
  }
});

document.getElementById("email-button").addEventListener("click", (event) => {
  if (event.currentTarget.href.includes("YOUR_EMAIL@example.com")) {
    event.preventDefault();
    alert("Replace YOUR_EMAIL@example.com in index.html with your professional email address.");
  }
});
