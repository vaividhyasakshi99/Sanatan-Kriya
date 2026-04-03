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

// AARTI DATA
const aartiData = [
  {
    id: 1,
    title: "जय गणेश देवा",
    deity: "गणपति जी",
    category: "ganesh",
    occasionLabel: "Ganesh Chaturthi",
    image: "assets/aarti/ganesh.jpg",
    audio: "assets/aarti-audio/ganesh-aarti.mp3",
    verses: [
      `जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥`,

      `एक दंत दयावंत, चार भुजा धारी।
माथे सिंदूर सोहे, मूसे की सवारी॥`,

      `अंधन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥`,

      `हार चढ़े, फूल चढ़े और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥`,

      `दीनन की लाज रखो, शंभु सुतवारी।
कामना को पूर्ण करो, जग बलिहारी॥`
    ]
  },
  {
    id: 2,
    title: "ॐ जय जगदीश हरे",
    deity: "विष्णु जी",
    category: "daily",
    occasionLabel: "Daily",
    image: "assets/aarti/vishnu.jpg",
    audio: "assets/aarti-audio/om-jai-jagdish.mp3",
    verses: [
      `ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे।
भक्त जनों के संकट, क्षण में दूर करे॥`,

      `जो ध्यावे फल पावे, दुख विनसे मन का।
सुख संपत्ति घर आवे, कष्ट मिटे तन का॥`,

      `मात पिता तुम मेरे, शरण गहूं किसकी।
तुम बिन और न दूजा, आस करूं जिसकी॥`,

      `तुम पूरण परमात्मा, तुम अंतर्यामी।
पारब्रह्म परमेश्वर, तुम सबके स्वामी॥`
    ]
  },
  {
    id: 3,
    title: "जय अम्बे गौरी",
    deity: "दुर्गा जी",
    category: "navratri",
    occasionLabel: "Navratri",
    image: "assets/aarti/durga.jpg",
    audio: "assets/aarti-audio/durga-aarti.mp3",
    verses: [
      `जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशिदिन ध्यावत, हरि ब्रह्मा शिवरी॥`,

      `मांग सिंदूर विराजत, टीको मृगमद को।
उज्ज्वल से दोऊ नैना, चंद्रवदन नीको॥`,

      `कनक समान कलेवर, रक्ताम्बर राजे।
रक्त पुष्प गलमाला, कंठन पर साजे॥`
    ]
  },
  {
    id: 4,
    title: "आरती कुंज बिहारी की",
    deity: "श्री कृष्ण",
    category: "krishnajanmashtami",
    occasionLabel: "Janmashtami",
    image: "assets/aarti/krishna.jpg",
    audio: "assets/aarti-audio/krishna-aarti.mp3",
    verses: [
      `आरती कुंज बिहारी की, श्री गिरिधर कृष्ण मुरारी की।
गले में वैजयंती माला, बजावे मुरली मधुर बाला॥`,

      `श्रवण में कुंडल झलकाला, नंद के आनंद नंदलाला।
गगन सम अंग कांति काली, राधिका चमक रही आली॥`,

      `लतन में ठाढ़े बनमाली, भ्रमर सी अलक, कस्तूरी तिलक।
चंद्र सी झलक, ललित छवि श्यामा प्यारी की॥`
    ]
  },
  {
    id: 5,
    title: "श्री रामचंद्र कृपालु भज मन",
    deity: "श्री राम",
    category: "ramnavami",
    occasionLabel: "Ram Navami",
    image: "assets/aarti/ram.jpg",
    audio: "assets/aarti-audio/ram-aarti.mp3",
    verses: [
      `श्री रामचंद्र कृपालु भज मन, हरण भव भय दारुणं।
नव कंज लोचन, कंज मुख, कर कंज पद कंजारुणं॥`,

      `कंदर्प अगणित अमित छवि, नव नील नीरद सुंदरं।
पट पीत मानहु तड़ित रुचि, शुचि नौमि जनक सुतावरं॥`,

      `भजु दीनबंधु दिनेश दानव, दैत्य वंश निकंदनं।
रघुनंद आनंदकंद कोसल, चंद दशरथ नंदनं॥`
    ]
  },
  {
    id: 6,
    title: "आरती कीजै हनुमान लला की",
    deity: "हनुमान जी",
    category: "hanumanjayanti",
    occasionLabel: "Hanuman Jayanti",
    image: "assets/aarti/hanuman.jpg",
    audio: "assets/aarti-audio/hanuman-aarti.mp3",
    verses: [
      `आरती कीजै हनुमान लला की।
दुष्ट दलन रघुनाथ कला की॥`,

      `जाके बल से गिरिवर कांपे।
रोग दोष जाके निकट न झांके॥`,

      `अंजनी पुत्र महा बलदाई।
संतन के प्रभु सदा सहाई॥`
    ]
  },
  {
    id: 7,
    title: "जय शिव ओंकारा",
    deity: "शिव जी",
    category: "shivratri",
    occasionLabel: "Mahashivratri",
    image: "assets/aarti/shiva.jpg",
    audio: "assets/aarti-audio/shiv-aarti.mp3",
    verses: [
      `जय शिव ओंकारा, ॐ जय शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा॥`,

      `एकानन चतुरानन पंचानन राजे।
हंसासन गरुड़ासन वृषवाहन साजे॥`,

      `दो भुज चार चतुर्भुज दस भुज अति सोहे।
त्रिगुण रूप निरखते त्रिभुवन जन मोहे॥`
    ]
  }
];

// ELEMENTS
const aartiSearch = document.getElementById("aartiSearch");
const aartiCategory = document.getElementById("aartiCategory");
const aartiCardsGrid = document.getElementById("aartiCardsGrid");
const aartiEmptyState = document.getElementById("aartiEmptyState");

const featuredAartiImage = document.getElementById("featuredAartiImage");
const featuredAartiCategory = document.getElementById("featuredAartiCategory");
const featuredAartiTitle = document.getElementById("featuredAartiTitle");
const featuredAartiText = document.getElementById("featuredAartiText");
const paragraphIndexDisplay = document.getElementById("paragraphIndexDisplay");
const paragraphTotalDisplay = document.getElementById("paragraphTotalDisplay");

const prevParagraphBtn = document.getElementById("prevParagraphBtn");
const nextParagraphBtn = document.getElementById("nextParagraphBtn");

const featuredAudio = document.getElementById("featuredAudio");
const audioSeek = document.getElementById("audioSeek");
const playPauseBtn = document.getElementById("playPauseBtn");
const backwardBtn = document.getElementById("backwardBtn");
const forwardBtn = document.getElementById("forwardBtn");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

let filteredAartis = [...aartiData];
let currentAarti = filteredAartis[0];
let currentVerseIndex = 0;

// FORMAT TIME
function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// LOAD FEATURED AARTI
function loadFeaturedAarti(aarti, resetVerse = true) {
  currentAarti = aarti;

  if (resetVerse) {
    currentVerseIndex = 0;
  }

  featuredAartiImage.src = aarti.image;
  featuredAartiImage.alt = aarti.title;
  featuredAartiCategory.textContent = aarti.occasionLabel;
  featuredAartiTitle.textContent = aarti.title;
  paragraphTotalDisplay.textContent = aarti.verses.length;

  updateVerse();
  loadAudio(aarti.audio);
}

// UPDATE VERSE
function updateVerse() {
  featuredAartiText.textContent = currentAarti.verses[currentVerseIndex];
  paragraphIndexDisplay.textContent = currentVerseIndex + 1;
}

// LOAD AUDIO
function loadAudio(audioSrc) {
  featuredAudio.src = audioSrc;
  featuredAudio.load();
  playPauseBtn.textContent = "Play";
  audioSeek.value = 0;
  currentTimeEl.textContent = "00:00";
  durationEl.textContent = "00:00";
}

// AARTI CARD
function createAartiCard(aarti) {
  return `
    <button
      class="aarti-list-card text-left rounded-[1.75rem] overflow-hidden bg-white border border-orange-100 shadow-spiritual"
      data-aarti-id="${aarti.id}"
    >
      <div class="h-56 overflow-hidden">
        <img src="${aarti.image}" alt="${aarti.title}" class="w-full h-full object-cover" />
      </div>

      <div class="p-5">
        <div class="flex items-center justify-between gap-3">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-bhagwa bg-orange-50 px-3 py-1.5 rounded-full">
            ${aarti.occasionLabel}
          </span>
          <span class="text-sm text-darkBrown/65">${aarti.deity}</span>
        </div>

        <h4 class="mt-4 text-2xl font-bold text-deepBhagwa font-heading">
          ${aarti.title}
        </h4>

        <p class="mt-3 text-darkBrown/75 line-clamp-custom leading-7">
          ${aarti.verses[0]}
        </p>
      </div>
    </button>
  `;
}

// RENDER CARDS
function renderAartiCards(items) {
  if (!items.length) {
    aartiCardsGrid.innerHTML = "";
    aartiEmptyState.classList.remove("hidden");
    return;
  }

  aartiEmptyState.classList.add("hidden");
  aartiCardsGrid.innerHTML = items.map(createAartiCard).join("");

  const cardButtons = document.querySelectorAll("[data-aarti-id]");
  cardButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.getAttribute("data-aarti-id"));
      const selected = filteredAartis.find((item) => item.id === id);
      if (selected) {
        loadFeaturedAarti(selected, true);
        document.getElementById("aartiMainSection").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// FILTER
function filterAartis() {
  const searchValue = aartiSearch.value.trim().toLowerCase();
  const categoryValue = aartiCategory.value;

  filteredAartis = aartiData.filter((aarti) => {
    const matchesSearch =
      aarti.title.toLowerCase().includes(searchValue) ||
      aarti.deity.toLowerCase().includes(searchValue) ||
      aarti.occasionLabel.toLowerCase().includes(searchValue);

    const matchesCategory =
      categoryValue === "all" || aarti.category === categoryValue;

    return matchesSearch && matchesCategory;
  });

  renderAartiCards(filteredAartis);

  if (filteredAartis.length > 0) {
    loadFeaturedAarti(filteredAartis[0], true);
  }
}

// VERSE NAVIGATION
prevParagraphBtn.addEventListener("click", () => {
  if (!currentAarti) return;
  currentVerseIndex =
    (currentVerseIndex - 1 + currentAarti.verses.length) % currentAarti.verses.length;
  updateVerse();
});

nextParagraphBtn.addEventListener("click", () => {
  if (!currentAarti) return;
  currentVerseIndex =
    (currentVerseIndex + 1) % currentAarti.verses.length;
  updateVerse();
});

// AUDIO EVENTS
playPauseBtn.addEventListener("click", () => {
  if (!featuredAudio.src) return;

  if (featuredAudio.paused) {
    featuredAudio.play();
    playPauseBtn.textContent = "Pause";
  } else {
    featuredAudio.pause();
    playPauseBtn.textContent = "Play";
  }
});

backwardBtn.addEventListener("click", () => {
  featuredAudio.currentTime = Math.max(0, featuredAudio.currentTime - 10);
});

forwardBtn.addEventListener("click", () => {
  featuredAudio.currentTime = Math.min(featuredAudio.duration || 0, featuredAudio.currentTime + 10);
});

featuredAudio.addEventListener("loadedmetadata", () => {
  audioSeek.max = Math.floor(featuredAudio.duration || 0);
  durationEl.textContent = formatTime(featuredAudio.duration);
});

featuredAudio.addEventListener("timeupdate", () => {
  audioSeek.value = Math.floor(featuredAudio.currentTime || 0);
  currentTimeEl.textContent = formatTime(featuredAudio.currentTime);
});

audioSeek.addEventListener("input", () => {
  featuredAudio.currentTime = audioSeek.value;
});

featuredAudio.addEventListener("ended", () => {
  playPauseBtn.textContent = "Play";
});

// SEARCH / FILTER
aartiSearch.addEventListener("input", filterAartis);
aartiCategory.addEventListener("change", filterAartis);

// INITIAL
renderAartiCards(filteredAartis);
loadFeaturedAarti(filteredAartis[0], true);