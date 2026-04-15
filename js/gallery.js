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

const mobileMenuLinks = document.querySelectorAll("#mobileMenu a");

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu && menuToggle) {
      mobileMenu.classList.add("hidden");
      menuToggle.setAttribute("aria-expanded", "false");

      const line1 = menuToggle.querySelector(".line1");
      const line2 = menuToggle.querySelector(".line2");
      const line3 = menuToggle.querySelector(".line3");

      if (line1 && line2 && line3) {
        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";
      }
    }
  });
});

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

// ======================================================
// EASY IMAGE ADD SYSTEM
// ======================================================
// BAS YAHAN NAYI IMAGE ADD KARNI HAI
// godName = search + download name ke liye use hoga
// keywords = search me kaam aayega
// src = image path
//
// Example:
// {
//   godName: "shiv",
//   keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"],
//   src: "assets/gallery/shiv-1.jpg"
// }

const galleryImages = [
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv-1.jpg" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv-2.jpg" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv-3.jpg" },
  { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh-1.jpg" },
  { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh-2.jpg" },
  { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna-1.jpg" },
  { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna-2.jpg" },
  { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram-1.jpg" },
  { godName: "hanuman", keywords: ["hanuman", "bajrangbali", "pavanputra", "maruti"], src: "assets/gallery/hanuman-1.jpg" },
  { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga-1.jpg" },
  { godName: "laxmi", keywords: ["laxmi", "lakshmi", "maa laxmi", "maa lakshmi"], src: "assets/gallery/laxmi-1.jpg" },
  { godName: "saraswati", keywords: ["saraswati", "maa saraswati", "veena", "vidya"], src: "assets/gallery/saraswati-1.jpg" }
];

// ======================================================
// ELEMENTS
// ======================================================
const galleryGrid = document.getElementById("galleryGrid");
const gallerySearch = document.getElementById("gallerySearch");
const galleryCategory = document.getElementById("galleryCategory");
const emptyState = document.getElementById("emptyState");
const paginationWrapper = document.getElementById("paginationWrapper");

const IMAGES_PER_PAGE = 25;
let currentPage = 1;
let filteredImages = [...galleryImages];

// ======================================================
// HELPERS
// ======================================================
function getDownloadName(godName, src) {
  const extension = src.split(".").pop().toLowerCase();
  return `${godName}-sanatankriya.${extension}`;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

// ======================================================
// CARD TEMPLATE
// ======================================================
function createGalleryCard(image) {
  const downloadName = getDownloadName(image.godName, image.src);

  return `
    <div class="gallery-card rounded-[1.4rem] overflow-hidden bg-white border border-orange-100 shadow-spiritual">
      <div class="relative group">
        <img
          src="${image.src}"
          alt="${image.godName}"
          class="w-full aspect-square object-cover"
          loading="lazy"
        />

        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>

        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition duration-300">
          <span class="text-white text-xs sm:text-sm font-medium capitalize truncate">
            ${image.godName}
          </span>

          <a
            href="${image.src}"
            download="${downloadName}"
            class="inline-flex items-center justify-center px-3 py-2 rounded-full bg-white text-deepBhagwa text-xs sm:text-sm font-semibold hover:scale-105 transition"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  `;
}

// ======================================================
// RENDER GALLERY
// ======================================================
function renderGallery() {
  if (!galleryGrid) return;

  if (filteredImages.length === 0) {
    galleryGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    paginationWrapper.innerHTML = "";
    return;
  }

  emptyState.classList.add("hidden");

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const pageItems = filteredImages.slice(startIndex, endIndex);

  galleryGrid.innerHTML = pageItems.map(createGalleryCard).join("");
  renderPagination();
}

// ======================================================
// RENDER PAGINATION
// ======================================================
function renderPagination() {
  if (!paginationWrapper) return;

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);

  if (totalPages <= 1) {
    paginationWrapper.innerHTML = "";
    return;
  }

  let buttonsHTML = "";

  for (let page = 1; page <= totalPages; page++) {
    const activeClasses =
      page === currentPage
        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white border-orange-500"
        : "bg-white text-deepBhagwa border-orange-200 hover:bg-orange-50";

    buttonsHTML += `
      <button
        class="page-btn min-w-[44px] h-11 px-4 rounded-full border font-medium transition ${activeClasses}"
        data-page="${page}"
      >
        ${page}
      </button>
    `;
  }

  paginationWrapper.innerHTML = buttonsHTML;

  const pageButtons = paginationWrapper.querySelectorAll(".page-btn");
  pageButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = Number(btn.dataset.page);
      renderGallery();
      window.scrollTo({
        top: galleryGrid.offsetTop - 120,
        behavior: "smooth"
      });
    });
  });
}

// ======================================================
// FILTER LOGIC
// ======================================================
function filterGallery() {
  const searchValue = normalizeText(gallerySearch ? gallerySearch.value : "");
  const categoryValue = normalizeText(galleryCategory ? galleryCategory.value : "all");

  filteredImages = galleryImages.filter((image) => {
    const godName = normalizeText(image.godName);
    const keywords = (image.keywords || []).map(normalizeText);

    const matchesSearch =
      searchValue === "" ||
      godName.includes(searchValue) ||
      keywords.some((keyword) => keyword.includes(searchValue));

    const matchesCategory =
      categoryValue === "all" || godName === categoryValue;

    return matchesSearch && matchesCategory;
  });

  currentPage = 1;
  renderGallery();
}

// ======================================================
// EVENTS
// ======================================================
if (gallerySearch) {
  gallerySearch.addEventListener("input", filterGallery);
}

if (galleryCategory) {
  galleryCategory.addEventListener("change", filterGallery);
}

// ======================================================
// INITIAL RENDER
// ======================================================
renderGallery();