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
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const galleryImages = [
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (0).jpg" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (1).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (2).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (3).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (4).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (5).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (6).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (7).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (8).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (9).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (10).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (11).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (12).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (13).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (14).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (15).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (16).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (17).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (18).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (19).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (20).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (21).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (22).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (23).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (24).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (25).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (26).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (27).png" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (28).jpg" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (29).jpg" },
  { godName: "shiv", keywords: ["shiv", "mahadev", "mahakal", "bholenath", "shankar"], src: "assets/gallery/shiv/shiv (30).jpg" },

   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (1).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (2).png" },  
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (3).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (4).png" },  
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (5).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (6).png" },  
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe"], src: "assets/gallery/durga/durga (7).png" }, 

   { godName: "hanuman", keywords: ["hanuman", "bajrangbali", "pavanputra", "maruti"], src: "assets/gallery/hanuman/hanuman (0).jpg" },
   { godName: "hanuman", keywords: ["hanuman", "bajrangbali", "pavanputra", "maruti"], src: "assets/gallery/hanuman/hanuman (1).png" },
   { godName: "hanuman", keywords: ["hanuman", "bajrangbali", "pavanputra", "maruti"], src: "assets/gallery/hanuman/hanuman (2).png" },
   { godName: "hanuman", keywords: ["hanuman", "bajrangbali", "pavanputra", "maruti"], src: "assets/gallery/hanuman/hanuman (3).png" },

   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (0).jpg" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (1).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (2).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (3).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (4).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (5).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (6).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (7).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (8).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (9).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (10).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (11).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (12).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (13).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (14).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (15).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (16).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (17).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (18).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (19).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (20).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (21).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (22).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (23).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (24).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (25).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (26).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (27).png" },
   { godName: "krishna", keywords: ["krishna", "radha krishna", "kanha", "gopal", "murlidhar"], src: "assets/gallery/krishna/krishna (28).png" },
   
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (1).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (2).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (3).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (4).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (5).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (6).png" },
   { godName: "durga", keywords: ["durga", "maa durga", "ambe", "jagdambe", "mata rani"], src: "assets/gallery/durga/durga (7).png" },

   { godName: "lakshmi", keywords: ["laxmi", "lakshmi", "maa laxmi", "maa lakshmi"], src: "assets/gallery/lakshmi/lakshmi (1).png" },
   { godName: "lakshmi", keywords: ["laxmi", "lakshmi", "maa laxmi", "maa lakshmi"], src: "assets/gallery/lakshmi/lakshmi (2).png" },
   { godName: "lakshmi", keywords: ["laxmi", "lakshmi", "maa laxmi", "maa lakshmi"], src: "assets/gallery/lakshmi/lakshmi (3).png" },

   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (1).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (2).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (3).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (4).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (5).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (6).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (7).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (8).png" },
   { godName: "ram", keywords: ["ram", "shri ram", "raghav", "ram ji"], src: "assets/gallery/ram/ram (9).png" },


   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (1).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (2).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (3).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (4).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (5).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (6).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (7).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (8).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (9).png" },
   { godName: "ganesh", keywords: ["ganesh", "ganesha", "ganpati", "vinayak"], src: "assets/gallery/ganesh/ganesh (10).png" },
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
let filteredImages = shuffleArray([...galleryImages]);

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

  filteredImages = shuffleArray(
    galleryImages.filter((image) => {
      const godName = normalizeText(image.godName);
      const keywords = (image.keywords || []).map(normalizeText);

      const matchesSearch =
        searchValue === "" ||
        godName.includes(searchValue) ||
        keywords.some((keyword) => keyword.includes(searchValue));

      const matchesCategory =
        categoryValue === "all" || godName === categoryValue;

      return matchesSearch && matchesCategory;
    })
  );

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