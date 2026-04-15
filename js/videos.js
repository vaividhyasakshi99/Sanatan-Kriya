// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}

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

// SHORTS CONTAINER
const shortsContainer = document.getElementById("shortsContainer");

function formatViews(views) {
  const n = Number(views || 0);

  if (n >= 10000000) return (n / 10000000).toFixed(1).replace(/\.0$/, "") + " Cr views";
  if (n >= 100000) return (n / 100000).toFixed(1).replace(/\.0$/, "") + " L views";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + " K views";
  return n + " views";
}

async function loadTopShorts() {
  if (!shortsContainer) return;

  shortsContainer.innerHTML = `
    <div class="rounded-[1.5rem] border border-orange-100 bg-gradient-to-r from-white to-orange-50/60 p-6 text-center text-darkBrown/70">
      Loading top shorts...
    </div>
  `;

  try {
    const response = await fetch("get-top-shorts.php", {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Failed to fetch top shorts.");
    }

    const shorts = await response.json();

    if (!Array.isArray(shorts) || shorts.length === 0) {
      shortsContainer.innerHTML = `
        <div class="rounded-[1.5rem] border border-orange-100 bg-gradient-to-r from-white to-orange-50/60 p-6 text-center text-darkBrown/70">
          No shorts found right now.
        </div>
      `;
      return;
    }

    let cardsHTML = "";

    shorts.forEach(function (item, index) {
      cardsHTML += `
        <div class="grid md:grid-cols-[180px_1fr] gap-4 items-center rounded-[1.5rem] border border-orange-100 bg-gradient-to-r from-white to-orange-50/60 p-3 md:p-4 hover:shadow-[0_10px_30px_rgba(180,83,9,0.12)] transition duration-300">

<div class="block group cursor-pointer" onclick="playVideo('${item.id}', this)">
  <div class="video-thumb relative overflow-hidden rounded-[1.2rem] border border-orange-200 bg-orange-100 aspect-[9/16] max-w-[170px] mx-auto">
    <img
      src="${item.thumbnail}"
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
</div>

          <div class="text-center md:text-left">
            <p class="text-bhagwa font-semibold uppercase tracking-[0.18em] text-[11px]">
              Rank #${index + 1}
            </p>

            <h3 class="mt-1 text-xl md:text-2xl font-bold text-deepBhagwa font-heading">
              ${item.title}
            </h3>

            <p class="mt-2 text-sm md:text-base text-darkBrown/80 leading-7">
              ${item.description || "A devotional short from the channel."}
            </p>

            <p class="mt-3 text-sm font-semibold text-orange-700">
              ${formatViews(item.views)}
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
  } catch (error) {
    console.error(error);

    shortsContainer.innerHTML = `
      <div class="rounded-[1.5rem] border border-red-200 bg-red-50 p-6 text-center text-red-700">
        Could not load top shorts right now.
      </div>
    `;
  }
}

loadTopShorts();
function playVideo(videoId, element) {
  const thumbBox = element.querySelector(".video-thumb");

  if (!thumbBox) return;

  thumbBox.innerHTML = `
    <iframe
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="w-full h-full rounded-[1.2rem]"
    ></iframe>
  `;

  thumbBox.classList.remove("bg-orange-100");
}