// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".project-card, .timeline-item, .certification-item, .social-link"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Initialize typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
});

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Social link hover effects
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px) scale(1.05)";
  });

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// CV download functionality (placeholder)
document.querySelector(".cv-download .btn").addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    "CV download functionality would be implemented here. You can replace this with an actual PDF download."
  );
});

// Contact form validation (if you add a contact form later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add CSS for active navigation link
const style = document.createElement("style");
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Scroll projects to the right by one card width when the button is clicked
const scrollBtn = document.getElementById("scrollProjectsBtn");
const projectsGrid = document.getElementById("projectsGrid");
const scrollWrapper = document.querySelector(".projects-scroll-wrapper");

if (scrollBtn && projectsGrid && scrollWrapper) {
  scrollBtn.addEventListener("click", () => {
    // Find the width of a project card (including gap)
    const card = projectsGrid.querySelector(".project-card");
    if (card) {
      const cardStyle = window.getComputedStyle(card);
      const cardWidth =
        card.offsetWidth +
        parseInt(cardStyle.marginRight || 0) +
        parseInt(cardStyle.marginLeft || 0) +
        32; // 32px = 2rem gap
      scrollWrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  });
}

const scrollLeftBtn = document.getElementById("scrollProjectsLeftBtn");
const scrollRightBtn = document.getElementById("scrollProjectsRightBtn");

function updateScrollButtons() {
  if (!scrollWrapper) return;
  // Disable left if at start, right if at end
  scrollLeftBtn.disabled = scrollWrapper.scrollLeft <= 0;
  scrollRightBtn.disabled =
    scrollWrapper.scrollLeft + scrollWrapper.offsetWidth >=
    scrollWrapper.scrollWidth - 2;
}

if (scrollLeftBtn && scrollRightBtn && projectsGrid && scrollWrapper) {
  scrollLeftBtn.addEventListener("click", () => {
    scrollWrapper.scrollBy({
      left: -scrollWrapper.offsetWidth,
      behavior: "smooth",
    });
  });
  scrollRightBtn.addEventListener("click", () => {
    scrollWrapper.scrollBy({
      left: scrollWrapper.offsetWidth,
      behavior: "smooth",
    });
  });
  scrollWrapper.addEventListener("scroll", updateScrollButtons);
  window.addEventListener("resize", updateScrollButtons);
  updateScrollButtons();
}
