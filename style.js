
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

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
  });
  // Visitor counter functionality
   const countElement = document.getElementById("visitor-count");

  fetch("https://api.countapi.xyz/update/sumitkumar/portfolio/?amount=1")
    .then((res) => res.json())
    .then((data) => {
      countElement.innerText = data.value;
    })
    .catch((err) => {
      console.error("Visitor count error:", err);
      countElement.innerText = "N/A";
    });