// MOBILE MENU
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// SINGLE MANDALA SCROLL EFFECT
const mainMandala = document.getElementById("mainMandala");

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (mainMandala) {
    mainMandala.style.transform =
      `translate(-50%, -50%) rotate(${y * 0.08}deg) scale(${1 + (y * 0.00008)})`;
  }
});