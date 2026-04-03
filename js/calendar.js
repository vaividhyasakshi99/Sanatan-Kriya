document.addEventListener("DOMContentLoaded", () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const monthKeys = [
    "2026-01", "2026-02", "2026-03", "2026-04",
    "2026-05", "2026-06", "2026-07", "2026-08",
    "2026-09", "2026-10", "2026-11", "2026-12"
  ];

  /*
    ==========================================================
    IMPORTANT
    ==========================================================
    1. Alignment auto-calculates from JS date.
    2. Tumhe firstDayIndex manually nahi dena.
    3. Har month ka festival data already added hai.
    4. Daily cell me agar exact day-wise custom details nahi di gayi,
       to festival list se auto label aa jayega.
    5. Later tum kisi specific day ka extra data add kar sakte ho:
       days: {
         14: {
           tithi: "एकादशी",
           bigLabel: "मकर संक्रांति",
           rashi: "वृश्चिक",
           rashiTime: "17:21",
           nakshatra: "अनुराधा",
           hijri: "मु 25",
           festivals: "मकर संक्रांति, माघ बिहू, पोंगल"
         }
       }
  */

  const CALENDAR_DATA = {
    "2026-01": {
      monthLabel: "2026 JANUARY",
      monthHindi: "जनवरी",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "01", text: "रोहिणी व्रत, नव वर्ष, प्रदोष व्रत" },
        { date: "03", text: "हज़रत अली जन्मदिन, सत्य व्रत, पूर्णिमा, पूर्णिमा व्रत" },
        { date: "06", text: "अंगारकी चतुर्थी, संकटी गणेश चतुर्थी" },
        { date: "10", text: "कालाष्टमी" },
        { date: "14", text: "मकर संक्रांति, माघ बिहू, पोंगल" },
        { date: "16", text: "मास शिवरात्रि, प्रदोष व्रत" },
        { date: "18", text: "अमावस्या" },
        { date: "19", text: "सोमवार व्रत" },
        { date: "20", text: "चंद्र दर्शन" },
        { date: "22", text: "वरद चतुर्थी" },
        { date: "23", text: "वसंत पंचमी" },
        { date: "24", text: "षष्ठी" },
        { date: "26", text: "झूलंटी व्रत, गणतंत्र दिवस" },
        { date: "29", text: "रोहिणी व्रत" },
        { date: "30", text: "प्रदोष व्रत" }
      ]
    },

    "2026-02": {
      monthLabel: "2026 FEBRUARY",
      monthHindi: "फ़रवरी",
      daysInMonth: 28,
      days: {},
      festivals: [
        { date: "01", text: "पूर्णिमा, गुरु रविदास जयंती, पूर्णिमा व्रत, सत्य व्रत" },
        { date: "05", text: "संकष्टी गणेश चतुर्थी" },
        { date: "09", text: "कालाष्टमी" },
        { date: "12", text: "स्वामी दयानंद सरस्वती जयंती" },
        { date: "14", text: "प्रदोष व्रत" },
        { date: "15", text: "मास शिवरात्रि, महाशिवरात्रि" },
        { date: "17", text: "भौमवती अमावस्या, अमावस्या" },
        { date: "18", text: "चंद्र दर्शन" },
        { date: "19", text: "शिवाजी जयंती" },
        { date: "21", text: "वरद चतुर्थी" },
        { date: "22", text: "षष्ठी" },
        { date: "23", text: "सोमवार व्रत" },
        { date: "24", text: "झूलंटी व्रत" },
        { date: "25", text: "रोहिणी व्रत" },
        { date: "28", text: "गोविंद द्वादशी, राष्ट्रीय विज्ञान दिवस" }
      ]
    },

    "2026-03": {
      monthLabel: "2026 MARCH",
      monthHindi: "मार्च",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "01", text: "प्रदोष व्रत" },
        { date: "03", text: "पूर्णिमा व्रत, पूर्णिमा, सत्य व्रत, डोलयात्रा, होलिका दहन" },
        { date: "04", text: "होली" },
        { date: "06", text: "संकष्टी गणेश चतुर्थी" },
        { date: "11", text: "कालाष्टमी, झूलंटी व्रत" },
        { date: "16", text: "सोम प्रदोष व्रत, प्रदोष व्रत" },
        { date: "17", text: "मास शिवरात्रि" },
        { date: "19", text: "अमावस्या, चेटीचंड, उगादी, गुड़ी पड़वा, चैत्र शुक्लादि" },
        { date: "20", text: "जुमात-उल-विदा, चंद्र दर्शन" },
        { date: "21", text: "रमजान" },
        { date: "22", text: "वरद चतुर्थी" },
        { date: "23", text: "सोमवार व्रत" },
        { date: "24", text: "रोहिणी व्रत, षष्ठी" },
        { date: "25", text: "झूलंटी व्रत" },
        { date: "26", text: "झूलंटी व्रत, राम नवमी" },
        { date: "30", text: "सोम प्रदोष व्रत, प्रदोष व्रत" },
        { date: "31", text: "महावीर जयंती" }
      ]
    },

    "2026-04": {
      monthLabel: "2026 APRIL",
      monthHindi: "अप्रैल",
      daysInMonth: 30,
      days: {},
      festivals: [
        { date: "01", text: "सत्य व्रत, पूर्णिमा व्रत" },
        { date: "02", text: "पूर्णिमा" },
        { date: "03", text: "गुड फ्राइडे" },
        { date: "05", text: "संकष्टी गणेश चतुर्थी, ईस्टर" },
        { date: "10", text: "कालाष्टमी" },
        { date: "14", text: "बैसाखी, विषु, पुथांडु, मसादी" },
        { date: "15", text: "बैसाखी (बंगाल), बहग बिहू (असम), प्रदोष व्रत, मास शिवरात्रि" },
        { date: "17", text: "अमावस्या" },
        { date: "18", text: "चंद्र दर्शन" },
        { date: "20", text: "रोहिणी व्रत, सोमवार व्रत, वरद चतुर्थी" },
        { date: "22", text: "षष्ठी" },
        { date: "24", text: "झूलंटी व्रत" },
        { date: "28", text: "भौम प्रदोष व्रत" },
        { date: "29", text: "प्रदोष व्रत" }
      ]
    },

    "2026-05": {
      monthLabel: "2026 MAY",
      monthHindi: "मई",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "01", text: "सत्य व्रत, बुद्ध पूर्णिमा, पूर्णिमा, पूर्णिमा व्रत" },
        { date: "05", text: "अंगारकी चतुर्थी, संकष्टी गणेश चतुर्थी" },
        { date: "09", text: "कालाष्टमी, रवीन्द्रनाथ टैगोर जयंती" },
        { date: "14", text: "प्रदोष व्रत" },
        { date: "15", text: "मास शिवरात्रि" },
        { date: "16", text: "अमावस्या" },
        { date: "17", text: "चंद्र दर्शन" },
        { date: "18", text: "सोमवार व्रत, रोहिणी व्रत" },
        { date: "20", text: "वरद चतुर्थी" },
        { date: "21", text: "षष्ठी" },
        { date: "23", text: "झूलंटी व्रत" },
        { date: "27", text: "बकरीद (ईद-उल-अज़हा)" },
        { date: "28", text: "प्रदोष व्रत" },
        { date: "30", text: "पूर्णिमा व्रत" },
        { date: "31", text: "सत्य व्रत, पूर्णिमा" }
      ]
    },

    "2026-06": {
      monthLabel: "2026 JUNE",
      monthHindi: "जून",
      daysInMonth: 30,
      days: {},
      festivals: [
        { date: "04", text: "संकष्टी गणेश चतुर्थी" },
        { date: "08", text: "कालाष्टमी" },
        { date: "12", text: "प्रदोष व्रत" },
        { date: "13", text: "मास शिवरात्रि" },
        { date: "14", text: "रोहिणी व्रत" },
        { date: "15", text: "अमावस्या, सोमवार व्रत" },
        { date: "16", text: "चंद्र दर्शन" },
        { date: "18", text: "वरद चतुर्थी" },
        { date: "20", text: "षष्ठी" },
        { date: "22", text: "झूलंटी व्रत" },
        { date: "26", text: "मुहर्रम" },
        { date: "27", text: "प्रदोष व्रत" },
        { date: "29", text: "पूर्णिमा व्रत, पूर्णिमा, सत्य व्रत" }
      ]
    },

    "2026-07": {
      monthLabel: "2026 JULY",
      monthHindi: "जुलाई",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "03", text: "संकष्टी गणेश चतुर्थी" },
        { date: "07", text: "कालाष्टमी" },
        { date: "12", text: "रोहिणी व्रत, मास शिवरात्रि, प्रदोष व्रत" },
        { date: "14", text: "अमावस्या, सोमवार व्रत, भौमवती अमावस्या" },
        { date: "15", text: "चंद्र दर्शन" },
        { date: "16", text: "रथ यात्रा" },
        { date: "17", text: "वरद चतुर्थी" },
        { date: "19", text: "षष्ठी" },
        { date: "20", text: "सोमवार व्रत" },
        { date: "21", text: "झूलंटी व्रत" },
        { date: "26", text: "प्रदोष व्रत" },
        { date: "29", text: "पूर्णिमा, सत्य व्रत, पूर्णिमा व्रत" }
      ]
    },

    "2026-08": {
      monthLabel: "2026 AUGUST",
      monthHindi: "अगस्त",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "02", text: "संकष्टी गणेश चतुर्थी" },
        { date: "05", text: "कालाष्टमी, झूलंटी व्रत" },
        { date: "08", text: "रोहिणी व्रत" },
        { date: "10", text: "प्रदोष व्रत, सोम प्रदोष व्रत" },
        { date: "11", text: "मास शिवरात्रि" },
        { date: "12", text: "अमावस्या" },
        { date: "13", text: "चंद्र दर्शन" },
        { date: "15", text: "पारसी नव वर्ष दिवस, नवरोज़, स्वतंत्रता दिवस" },
        { date: "16", text: "वरद चतुर्थी" },
        { date: "17", text: "सोमवार व्रत" },
        { date: "18", text: "षष्ठी" },
        { date: "20", text: "झूलंटी व्रत" },
        { date: "25", text: "प्रदोष व्रत, भौम प्रदोष व्रत" },
        { date: "26", text: "मिलाद-उन-नबी, ओणम" },
        { date: "27", text: "पूर्णिमा व्रत, सत्य व्रत" },
        { date: "28", text: "पूर्णिमा, रक्षा बंधन" },
        { date: "31", text: "संकटी गणेश चतुर्थी" }
      ]
    },

    "2026-09": {
      monthLabel: "2026 SEPTEMBER",
      monthHindi: "सितम्बर",
      daysInMonth: 30,
      days: {},
      festivals: [
        { date: "04", text: "रोहिणी व्रत, कालाष्टमी, श्रीकृष्ण जन्माष्टमी" },
        { date: "08", text: "भौम प्रदोष व्रत, प्रदोष व्रत" },
        { date: "09", text: "मास शिवरात्रि" },
        { date: "11", text: "अमावस्या" },
        { date: "12", text: "चंद्र दर्शन" },
        { date: "14", text: "गणेशोत्सव, वरद चतुर्थी, सोमवार व्रत" },
        { date: "17", text: "षष्ठी" },
        { date: "19", text: "झूलंटी व्रत" },
        { date: "24", text: "प्रदोष व्रत" },
        { date: "26", text: "सत्य व्रत, पूर्णिमा व्रत, पूर्णिमा" },
        { date: "29", text: "संकटी गणेश चतुर्थी, अंगारकी चतुर्थी" }
      ]
    },

    "2026-10": {
      monthLabel: "2026 OCTOBER",
      monthHindi: "अक्टूबर",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "01", text: "रोहिणी व्रत" },
        { date: "02", text: "गांधी जयंती" },
        { date: "03", text: "कालाष्टमी" },
        { date: "08", text: "मास शिवरात्रि, प्रदोष व्रत" },
        { date: "10", text: "अमावस्या" },
        { date: "11", text: "चंद्र दर्शन" },
        { date: "12", text: "सोमवार व्रत" },
        { date: "14", text: "वरद चतुर्थी" },
        { date: "16", text: "षष्ठी" },
        { date: "18", text: "सप्तमी" },
        { date: "19", text: "झूलंटी व्रत, महाअष्टमी" },
        { date: "20", text: "विजय दशमी, नवमी" },
        { date: "23", text: "प्रदोष व्रत" },
        { date: "25", text: "सत्य व्रत, पूर्णिमा व्रत" },
        { date: "26", text: "पूर्णिमा, वाल्मीकि जयंती" },
        { date: "29", text: "संकटी गणेश चतुर्थी, रोहिणी व्रत, करवा चौथ" }
      ]
    },

    "2026-11": {
      monthLabel: "2026 NOVEMBER",
      monthHindi: "नवम्बर",
      daysInMonth: 30,
      days: {},
      festivals: [
        { date: "01", text: "कालाष्टमी" },
        { date: "06", text: "प्रदोष व्रत" },
        { date: "07", text: "मास शिवरात्रि" },
        { date: "08", text: "दिवाली" },
        { date: "09", text: "अमावस्या, सोमवार व्रत, गोवर्धन पूजा" },
        { date: "10", text: "चंद्र दर्शन" },
        { date: "11", text: "भाई दूज" },
        { date: "13", text: "वरद चतुर्थी" },
        { date: "15", text: "षष्ठी, छठ पूजा" },
        { date: "17", text: "झूलंटी व्रत" },
        { date: "22", text: "प्रदोष व्रत" },
        { date: "24", text: "गुरु नानक जयंती, पूर्णिमा, सत्य व्रत, पूर्णिमा व्रत" },
        { date: "25", text: "रोहिणी व्रत" },
        { date: "27", text: "संकटी गणेश चतुर्थी" }
      ]
    },

    "2026-12": {
      monthLabel: "2026 DECEMBER",
      monthHindi: "दिसम्बर",
      daysInMonth: 31,
      days: {},
      festivals: [
        { date: "01", text: "कालाष्टमी" },
        { date: "06", text: "प्रदोष व्रत" },
        { date: "07", text: "मास शिवरात्रि" },
        { date: "08", text: "भौमवती अमावस्या, अमावस्या" },
        { date: "10", text: "चंद्र दर्शन" },
        { date: "13", text: "वरद चतुर्थी" },
        { date: "14", text: "सोमवार व्रत" },
        { date: "15", text: "षष्ठी" },
        { date: "17", text: "झूलंटी व्रत" },
        { date: "21", text: "प्रदोष व्रत, सोम प्रदोष व्रत" },
        { date: "23", text: "सत्य व्रत, पूर्णिमा व्रत, पूर्णिमा, हज़रत अली जन्मदिन" },
        { date: "25", text: "क्रिसमस" },
        { date: "26", text: "संकटी गणेश चतुर्थी" },
        { date: "30", text: "कालाष्टमी, झूलंटी व्रत" }
      ]
    }
  };

  const monthLabel = document.getElementById("monthLabel");
  const monthSelect = document.getElementById("monthSelect");
  const calendarGrid = document.getElementById("calendarGrid");
  const festivalList = document.getElementById("festivalList");

  const prevMonthBtn = document.getElementById("prevMonthBtn");
  const nextMonthBtn = document.getElementById("nextMonthBtn");

  const selectedDateTitle = document.getElementById("selectedDateTitle");
  const selectedDayBadge = document.getElementById("selectedDayBadge");
  const festivalName = document.getElementById("festivalName");
  const tithiValue = document.getElementById("tithiValue");
  const rashiValue = document.getElementById("rashiValue");
  const nakshatraValue = document.getElementById("nakshatraValue");
  const hijriValue = document.getElementById("hijriValue");

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mainMandala = document.getElementById("mainMandala");

  let currentMonthKey = monthKeys[0];
  let selectedDay = 1;

  function getFirstDayIndex(monthKey) {
    const [year, month] = monthKey.split("-").map(Number);
    return new Date(year, month - 1, 1).getDay();
  }

  function initMonthSelect() {
    monthSelect.innerHTML = monthKeys
      .map((key) => {
        const [year, month] = key.split("-");
        const monthIndex = Number(month) - 1;
        return `<option value="${key}">${monthNames[monthIndex]} ${year}</option>`;
      })
      .join("");

    monthSelect.value = currentMonthKey;
  }

  function createEmptyCell() {
    const div = document.createElement("div");
    div.className = "calendar-day-card";
    return div;
  }

  function findFestivalForDay(monthData, day) {
    if (!monthData.festivals || !monthData.festivals.length) return null;
    return monthData.festivals.find((item) => Number(item.date) === day) || null;
  }

  function buildAutoTithiFromFestival(festivalText) {
    if (!festivalText || festivalText === "—") return "—";

    const rules = [
      ["पूर्णिमा", "पूर्णिमा"],
      ["अमावस्या", "अमावस्या"],
      ["एकादशी", "एकादशी"],
      ["द्वादशी", "द्वादशी"],
      ["त्रयोदशी", "त्रयोदशी"],
      ["चतुर्दशी", "चतुर्दशी"],
      ["चतुर्थी", "चतुर्थी"],
      ["षष्ठी", "षष्ठी"],
      ["सप्तमी", "सप्तमी"],
      ["अष्टमी", "अष्टमी"],
      ["नवमी", "नवमी"],
      ["दशमी", "दशमी"],
      ["प्रदोष", "त्रयोदशी"],
      ["शिवरात्रि", "चतुर्दशी"]
    ];

    for (const [needle, tithi] of rules) {
      if (festivalText.includes(needle)) return tithi;
    }

    return "—";
  }

  function buildAutoBigLabel(festivalText) {
    if (!festivalText || festivalText === "—") return "";
    return festivalText.split(",")[0].trim();
  }

  function getDayRecord(day) {
    const monthData = CALENDAR_DATA[currentMonthKey];
    const festivalItem = findFestivalForDay(monthData, day);
    const customDay = monthData.days?.[day] || {};
    const festivalText = customDay.festivals || festivalItem?.text || "—";

    return {
      tithi: customDay.tithi || buildAutoTithiFromFestival(festivalText),
      bigLabel: customDay.bigLabel || buildAutoBigLabel(festivalText),
      rashi: customDay.rashi || "—",
      rashiTime: customDay.rashiTime || "",
      nakshatra: customDay.nakshatra || "—",
      hijri: customDay.hijri || "—",
      festivals: festivalText
    };
  }

  function renderSelectedDate() {
    const [year, month] = currentMonthKey.split("-");
    const monthIndex = Number(month) - 1;
    const selectedDate = new Date(Number(year), monthIndex, selectedDay);
    const record = getDayRecord(selectedDay);

    selectedDateTitle.textContent = `${selectedDay} ${monthNames[monthIndex]} ${year}`;
    selectedDayBadge.textContent = dayNames[selectedDate.getDay()];
    festivalName.textContent = record.festivals || "—";
    tithiValue.textContent = record.tithi || "—";

    if (record.rashi !== "—" && record.rashiTime) {
      rashiValue.textContent = `${record.rashi} ${record.rashiTime}`;
    } else {
      rashiValue.textContent = record.rashi || "—";
    }

    nakshatraValue.textContent = record.nakshatra || "—";
    hijriValue.textContent = record.hijri || "—";
  }

  function createDayCell(day) {
    const record = getDayRecord(day);
    const isSelected = day === selectedDay;
    const hasFestival = record.festivals && record.festivals !== "—";
    const specialDate = hasFestival || !!record.bigLabel;

    const button = document.createElement("button");
    button.type = "button";

    const selectedClasses = isSelected
      ? "bg-orange-500 text-white border-orange-500 shadow-spiritual"
      : "bg-white text-darkBrown border-orange-200 hover:border-orange-400";

    const dateColorClass = specialDate
      ? (isSelected ? "text-white" : "text-rose-600")
      : (isSelected ? "text-white" : "text-black");

    const rashiLine =
      record.rashi !== "—"
        ? (record.rashiTime ? `${record.rashi} ${record.rashiTime}` : record.rashi)
        : "—";

    const displayLabel = record.bigLabel || "";

    button.className = `calendar-day-card w-full rounded-2xl border p-2 md:p-3 text-left overflow-hidden ${selectedClasses}`;

    button.innerHTML = `
      <div class="flex items-start justify-between gap-2">
        <p class="text-[10px] md:text-xs font-semibold leading-tight ${isSelected ? "text-orange-50" : "text-darkBrown"}">
          ${record.tithi || "—"}
        </p>
        <span class="text-[10px] md:text-xs font-bold ${isSelected ? "text-orange-100" : "text-red-500"}">
          ${record.hijri !== "—" ? record.hijri.replace("मु ", "") : ""}
        </span>
      </div>

      <div class="mt-1 text-center">
        ${
          displayLabel
            ? `<p class="text-[11px] md:text-xs font-semibold leading-tight mb-1 ${isSelected ? "text-white" : "text-darkBrown"}">${displayLabel}</p>`
            : `<div class="h-4"></div>`
        }
        <div class="text-4xl md:text-6xl font-bold leading-none ${dateColorClass}">
          ${day}
        </div>
      </div>

      <div class="mt-2 text-[10px] md:text-xs leading-4 md:leading-5 ${isSelected ? "text-orange-50" : "text-darkBrown"}">
        <div>○ ${rashiLine}</div>
        <div>☆ ${record.nakshatra || "—"}</div>
        <div class="${isSelected ? "text-orange-100" : "text-green-600"} font-semibold">
          ${record.hijri !== "—" ? record.hijri : ""}
        </div>
      </div>
    `;

    button.addEventListener("click", () => {
      selectedDay = day;
      renderCalendar();
      renderSelectedDate();
    });

    return button;
  }

  function renderCalendar() {
    const monthData = CALENDAR_DATA[currentMonthKey];
    const firstDayIndex = getFirstDayIndex(currentMonthKey);

    calendarGrid.innerHTML = "";
    monthLabel.textContent = `${monthData.monthLabel} • ${monthData.monthHindi}`;
    monthSelect.value = currentMonthKey;

    for (let i = 0; i < firstDayIndex; i++) {
      calendarGrid.appendChild(createEmptyCell());
    }

    for (let day = 1; day <= monthData.daysInMonth; day++) {
      calendarGrid.appendChild(createDayCell(day));
    }
  }

  function renderFestivalList() {
    const monthData = CALENDAR_DATA[currentMonthKey];
    festivalList.innerHTML = "";

    if (!monthData.festivals || !monthData.festivals.length) {
      festivalList.innerHTML = `
        <div class="rounded-2xl border border-orange-100 bg-white p-4 text-darkBrown/70">
          No festival data available for this month.
        </div>
      `;
      return;
    }

    monthData.festivals.forEach((item) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "rounded-2xl border border-orange-100 bg-white p-4 text-left hover:-translate-y-0.5 transition";

      card.innerHTML = `
        <div class="flex items-start gap-4">
          <div class="min-w-[56px] h-14 rounded-2xl bg-orange-100 text-deepBhagwa font-bold flex items-center justify-center text-lg">
            ${item.date}
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-bhagwa font-semibold">Observance</p>
            <p class="mt-2 text-darkBrown/90 leading-7">${item.text}</p>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        selectedDay = Number(item.date);
        renderCalendar();
        renderSelectedDate();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      festivalList.appendChild(card);
    });
  }

  function goToMonthByIndex(index) {
    currentMonthKey = monthKeys[index];
    selectedDay = 1;
    renderCalendar();
    renderSelectedDate();
    renderFestivalList();
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (mainMandala) {
      mainMandala.style.transform =
        `translate(-50%, -50%) rotate(${y * 0.08}deg) scale(${1 + (y * 0.00008)})`;
    }
  });

  prevMonthBtn.addEventListener("click", () => {
    let currentIndex = monthKeys.indexOf(currentMonthKey);
    currentIndex = (currentIndex - 1 + monthKeys.length) % monthKeys.length;
    goToMonthByIndex(currentIndex);
  });

  nextMonthBtn.addEventListener("click", () => {
    let currentIndex = monthKeys.indexOf(currentMonthKey);
    currentIndex = (currentIndex + 1) % monthKeys.length;
    goToMonthByIndex(currentIndex);
  });

  monthSelect.addEventListener("change", (e) => {
    currentMonthKey = e.target.value;
    selectedDay = 1;
    renderCalendar();
    renderSelectedDate();
    renderFestivalList();
  });

  initMonthSelect();
  renderCalendar();
  renderSelectedDate();
  renderFestivalList();
});