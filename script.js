// Smooth scrolling with callback
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    target.scrollIntoView({
      behavior: "smooth",
    });

    // Add visible class for contact section
    if (targetId === "#Contact") {
      setTimeout(() => {
        target.classList.add("visible");
      }, 300);
    }
  });
});

// Intersection Observer for Contact section
const observerOptions = {
  threshold: 0.1,
  rootMargin: "-50px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Observe Contact section
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector("#Contact");
  if (contactSection) {
    observer.observe(contactSection);
  }
});

//navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 5
    ? (navbar.style.background = "rgba(10,10,10,0.98)")
    : (navbar.style.background = "rgba(10,10,10,0.95)");
});

// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-link");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
});
