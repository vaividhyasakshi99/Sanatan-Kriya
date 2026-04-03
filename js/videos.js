// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}

// MANDALA ROTATE + ZOOM ON SCROLL
const mandala = document.getElementById("mainMandala");

if (mandala) {
  function updateMandala() {
    const scrollY = window.scrollY || window.pageYOffset;
    const rotateDeg = scrollY * 0.08;
    const scaleValue = 1.12 + Math.min(scrollY * 0.00015, 0.18);

    mandala.style.transform = `translate(-50%, -50%) scale(${scaleValue}) rotate(${rotateDeg}deg)`;
  }

  updateMandala();
  window.addEventListener("scroll", updateMandala);
}

// SHORTS DATA
const shortsData = [
  {
    id: "Bz2uMQsIifQ",
    link: "https://youtube.com/shorts/Bz2uMQsIifQ?si=2ktVaWWt5uQw3N6T",
    label: "Short 01",
    title: "Divine Spiritual Short",
    description: "A devotional short filled with spiritual warmth and sacred positivity."
  },
  {
    id: "msYtDwSvS6c",
    link: "https://youtube.com/shorts/msYtDwSvS6c?si=HTIvP-j3UKUHO9Gf",
    label: "Short 02",
    title: "Faith & Devotion Clip",
    description: "A short glimpse of bhakti, emotion, and uplifting divine energy."
  },
  {
    id: "42PkuJo1QG0",
    link: "https://youtube.com/shorts/42PkuJo1QG0?si=GwkWLfWJjQYJZTIh",
    label: "Short 03",
    title: "Bhakti Filled Moment",
    description: "A sacred short-form moment that brings devotional feeling into digital form."
  },
  {
    id: "L4Hrcugc2Qc",
    link: "https://youtube.com/shorts/L4Hrcugc2Qc?si=uE8bgVKF2WvlyW2O",
    label: "Short 04",
    title: "Sacred Expression",
    description: "A peaceful and spiritually expressive clip from the channel."
  },
  {
    id: "Mol-rpvbTKw",
    link: "https://youtube.com/shorts/Mol-rpvbTKw?si=aoJCt47fJ6OllYyR",
    label: "Short 05",
    title: "Divine Positivity",
    description: "A devotional short that spreads calmness, grace, and sacred positivity."
  },
  {
    id: "kH6pPr1ornA",
    link: "https://youtube.com/shorts/kH6pPr1ornA?si=ngAwgVF0-MBfCT5b",
    label: "Short 06",
    title: "Sacred Digital Snippet",
    description: "A short spiritual clip meant to uplift and inspire."
  },
  {
    id: "GlfE-XSYIhU",
    link: "https://youtube.com/shorts/GlfE-XSYIhU?si=_Rpf0SrklqhWS7jH",
    label: "Short 07",
    title: "Devotional Glimpse",
    description: "A divine visual moment reflecting spirituality and sacred inspiration."
  },
  {
    id: "aLjKuHIRpak",
    link: "https://youtube.com/shorts/aLjKuHIRpak?si=0iCxybp1vQVf4WfE",
    label: "Short 08",
    title: "Graceful Spiritual Moment",
    description: "A warm and graceful spiritual short from the channel."
  },
  {
    id: "NLRwpfFyazY",
    link: "https://youtube.com/shorts/NLRwpfFyazY?si=IwCO2RXaBKOMUQdu",
    label: "Short 09",
    title: "Spiritual Energy Clip",
    description: "A short-form devotional clip designed to uplift and connect."
  },
  {
    id: "Xa87CKVlpe8",
    link: "https://youtube.com/shorts/Xa87CKVlpe8?si=QoIsRVBiP80vfCVj",
    label: "Short 10",
    title: "Digital Bhakti Experience",
    description: "A spiritually uplifting short representing the devotional tone of the channel."
  }
];

// RENDER SHORTS
const shortsContainer = document.getElementById("shortsContainer");

if (shortsContainer) {
  let cardsHTML = "";

  shortsData.forEach(function (item) {
    cardsHTML += `
      <div class="grid md:grid-cols-[180px_1fr] gap-4 items-center rounded-[1.5rem] border border-orange-100 bg-gradient-to-r from-white to-orange-50/60 p-3 md:p-4 hover:shadow-[0_10px_30px_rgba(180,83,9,0.12)] transition duration-300">
        
        <a href="${item.link}" target="_blank" class="block group">
          <div class="relative overflow-hidden rounded-[1.2rem] border border-orange-200 bg-orange-100 aspect-[9/16] max-w-[170px] mx-auto">
            <img
              src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg"
              alt="${item.title}"
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-12 h-12 rounded-full bg-white/85 flex items-center justify-center shadow-lg">
                <svg class="w-5 h-5 text-orange-600 ml-[2px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>

        <div class="text-center md:text-left">
          <p class="text-bhagwa font-semibold uppercase tracking-[0.18em] text-[11px]">${item.label}</p>
          <h3 class="mt-1 text-xl md:text-2xl font-bold text-deepBhagwa font-heading">${item.title}</h3>
          <p class="mt-2 text-sm md:text-base text-darkBrown/80 leading-7">
            ${item.description}
          </p>
          <a
            href="${item.link}"
            target="_blank"
            class="inline-flex mt-4 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-medium hover:scale-105 transition"
          >
            Watch on YouTube
          </a>
        </div>

      </div>
    `;
  });

  shortsContainer.innerHTML = cardsHTML;
}