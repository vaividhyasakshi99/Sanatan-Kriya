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

// GALLERY DATA
// FUTURE ME IMAGES ADD KARNE KE LIYE BAS YAHAN NAYA OBJECT ADD KARNA HAI
const galleryImages = [
  {
    title: "Shri Krishna Divine Portrait",
    category: "krishna",
    src: "assets/gallery/krishna-1.jpg",
    downloadName: "shri-krishna-divine-portrait.jpg"
  },
  {
    title: "Mahadev Spiritual Art",
    category: "shiva",
    src: "assets/gallery/shiva-1.jpg",
    downloadName: "mahadev-spiritual-art.jpg"
  },
  {
    title: "Shri Ram HD Wallpaper",
    category: "ram",
    src: "assets/gallery/ram-1.jpg",
    downloadName: "shri-ram-hd-wallpaper.jpg"
  },
  {
    title: "Hanuman Ji Powerful Image",
    category: "hanuman",
    src: "assets/gallery/hanuman-1.jpg",
    downloadName: "hanuman-ji-powerful-image.jpg"
  },
  {
    title: "Maa Durga Divine Glow",
    category: "durga",
    src: "assets/gallery/durga-1.jpg",
    downloadName: "maa-durga-divine-glow.jpg"
  },
  {
    title: "Ganesh Ji HD Blessings",
    category: "ganesh",
    src: "assets/gallery/ganesh-1.jpg",
    downloadName: "ganesh-ji-hd-blessings.jpg"
  },
  {
    title: "Temple Evening Aarti",
    category: "temple",
    src: "assets/gallery/temple-1.jpg",
    downloadName: "temple-evening-aarti.jpg"
  },
  {
    title: "Radha Krishna Beautiful Art",
    category: "krishna",
    src: "assets/gallery/krishna-2.jpg",
    downloadName: "radha-krishna-beautiful-art.jpg"
  },
  {
    title: "Mahakal Powerful Wallpaper",
    category: "shiva",
    src: "assets/gallery/shiva-2.jpg",
    downloadName: "mahakal-powerful-wallpaper.jpg"
  },
  {
    title: "Bajrangbali Blessing Image",
    category: "hanuman",
    src: "assets/gallery/hanuman-2.jpg",
    downloadName: "bajrangbali-blessing-image.jpg"
  }
];

// ELEMENTS
const galleryGrid = document.getElementById("galleryGrid");
const gallerySearch = document.getElementById("gallerySearch");
const galleryCategory = document.getElementById("galleryCategory");
const emptyState = document.getElementById("emptyState");

// CARD TEMPLATE
function createGalleryCard(image) {
  return `
    <div class="gallery-item">
      <div class="gallery-card rounded-[1.75rem] overflow-hidden bg-white border border-orange-100 shadow-spiritual">
        <div class="relative group">
          <img
            src="${image.src}"
            alt="${image.title}"
            class="w-full h-auto object-cover"
            loading="lazy"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div class="absolute left-4 right-4 bottom-4 flex items-end justify-between gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
            <div class="min-w-0">
              <p class="text-white text-sm font-medium truncate">${image.title}</p>
            </div>

            <a
              href="${image.src}"
              download="${image.downloadName}"
              class="shrink-0 inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-white text-deepBhagwa text-sm font-semibold hover:scale-105 transition"
            >
              Download
            </a>
          </div>
        </div>

        <div class="p-4">
          <div class="flex items-center justify-between gap-3">
            <h3 class="text-base font-semibold text-deepBhagwa leading-6">${image.title}</h3>
            <span class="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-bhagwa bg-orange-50 px-3 py-1.5 rounded-full">
              ${image.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// RENDER GALLERY
function renderGallery(items) {
  if (!galleryGrid) return;

  if (items.length === 0) {
    galleryGrid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");
  galleryGrid.innerHTML = items.map(createGalleryCard).join("");
}

// FILTER LOGIC
function filterGallery() {
  const searchValue = gallerySearch ? gallerySearch.value.trim().toLowerCase() : "";
  const categoryValue = galleryCategory ? galleryCategory.value : "all";

  const filtered = galleryImages.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchValue) ||
      image.category.toLowerCase().includes(searchValue);

    const matchesCategory =
      categoryValue === "all" || image.category === categoryValue;

    return matchesSearch && matchesCategory;
  });

  renderGallery(filtered);
}

// EVENTS
if (gallerySearch) {
  gallerySearch.addEventListener("input", filterGallery);
}

if (galleryCategory) {
  galleryCategory.addEventListener("change", filterGallery);
}

// INITIAL RENDER
renderGallery(galleryImages);