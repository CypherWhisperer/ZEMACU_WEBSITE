
// IMPORTING PHOTOES
import fallbackImage from '@images/leaders/fallback.jpg'


import chairMain from '@images/leaders/main/chair.jpg'
import chairBg from '@images/leaders/bg/chair.webp'

import vchairMain from '@images/leaders/main/vchair.jpg'
import vchairBg from '@images/leaders/bg/vchair.webp'

import bsMain from '@images/leaders/main/bs.jpg'
import bsBg from '@images/leaders/bg/bs.webp'

import discpMain from '@images/leaders/main/disc.jpg'
import discpBg from '@images/leaders/bg/disc.webp'

import prayerMain from '@images/leaders/main/prayer.jpg'
import prayerBg from '@images/leaders/bg/prayer.webp'

import praiseMain from '@images/leaders/main/praise.jpg'
import praiseBg from '@images/leaders/bg/praise.webp'

import missionMain from '@images/leaders/main/mission.jpg'
import missionBg from '@images/leaders/bg/mission.webp'

import devMain from '@images/leaders/main/dev.jpg'
import devBg from '@images/leaders/bg/dev.webp'

import usherMain from '@images/leaders/main/usher.jpg'
import usherBg from '@images/leaders/bg/usher.webp'

import secMain from '@images/leaders/main/secretary.jpg'
import secBg from '@images/leaders/bg/secretary.webp'

import treasureMain from '@images/leaders/main/treasury.jpg'
import treasureBg from '@images/leaders/bg/treasury.webp'

import mediaMain from '@images/leaders/main/media.jpg'
import mediaBg from '@images/leaders/bg/media.webp'

// === 0. Wrap all logic inside this DOM + asset loader
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    initializeCarousel(); // ← Call main logic only when ready
  });
});

function initializeCarousel() {
  // =====================================================================================

  // === 1. Define Leader Content (Static Layout, Dynamic Data) ===

  const leaderData = {
    chairperson: {
      name: "Meshack Abwolo",
      mainImage: chairMain,
      bgImage: chairBg,
      description: "Meshack leads the entire council and ensures all functions run smoothly and efficiently.",
      phone: "254748390059"
    },
    vicechair: {
      name: "Mercy Josephine",
      mainImage: vchairMain,
      bgImage: vchairBg,
      description: "Mercy assists the chairperson and steps in during their absence.",
      phone: "254716708152"
    },
    biblestudy: {
      name: "Christine Murugi",
      mainImage: bsMain,
      bgImage: bsBg,
      description: "Christine coordinates weekly Bible study sessions and fosters spiritual growth.",
      phone: "254790306571"
    },
    discipleship: {
      name: "Ann Michael",
      mainImage: discpMain,
      bgImage: discpBg,
      description: "Ann mentors new members and guides them in their walk of faith.",
      phone: "254748736006"
    },
    prayer: {
      name: "Gideon Moikan",
      mainImage: prayerMain,
      bgImage: prayerBg,
      description: "Gideon leads intercessory prayers and organizes prayer meetings.",
      phone: "254112388656"
    },
    worship: {
      name: "Margaret ",
      mainImage: praiseMain,
      bgImage: praiseBg,
      description: "Margaret oversees worship teams and plans praise and worship sessions.",
      phone: "254745208720"
    },
    missions: {
      name: "Kevin Odhiambo",
      mainImage: missionMain,
      bgImage: missionBg,
      description: "Kevin organizes outreach and mission activities in and out of campus.",
      phone: "254758257432"
    },
    development: {
      name: "Sirere Simanka",
      mainImage: devMain,
      bgImage: devBg,
      description: "Sirere leads fundraising and development of infrastructure.",
      phone: "254745261485"
    },
    ushering: {
      name: "Mirrium Cherotich",
      mainImage: usherMain,
      bgImage: usherBg,
      description: "Mirrium organizes ushering teams and hospitality during events.",
      phone: "254701569293"
    },
    secretary: {
      name: "Justine Zijenga",
      mainImage: secMain,
      bgImage: secBg,
      description: "Justine maintains documentation, communication, and record-keeping across teams.",
      phone: "254743534987"
    },
    treasurer: {
      name: "Melick Nzomo",
      mainImage: treasureMain,
      bgImage: treasureBg,
      description: "Melick oversees finances, budgets, and all monetary reporting.",
      phone: "254796008573"
    },
    media: {
      name: "Samuel Maina",
      mainImage: mediaMain,
      bgImage: mediaBg,
      description: "Samuel handles and delegates digital media, announcements, and social media presence.",
      phone: "254708816796"
    }
  };

  // === 2. Define Order of Roles Matching the HTML Order ===
  const rolesInOrder = [
    "chairperson",
    "vicechair",
    "biblestudy",
    "discipleship",
    "prayer",
    "worship",
    "missions",
    "development",
    "ushering",
    "secretary",
    "treasurer",
    "media"
  ];

  // === 3. Bind Data to Carousel Items ===
  document.querySelectorAll('.carousel .list .item').forEach((item, index) => {
    const roleKey = rolesInOrder[index];
    const leader = leaderData[roleKey];
    if (!leader) return;

    const bgImg = item.querySelector("img.bg-image") || item.querySelector("img");
    const mainImg = item.querySelector(".image-container img");
    const nameEl = item.querySelector(".name");
    const descEl = item.querySelector(".description");

    // Inject leader image, name, and description
    bgImg.src = leader.bgImage;
    mainImg.src = leader.mainImage;
    nameEl.textContent = leader.name;
    descEl.textContent = leader.description;

    // Set fallback image if not found
    bgImg.onerror = () => { bgImg.src = fallbackImage; };
    mainImg.onerror = () => { mainImg.src = fallbackImage; };

    // === NEW: Add WhatsApp Attributes to the Chat Button ===
    const chatButton = item.querySelector(".buttons button");
    const rank = item.querySelector(".rank")?.textContent.trim();

    chatButton.setAttribute("data-phone", leader.phone);
    chatButton.setAttribute("data-name", leader.name);
    chatButton.setAttribute("data-rank", rank);
  });

  // === 4. Populate Thumbnails ===
  document.querySelectorAll('.carousel .thumbnail .item').forEach((thumb, index) => {
    const roleKey = rolesInOrder[index];
    const leader = leaderData[roleKey];
    if (!leader) return;

    const thumbImg = thumb.querySelector("img");
    const nameEl = thumb.querySelector(".name");

    thumbImg.src = leader.mainImage;
    nameEl.textContent = leader.name;

    thumbImg.onerror = () => { thumbImg.src = fallbackImage; };
  });

  // =====================================================================================

  // === 5. Setup Carousel Functionality

  const nextDom = document.getElementById('next');
  const prevDom = document.getElementById('prev');
  const carouselDom = document.querySelector('.carousel');
  const SliderDom = carouselDom.querySelector('.carousel .list');
  const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
  const timeDom = document.querySelector('.carousel .time');
  let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

  // Move first thumbnail to the end to set initial position
  thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

  const timeRunning = 3000;
  const timeAutoNext = 10000;

  let isAnimating = false;
  let runNextAuto = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);

  // Animation trigger
  function showSlider(type) {
    if (isAnimating) return; // Debounce if animation is active
    isAnimating = true;

    requestAnimationFrame(() => {
      carouselDom.classList.add(type);

      // Rearranging DOM
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      }

      // ✅ Restart the time progress bar animation here:
      //timeDom.classList.remove("running");
      //void timeDom.offsetWidth; // ← force reflow so class removal is registered
      //timeDom.classList.add("running");

      // Handle animation and clean UP
      // Use animationend instead of setTimeout
      const onAnimEnd = () => {
        carouselDom.classList.remove(type);
        carouselDom.removeEventListener("animationend", onAnimEnd);
        isAnimating = false;

        // Reset auto-next timer
        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
          nextDom.click();
        }, timeAutoNext);
      };

      carouselDom.addEventListener("animationend", onAnimEnd);

      // Optional: Animate the time bar
      timeDom.classList.remove("running");
      void timeDom.offsetWidth; // trigger reflow for restart
      timeDom.classList.add("running");
    });
  }

  // Bind buttons
  nextDom.addEventListener("click", () => showSlider('next'));
  prevDom.addEventListener("click", () => showSlider('prev'));

  // === 4. WhatsApp Click Logic

  document.querySelectorAll('.carousel .list .item .buttons button:first-child').forEach(button => {
    button.addEventListener('click', function() {
      const phone = this.getAttribute('data-phone');
      const name = this.getAttribute('data-name');
      const rank = this.getAttribute('data-rank');
      const message = encodeURIComponent(`Hello ${name}, I would like to reach out to you.`);

      // Attempts to open app even in Desktop
      //const url = `https://wa.me/${phone}?text=${message}`;
      // for forced web 
      //const url = `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;

      // A smarter option
      const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
      const url = isMobile
        ? `https://wa.me/${phone}?text=${message}`
        : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
      window.open(url, '_blank');

    });
  });
}

