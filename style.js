
document.addEventListener("DOMContentLoaded", () => {
  // Navbar active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        currentSectionId = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger-menu");
  const navLinksList = document.querySelector(".nav-links");
  if (hamburger && navLinksList) {
    hamburger.addEventListener("click", () => {
      navLinksList.classList.toggle("active");
    });
  }

  // Visitor counter functionality
  const countElement = document.getElementById("visitor-count");
  if (countElement) {
    fetch("https://api.countapi.xyz/update/sumitkumar/portfolio/?amount=1")
      .then((res) => res.json())
      .then((data) => {
        countElement.innerText = data.value;
      })
      .catch((err) => {
        console.error("Visitor count error:", err);
        countElement.innerText = "N/A";
      });
  }
});
