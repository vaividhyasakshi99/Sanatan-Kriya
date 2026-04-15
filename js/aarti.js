// ==============================
// 🔱 MOBILE MENU (MATCHES HEADER)
// ==============================
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    menuToggle.classList.toggle("active");

    const line1 = menuToggle.querySelector(".line1");
    const line2 = menuToggle.querySelector(".line2");
    const line3 = menuToggle.querySelector(".line3");

    if (line1 && line2 && line3) {
      if (menuToggle.classList.contains("active")) {
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


// ==============================
// ✨ REVEAL ANIMATION
// ==============================
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
  { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));


// ==============================
// 🌸 MANDALA EFFECT
// ==============================
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


// ==============================
// 🔱 AARTI DATA
// FULL TEXT = ONE STRING
// PASTE FULL LYRICS INSIDE `lyrics`
// ==============================
const aartiData = [
  {
    id: 1,
    title: "जय गणेश देवा",
    deity: "गणपति जी",
    category: "ganesh",
    occasionLabel: "Ganesh Chaturthi",
    image: "assets/images/ganpati arti.jpg",
    audio: "assets/audios/ganesh.mp3",
    lyrics: `।। श्री गणेश जी की आरती ।। 

जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥
(जय गणेश, जय गणेश...) 

एक दंत दयावंत, चार भुजा धारी।
मस्तक सिंदूर सोहे, मूसे की सवारी॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥ 

पान चढ़े, फूल चढ़े, और चढ़े मेवा।
लड्डुअन का भोग लगे, संत करें सेवा॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥ 

अंधन को आंख देत, कोढ़िन को काया।
बांझन को पुत्र देत, निर्धन को माया॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥ 

‘सूर’ श्याम शरण आए, सफल कीजे सेवा।
माता जाकी पार्वती, पिता महादेवा॥
जय गणेश, जय गणेश, जय गणेश देवा।
माता जाकी पार्वती, पिता महादेवा॥ `
  },

  {
    id: 2,
    title: "ॐ जय जगदीश हरे",
    deity: "विष्णु जी",
    category: "daily",
    occasionLabel: "Daily",
    image: "assets/images/jagdish arti.jpg",
    audio: "assets/audios/om jagdish.mp3",
    lyrics: `ॐ जय जगदीश हरे,
स्वामी जय जगदीश हरे ।
भक्त जनों के संकट,
दास जनों के संकट,
क्षण में दूर करे ॥
॥ ॐ जय जगदीश हरे..॥

जो ध्यावे फल पावे,
दुःख बिनसे मन का,
स्वामी दुःख बिनसे मन का ।
सुख सम्पति घर आवे,
सुख सम्पति घर आवे,
कष्ट मिटे तन का ॥
॥ ॐ जय जगदीश हरे..॥

मात पिता तुम मेरे,
शरण गहूं किसकी,
स्वामी शरण गहूं मैं किसकी ।
तुम बिन और न दूजा,
तुम बिन और न दूजा,
आस करूं मैं जिसकी ॥
॥ ॐ जय जगदीश हरे..॥

तुम पूरण परमात्मा,
तुम अन्तर्यामी,
स्वामी तुम अन्तर्यामी ।
पारब्रह्म परमेश्वर,
पारब्रह्म परमेश्वर,
तुम सब के स्वामी ॥
॥ ॐ जय जगदीश हरे..॥

तुम करुणा के सागर,
तुम पालनकर्ता,
स्वामी तुम पालनकर्ता ।
मैं मूरख फलकामी,
मैं सेवक तुम स्वामी,
कृपा करो भर्ता॥
॥ ॐ जय जगदीश हरे..॥

तुम हो एक अगोचर,
सबके प्राणपति,
स्वामी सबके प्राणपति ।
किस विधि मिलूं दयामय,
किस विधि मिलूं दयामय,
तुमको मैं कुमति ॥
॥ ॐ जय जगदीश हरे..॥

दीन-बन्धु दुःख-हर्ता,
ठाकुर तुम मेरे,
स्वामी रक्षक तुम मेरे ।
अपने हाथ उठाओ,
अपने शरण लगाओ,
द्वार पड़ा तेरे ॥
॥ ॐ जय जगदीश हरे..॥

विषय-विकार मिटाओ,
पाप हरो देवा,
स्वमी पाप(कष्ट) हरो देवा ।
श्रद्धा भक्ति बढ़ाओ,
श्रद्धा भक्ति बढ़ाओ,
सन्तन की सेवा ॥

ॐ जय जगदीश हरे,
स्वामी जय जगदीश हरे ।
भक्त जनों के संकट,
दास जनों के संकट,
क्षण में दूर करे ॥
`
  },

  {
    id: 3,
    title: "जय अम्बे गौरी",
    deity: "दुर्गा जी",
    category: "navratri",
    occasionLabel: "Navratri",
    image: "assets/images/gauri arti.jpg",
    audio: "assets/audios/gauri.mp3",
    lyrics: `जय अम्बे गौरी,
मैया जय श्यामा गौरी ।
तुमको निशदिन ध्यावत,
हरि ब्रह्मा शिवरी ॥
ॐ जय अम्बे गौरी..॥

मांग सिंदूर विराजत,
टीको मृगमद को ।
उज्ज्वल से दोउ नैना,
चंद्रवदन नीको ॥
ॐ जय अम्बे गौरी..॥

कनक समान कलेवर,
रक्ताम्बर राजै ।
रक्तपुष्प गल माला,
कंठन पर साजै ॥
ॐ जय अम्बे गौरी..॥

केहरि वाहन राजत,
खड्ग खप्पर धारी ।
सुर-नर-मुनिजन सेवत,
तिनके दुखहारी ॥
ॐ जय अम्बे गौरी..॥

कानन कुण्डल शोभित,
नासाग्रे मोती ।
कोटिक चंद्र दिवाकर,
सम राजत ज्योती ॥
ॐ जय अम्बे गौरी..॥

शुंभ-निशुंभ बिदारे,
महिषासुर घाती ।
धूम्र विलोचन नैना,
निशदिन मदमाती ॥
ॐ जय अम्बे गौरी..॥

चण्ड-मुण्ड संहारे,
शोणित बीज हरे ।
मधु-कैटभ दोउ मारे,
सुर भयहीन करे ॥
ॐ जय अम्बे गौरी..॥

ब्रह्माणी, रूद्राणी,
तुम कमला रानी ।
आगम निगम बखानी,
तुम शिव पटरानी ॥
ॐ जय अम्बे गौरी..॥

चौंसठ योगिनी मंगल गावत,
नृत्य करत भैरों ।
बाजत ताल मृदंगा,
अरू बाजत डमरू ॥
ॐ जय अम्बे गौरी..॥

तुम ही जग की माता,
तुम ही हो भरता,
भक्तन की दुख हरता ।
सुख संपति करता ॥
ॐ जय अम्बे गौरी..॥

भुजा चार अति शोभित,
वर मुद्रा धारी । [खड्ग खप्पर धारी]
मनवांछित फल पावत,
सेवत नर नारी ॥
ॐ जय अम्बे गौरी..॥

कंचन थाल विराजत,
अगर कपूर बाती ।
श्रीमालकेतु में राजत,
कोटि रतन ज्योती ॥
ॐ जय अम्बे गौरी..॥

श्री अंबेजी की आरति,
जो कोइ नर गावे ।
कहत शिवानंद स्वामी,
सुख-संपति पावे ॥
ॐ जय अम्बे गौरी..॥

जय अम्बे गौरी,
मैया जय श्यामा गौरी ।`
  },

  {
    id: 4,
    title: "आरती कुंज बिहारी की",
    deity: "श्री कृष्ण",
    category: "krishnajanmashtami",
    occasionLabel: "Janmashtami",
    image: "assets/images/kunj bihari arti.jpg",
    audio: "assets/audios/Kunj Bihari.mp3",
    lyrics: `आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
गले में बैजंती माला,
बजावै मुरली मधुर बाला ।
श्रवण में कुण्डल झलकाला,
नंद के आनंद नंदलाला ।
गगन सम अंग कांति काली,
राधिका चमक रही आली ।
लतन में ठाढ़े बनमाली
भ्रमर सी अलक,
कस्तूरी तिलक,
चंद्र सी झलक,
ललित छवि श्यामा प्यारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

कनकमय मोर मुकुट बिलसै,
देवता दरसन को तरसैं ।
गगन सों सुमन रासि बरसै ।
बजे मुरचंग,
मधुर मिरदंग,
ग्वालिन संग,
अतुल रति गोप कुमारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

जहां ते प्रकट भई गंगा,
सकल मन हारिणि श्री गंगा ।
स्मरन ते होत मोह भंगा
बसी शिव सीस,
जटा के बीच,
हरै अघ कीच,
चरन छवि श्रीबनवारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

चमकती उज्ज्वल तट रेनू,
बज रही वृंदावन बेनू ।
चहुं दिसि गोपि ग्वाल धेनू
हंसत मृदु मंद,
चांदनी चंद,
कटत भव फंद,
टेर सुन दीन दुखारी की,
श्री गिरिधर कृष्णमुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥

आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥
आरती कुंजबिहारी की,
श्री गिरिधर कृष्ण मुरारी की ॥`
  },

  {
    id: 5,
    title: "श्री रामचंद्र कृपालु",
    deity: "श्री राम",
    category: "ramnavami",
    occasionLabel: "Ram Navami",
    image: "assets/images/ram.jpg",
    audio: "assets/audios/Shri Ramchandra.mp3",
    lyrics: `॥दोहा॥
श्री रामचन्द्र कृपालु भजुमन
हरण भवभय दारुणं ।
नव कंज लोचन कंज मुख
कर कंज पद कंजारुणं ॥१॥

कन्दर्प अगणित अमित छवि
नव नील नीरद सुन्दरं ।
पटपीत मानहुँ तडित रुचि शुचि
नोमि जनक सुतावरं ॥२॥

भजु दीनबन्धु दिनेश दानव
दैत्य वंश निकन्दनं ।
रघुनन्द आनन्द कन्द कोशल
चन्द दशरथ नन्दनं ॥३॥

शिर मुकुट कुंडल तिलक
चारु उदारु अङ्ग विभूषणं ।
आजानु भुज शर चाप धर
संग्राम जित खरदूषणं ॥४॥

इति वदति तुलसीदास शंकर
शेष मुनि मन रंजनं ।
मम् हृदय कंज निवास कुरु
कामादि खलदल गंजनं ॥५॥

मन जाहि राच्यो मिलहि सो
वर सहज सुन्दर सांवरो ।
करुणा निधान सुजान शील
स्नेह जानत रावरो ॥६॥

एहि भांति गौरी असीस सुन सिय
सहित हिय हरषित अली।
तुलसी भवानिहि पूजी पुनि-पुनि
मुदित मन मन्दिर चली ॥७॥

॥सोरठा॥
जानी गौरी अनुकूल सिय
हिय हरषु न जाइ कहि ।
मंजुल मंगल मूल वाम
अङ्ग फरकन लगे।
रचयिता: गोस्वामी तुलसीदास`
  },

  {
    id: 6,
    title: "आरती कीजै हनुमान लला की",
    deity: "हनुमान जी",
    category: "hanumanjayanti",
    occasionLabel: "Hanuman Jayanti",
    image: "assets/images/hanuman arti.jpg",
    audio: "assets/audios/jai hanuman.mp3",
    lyrics: `॥ श्री हनुमंत स्तुति ॥
मनोजवं मारुत तुल्यवेगं,
जितेन्द्रियं, बुद्धिमतां वरिष्ठम् ॥
वातात्मजं वानरयुथ मुख्यं,
श्रीरामदुतं शरणम प्रपद्धे ॥

॥ आरती ॥
आरती कीजै हनुमान लला की ।
दुष्ट दलन रघुनाथ कला की ॥

जाके बल से गिरवर काँपे ।
रोग-दोष जाके निकट न झाँके ॥
अंजनि पुत्र महा बलदाई ।
संतन के प्रभु सदा सहाई ॥
आरती कीजै हनुमान लला की ॥

दे वीरा रघुनाथ पठाए ।
लंका जारि सिया सुधि लाये ॥
लंका सो कोट समुद्र सी खाई ।
जात पवनसुत बार न लाई ॥
आरती कीजै हनुमान लला की ॥

लंका जारि असुर संहारे ।
सियाराम जी के काज सँवारे ॥
लक्ष्मण मुर्छित पड़े सकारे ।
लाये संजिवन प्राण उबारे ॥
आरती कीजै हनुमान लला की ॥

पैठि पताल तोरि जमकारे ।
अहिरावण की भुजा उखारे ॥
बाईं भुजा असुर दल मारे ।
दाहिने भुजा संतजन तारे ॥
आरती कीजै हनुमान लला की ॥

सुर-नर-मुनि जन आरती उतरें ।
जय जय जय हनुमान उचारें ॥
कंचन थार कपूर लौ छाई ।
आरती करत अंजना माई ॥
आरती कीजै हनुमान लला की ॥

जो हनुमानजी की आरती गावे ।
बसहिं बैकुंठ परम पद पावे ॥
लंक विध्वंस किये रघुराई ।
तुलसीदास स्वामी कीर्ति गाई ॥

आरती कीजै हनुमान लला की ।
दुष्ट दलन रघुनाथ कला की ॥
॥ इति संपूर्णंम् ॥`
  },

  {
    id: 7,
    title: "जय शिव ओंकारा",
    deity: "शिव जी",
    category: "shivratri",
    occasionLabel: "Mahashivratri",
    image: "assets/images/shiv arti.jpg",
    audio: "assets/audios/Shiv.mp3",
    lyrics: `
ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥

ओम जय शिव ओंकारा॥एकानन चतुरानन पञ्चानन राजे।
हंसासन गरूड़ासन वृषवाहन साजे॥

ओम जय शिव ओंकारा॥

दो भुज चार चतुर्भुज दसभुज अति सोहे।
त्रिगुण रूप निरखत त्रिभुवन जन मोहे॥

ओम जय शिव ओंकारा॥

अक्षमाला वनमाला मुण्डमालाधारी।
त्रिपुरारी कंसारी कर माला धारी॥

ओम जय शिव ओंकारा॥

श्वेताम्बर पीताम्बर बाघंबर अंगे।
सनकादिक गरुड़ादिक भूतादिक संगे॥

ओम जय शिव ओंकारा॥

कर के मध्य कमण्डल चक्र त्रिशूलधारी।
जगकर्ता जगभर्ता जगसंहारकर्ता॥

ओम जय शिव ओंकारा॥

ब्रह्मा विष्णु सदाशिव जानत अविवेका।
प्रणवाक्षर के मध्ये ये तीनों एका॥

ओम जय शिव ओंकारा॥

पर्वत सोहैं पार्वती, शंकर कैलासा।
भांग धतूरे का भोजन, भस्मी में वासा॥

ओम जय शिव ओंकारा॥

जटा में गंग बहत है, गल मुण्डन माला।
शेष नाग लिपटावत, ओढ़त मृगछाला॥

ओम जय शिव ओंकारा॥

काशी में विराजे विश्वनाथ, नन्दी ब्रह्मचारी।
नित उठ दर्शन पावत, महिमा अति भारी॥

ओम जय शिव ओंकारा॥

त्रिगुणस्वामी जी की आरति जो कोइ नर गावे।
कहत शिवानन्द स्वामी, मनवान्छित फल पावे॥

ओम जय शिव ओंकारा॥ स्वामी ओम जय शिव ओंकारा॥E`
  },

  {
    id: 8,
    title: "ॐ जय लक्ष्मी माता",
    deity: "लक्ष्मी माता",
    category: "diwali",
    occasionLabel: "Diwali",
    image: "assets/images/laxmi arti.jpg",
    audio: "assets/audios/laxmi Mata.mp3",
    lyrics: `महालक्ष्मी नमस्तुभ्यं,
नमस्तुभ्यं सुरेश्वरि ।
हरि प्रिये नमस्तुभ्यं,
नमस्तुभ्यं दयानिधे ॥

पद्मालये नमस्तुभ्यं,
नमस्तुभ्यं च सर्वदे ।
सर्वभूत हितार्थाय,
वसु सृष्टिं सदा कुरुं ॥

ॐ जय लक्ष्मी माता,
मैया जय लक्ष्मी माता ।
तुमको निसदिन सेवत,
हर विष्णु विधाता ॥

उमा, रमा, ब्रम्हाणी,
तुम ही जग माता ।
सूर्य चद्रंमा ध्यावत,
नारद ऋषि गाता ॥
॥ॐ जय लक्ष्मी माता...॥

दुर्गा रुप निरंजनि,
सुख-संपत्ति दाता ।
जो कोई तुमको ध्याता,
ऋद्धि-सिद्धि धन पाता ॥
॥ॐ जय लक्ष्मी माता...॥

तुम ही पाताल निवासनी,
तुम ही शुभदाता ।
कर्म-प्रभाव-प्रकाशनी,
भव निधि की त्राता ॥
॥ॐ जय लक्ष्मी माता...॥

जिस घर तुम रहती हो,
ताँहि में हैं सद्‍गुण आता ।
सब सभंव हो जाता,
मन नहीं घबराता ॥
॥ॐ जय लक्ष्मी माता...॥

तुम बिन यज्ञ ना होता,
वस्त्र न कोई पाता ।
खान पान का वैभव,
सब तुमसे आता ॥
॥ॐ जय लक्ष्मी माता...॥

शुभ गुण मंदिर सुंदर,
क्षीरोदधि जाता ।
रत्न चतुर्दश तुम बिन,
कोई नहीं पाता ॥
॥ॐ जय लक्ष्मी माता...॥

महालक्ष्मी जी की आरती,
जो कोई नर गाता ।
उँर आंनद समाता,
पाप उतर जाता ॥
॥ॐ जय लक्ष्मी माता...॥

ॐ जय लक्ष्मी माता,
मैया जय लक्ष्मी माता ।
तुमको निसदिन सेवत,
हर विष्णु विधाता ॥`
  }
];


// ==============================
// 🎯 ELEMENTS
// ==============================
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


// ==============================
// 📊 STATE
// ==============================
let filteredAartis = [...aartiData];
let currentAarti = filteredAartis[0] || null;


// ==============================
// ⏱ FORMAT TIME
// ==============================
function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}


// ==============================
// 📝 PREVIEW TEXT FOR CARDS
// ==============================
function getPreviewText(text, maxLength = 140) {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  return clean.slice(0, maxLength).trim() + "...";
}


// ==============================
// 🔄 LOAD FEATURED AARTI
// ==============================
function loadFeaturedAarti(aarti) {
  if (!aarti) return;

  currentAarti = aarti;

  if (featuredAartiImage) {
    featuredAartiImage.src = aarti.image;
    featuredAartiImage.alt = aarti.title;
  }

  if (featuredAartiCategory) {
    featuredAartiCategory.textContent = aarti.occasionLabel;
  }

  if (featuredAartiTitle) {
    featuredAartiTitle.textContent = aarti.title;
  }

  if (featuredAartiText) {
    featuredAartiText.textContent = aarti.lyrics || "";
    featuredAartiText.scrollTop = 0;
  }

  // Since paragraph switching is removed
  if (paragraphIndexDisplay) paragraphIndexDisplay.textContent = "Full";
  if (paragraphTotalDisplay) paragraphTotalDisplay.textContent = "Lyrics";

  // Hide old navigation buttons if they still exist
  if (prevParagraphBtn) prevParagraphBtn.style.display = "none";
  if (nextParagraphBtn) nextParagraphBtn.style.display = "none";

  loadAudio(aarti.audio);
}


// ==============================
// 🔊 LOAD AUDIO
// ==============================
function loadAudio(audioSrc) {
  if (!featuredAudio) return;

  featuredAudio.src = audioSrc || "";
  featuredAudio.load();

  if (playPauseBtn) playPauseBtn.textContent = "Play";
  if (audioSeek) audioSeek.value = 0;
  if (currentTimeEl) currentTimeEl.textContent = "00:00";
  if (durationEl) durationEl.textContent = "00:00";
}


// ==============================
// 🧱 CREATE CARD
// ==============================
function createAartiCard(aarti) {
  return `
    <button
      type="button"
      class="aarti-list-card text-left rounded-[1.5rem] overflow-hidden bg-white border border-orange-100 shadow-spiritual hover:-translate-y-1 transition-all duration-300"
      data-id="${aarti.id}"
    >
      <div class="grid grid-cols-[110px_1fr] md:grid-cols-[120px_1fr] min-h-[140px]">
        
        <!-- IMAGE -->
        <div class="h-full overflow-hidden bg-orange-50">
          <img
            src="${aarti.image}"
            alt="${aarti.title}"
            class="w-full h-full object-cover object-[center_30%]"
          />
        </div>

        <!-- TEXT -->
        <div class="p-3 md:p-4 flex flex-col justify-center">
          
          <!-- TOP ROW -->
          <div class="flex items-center justify-between gap-2">
            <span class="text-[9px] font-semibold uppercase tracking-[0.18em] text-bhagwa bg-orange-50 px-2 py-1 rounded-full">
              ${aarti.occasionLabel}
            </span>
            <span class="text-[10px] text-darkBrown/60">
              ${aarti.deity}
            </span>
          </div>

          <!-- TITLE -->
          <h4 class="mt-1 text-[1.1rem] md:text-[1.2rem] font-bold text-deepBhagwa leading-tight">
            ${aarti.title}
          </h4>

          <!-- TEXT -->
          <p class="mt-1 text-darkBrown/70 leading-[1.5] text-[12.5px]">
            ${getPreviewText(aarti.lyrics, 75)}
          </p>

        </div>

      </div>
    </button>
  `;
}


// ==============================
// 🎨 RENDER CARDS
// ==============================
function renderAartiCards(data) {
  if (!aartiCardsGrid || !aartiEmptyState) return;

  if (!data.length) {
    aartiCardsGrid.innerHTML = "";
    aartiEmptyState.classList.remove("hidden");
    return;
  }

  aartiEmptyState.classList.add("hidden");
  aartiCardsGrid.innerHTML = data.map(createAartiCard).join("");

  document.querySelectorAll("[data-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const selected = filteredAartis.find((item) => item.id === id);

      if (selected) {
        loadFeaturedAarti(selected);
        const mainSection = document.getElementById("aartiMainSection");
        if (mainSection) {
          mainSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}


// ==============================
// 🔍 FILTER
// ==============================
function filterAartis() {
  const search = (aartiSearch?.value || "").toLowerCase().trim();
  const category = aartiCategory?.value || "all";

  filteredAartis = aartiData.filter((aarti) => {
    const searchableText = [
      aarti.title,
      aarti.deity,
      aarti.occasionLabel,
      aarti.lyrics
    ].join(" ").toLowerCase();

    const matchesSearch = searchableText.includes(search);
    const matchesCategory = category === "all" || aarti.category === category;

    return matchesSearch && matchesCategory;
  });

  renderAartiCards(filteredAartis);

  if (filteredAartis.length > 0) {
    loadFeaturedAarti(filteredAartis[0]);
  }
}


// ==============================
// 🔊 AUDIO EVENTS
// ==============================
if (playPauseBtn && featuredAudio) {
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
}

if (backwardBtn && featuredAudio) {
  backwardBtn.addEventListener("click", () => {
    featuredAudio.currentTime = Math.max(0, featuredAudio.currentTime - 10);
  });
}

if (forwardBtn && featuredAudio) {
  forwardBtn.addEventListener("click", () => {
    featuredAudio.currentTime = Math.min(featuredAudio.duration || 0, featuredAudio.currentTime + 10);
  });
}

if (featuredAudio && audioSeek && durationEl) {
  featuredAudio.addEventListener("loadedmetadata", () => {
    audioSeek.max = Math.floor(featuredAudio.duration || 0);
    durationEl.textContent = formatTime(featuredAudio.duration);
  });
}

if (featuredAudio && audioSeek && currentTimeEl) {
  featuredAudio.addEventListener("timeupdate", () => {
    audioSeek.value = Math.floor(featuredAudio.currentTime || 0);
    currentTimeEl.textContent = formatTime(featuredAudio.currentTime);
  });
}

if (audioSeek && featuredAudio) {
  audioSeek.addEventListener("input", () => {
    featuredAudio.currentTime = Number(audioSeek.value);
  });
}

if (featuredAudio && playPauseBtn) {
  featuredAudio.addEventListener("ended", () => {
    playPauseBtn.textContent = "Play";
  });
}


// ==============================
// 🎬 INIT
// ==============================
renderAartiCards(filteredAartis);

if (filteredAartis.length > 0) {
  loadFeaturedAarti(filteredAartis[0]);
}

if (aartiSearch) {
  aartiSearch.addEventListener("input", filterAartis);
}

if (aartiCategory) {
  aartiCategory.addEventListener("change", filterAartis);
}