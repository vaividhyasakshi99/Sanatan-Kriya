document.addEventListener("DOMContentLoaded", () => {
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

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
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
      });
    });
  }

  // REVEAL ON SCROLL
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // MANDALA ROTATE + ZOOM ON SCROLL
  const mainMandala = document.getElementById("mainMandala");

  if (mainMandala) {
    const updateMandala = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const rotateDeg = scrollY * 0.08;
      const scaleValue = 1.12 + Math.min(scrollY * 0.00015, 0.18);

      mainMandala.style.transform = `translate(-50%, -50%) scale(${scaleValue}) rotate(${rotateDeg}deg)`;
    };

    updateMandala();
    window.addEventListener("scroll", updateMandala, { passive: true });
  }

  // ARTIST MODAL
  const artistModal = document.getElementById("artistModal");
  const artistModalPanel = document.getElementById("artistModalPanel");
  const artistModalImage = document.getElementById("artistModalImage");
  const artistModalName = document.getElementById("artistModalName");
  const artistModalCategory = document.getElementById("artistModalCategory");
  const artistModalDescription = document.getElementById("artistModalDescription");
  const artistModalSuitable = document.getElementById("artistModalSuitable");
  const artistModalBookBtn = document.getElementById("artistModalBookBtn");
  const modalCloseButtons = document.querySelectorAll("[data-close-modal]");
  const artistCards = document.querySelectorAll("[data-artist-card]");
  const contactSection = document.getElementById("contact");
  const serviceField = document.getElementById("service");
  const queryField = document.getElementById("query");

  let selectedArtistName = "";
  let selectedArtistCategory = "";

  const openArtistModal = (artistData) => {
    if (!artistModal) return;

    selectedArtistName = artistData.name || "";
    selectedArtistCategory = artistData.category || "";

    if (artistModalImage) {
      artistModalImage.src = artistData.image || "";
      artistModalImage.alt = artistData.name || "Artist";
    }

    if (artistModalName) {
      artistModalName.textContent = artistData.name || "";
    }

    if (artistModalCategory) {
      artistModalCategory.textContent = artistData.category || "";
    }

    if (artistModalDescription) {
      artistModalDescription.textContent = artistData.description || "";
    }

    if (artistModalSuitable) {
      artistModalSuitable.textContent = artistData.suitable || "";
    }

    artistModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(() => {
      artistModal.classList.remove("opacity-0");
      artistModal.classList.add("opacity-100");

      if (artistModalPanel) {
        artistModalPanel.classList.remove("opacity-0", "translate-y-8", "scale-95");
        artistModalPanel.classList.add("opacity-100", "translate-y-0", "scale-100");
      }
    });
  };

  const closeArtistModal = () => {
    if (!artistModal) return;

    artistModal.classList.remove("opacity-100");
    artistModal.classList.add("opacity-0");

    if (artistModalPanel) {
      artistModalPanel.classList.remove("opacity-100", "translate-y-0", "scale-100");
      artistModalPanel.classList.add("opacity-0", "translate-y-8", "scale-95");
    }

    setTimeout(() => {
      artistModal.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 250);
  };

  if (artistCards.length) {
    artistCards.forEach((card) => {
      card.addEventListener("click", () => {
        const artistData = {
          name: card.getAttribute("data-artist-name") || "",
          category: card.getAttribute("data-artist-category") || "",
          image: card.getAttribute("data-artist-image") || "",
          description: card.getAttribute("data-artist-description") || "",
          suitable: card.getAttribute("data-artist-suitable") || ""
        };

        openArtistModal(artistData);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();

          const artistData = {
            name: card.getAttribute("data-artist-name") || "",
            category: card.getAttribute("data-artist-category") || "",
            image: card.getAttribute("data-artist-image") || "",
            description: card.getAttribute("data-artist-description") || "",
            suitable: card.getAttribute("data-artist-suitable") || ""
          };

          openArtistModal(artistData);
        }
      });
    });
  }

  if (modalCloseButtons.length) {
    modalCloseButtons.forEach((btn) => {
      btn.addEventListener("click", closeArtistModal);
    });
  }

  if (artistModal) {
    artistModal.addEventListener("click", (e) => {
      if (e.target === artistModal) {
        closeArtistModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && artistModal && !artistModal.classList.contains("hidden")) {
      closeArtistModal();
    }
  });

  // BOOK NOW FROM MODAL -> AUTOFILL FORM
  if (artistModalBookBtn) {
    artistModalBookBtn.addEventListener("click", () => {
      if (serviceField) {
        const serviceOptions = Array.from(serviceField.options || []);
        const matchedOption = serviceOptions.find(
          (option) =>
            option.value.trim().toLowerCase() === selectedArtistCategory.trim().toLowerCase()
        );

        if (matchedOption) {
          serviceField.value = matchedOption.value;
        } else {
          serviceField.value = selectedArtistCategory || selectedArtistName || "";
        }

        serviceField.dispatchEvent(new Event("change", { bubbles: true }));
      }

      if (queryField) {
        const bookingMessage = `I want to book ${selectedArtistName}${selectedArtistCategory ? ` (${selectedArtistCategory})` : ""}. Please share details for availability, pricing, and booking process.`;

        if (queryField.value.trim() === "") {
          queryField.value = bookingMessage;
        } else if (!queryField.value.includes(selectedArtistName)) {
          queryField.value = `${bookingMessage}\n\n${queryField.value.trim()}`;
        }
      }

      closeArtistModal();

      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 120);
      }
    });
  }

  // FORM VALIDATION
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
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

    const showError = (fieldErrorEl) => {
      if (fieldErrorEl) fieldErrorEl.classList.remove("hidden");
    };

    const hideError = (fieldErrorEl) => {
      if (fieldErrorEl) fieldErrorEl.classList.add("hidden");
    };

    const isValidEmail = (value) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
    };

    const isValidPhone = (value) => {
      return /^[0-9]{10}$/.test(value.trim());
    };

    const validateName = () => {
      if (!name) return true;
      const valid = name.value.trim() !== "";
      valid ? hideError(nameError) : showError(nameError);
      return valid;
    };

    const validateEmail = () => {
      if (!email) return true;
      const valid = email.value.trim() !== "" && isValidEmail(email.value);
      valid ? hideError(emailError) : showError(emailError);
      return valid;
    };

    const validatePhone = () => {
      if (!phone) return true;
      const valid = isValidPhone(phone.value);
      valid ? hideError(phoneError) : showError(phoneError);
      return valid;
    };

    const validateService = () => {
      if (!service) return true;
      const valid = service.value.trim() !== "";
      valid ? hideError(serviceError) : showError(serviceError);
      return valid;
    };

    const validateQuery = () => {
      if (!query) return true;
      const valid = query.value.trim() !== "";
      valid ? hideError(queryError) : showError(queryError);
      return valid;
    };

    if (name) {
      name.addEventListener("input", validateName);
      name.addEventListener("blur", validateName);
    }

    if (email) {
      email.addEventListener("input", validateEmail);
      email.addEventListener("blur", validateEmail);
    }

    if (phone) {
      phone.addEventListener("input", () => {
        phone.value = phone.value.replace(/\D/g, "").slice(0, 10);
        validatePhone();
      });
      phone.addEventListener("blur", validatePhone);
    }

    if (service) {
      service.addEventListener("change", validateService);
      service.addEventListener("blur", validateService);
    }

    if (query) {
      query.addEventListener("input", validateQuery);
      query.addEventListener("blur", validateQuery);
    }

    contactForm.addEventListener("submit", function (e) {
      let isValid = true;

      hideError(nameError);
      hideError(emailError);
      hideError(phoneError);
      hideError(serviceError);
      hideError(queryError);

      if (!validateName()) isValid = false;
      if (!validateEmail()) isValid = false;
      if (!validatePhone()) isValid = false;
      if (!validateService()) isValid = false;
      if (!validateQuery()) isValid = false;

      if (!isValid) {
        e.preventDefault();
      }
    });
  }
});
  // CATEGORY SLIDERS
  const sliderGroups = document.querySelectorAll(".artist-slider-group");

  sliderGroups.forEach((group) => {
    const track = group.querySelector(".artist-slider-track");
    const prevBtn = group.querySelector("[data-slider-prev]");
    const nextBtn = group.querySelector("[data-slider-next]");

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    const getCardsPerView = () => {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    };

    const getGap = () => 24;

    const updateSlider = () => {
      const cards = Array.from(track.children);
      if (!cards.length) return;

      const cardsPerView = getCardsPerView();
      const maxIndex = Math.max(0, cards.length - cardsPerView);

      if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
      }

      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth;
      const translateX = currentIndex * (cardWidth + getGap());

      track.style.transform = `translateX(-${translateX}px)`;

      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;
    };

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateSlider();
      }
    });

    nextBtn.addEventListener("click", () => {
      const cards = Array.from(track.children);
      const maxIndex = Math.max(0, cards.length - getCardsPerView());

      if (currentIndex < maxIndex) {
        currentIndex += 1;
        updateSlider();
      }
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
  });