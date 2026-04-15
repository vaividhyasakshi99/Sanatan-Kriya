// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    const isExpanded = !mobileMenu.classList.contains("hidden");
    menuToggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");

    const line1 = menuToggle.querySelector(".line1");
    const line2 = menuToggle.querySelector(".line2");
    const line3 = menuToggle.querySelector(".line3");

    if (line1 && line2 && line3) {
      if (isExpanded) {
        line1.style.transform = "translateY(6px) rotate(45deg)";
        line2.style.opacity = "0";
        line3.style.transform = "translateY(-6px) rotate(-45deg)";
      } else {
        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";
      }
    }
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
// MANDALA ROTATE + ZOOM ON SCROLL
const mainMandala = document.getElementById("mainMandala");

if (mainMandala) {
  function updateMandala() {
    const scrollY = window.scrollY || window.pageYOffset;
    const rotateDeg = scrollY * 0.08;
    const scaleValue = 1.12 + Math.min(scrollY * 0.00015, 0.18);

    mainMandala.style.transform = `translate(-50%, -50%) scale(${scaleValue}) rotate(${rotateDeg}deg)`;
  }

  updateMandala();
  window.addEventListener("scroll", updateMandala);
}
document.getElementById("contactForm").addEventListener("submit", function(e) {
  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const service = document.getElementById("service");
  const query = document.getElementById("query");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const serviceError = document.getElementById("serviceError");
  const queryError = document.getElementById("queryError");

  nameError.classList.add("hidden");
  emailError.classList.add("hidden");
  phoneError.classList.add("hidden");
  serviceError.classList.add("hidden");
  queryError.classList.add("hidden");

  if (name.value.trim() === "") {
    nameError.classList.remove("hidden");
    isValid = false;
  }

  if (email.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.classList.remove("hidden");
    isValid = false;
  }

  if (!/^[0-9]{10}$/.test(phone.value.trim())) {
    phoneError.classList.remove("hidden");
    isValid = false;
  }

  if (service.value.trim() === "") {
    serviceError.classList.remove("hidden");
    isValid = false;
  }

  if (query.value.trim() === "") {
    queryError.classList.remove("hidden");
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});