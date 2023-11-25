// lang switch 

document.getElementById('lang-switch').addEventListener('change', function () {
  var selectedLanguage = this.value;
  var newUrl;

  switch (selectedLanguage) {
      case 'de':
          newUrl = 'index-de.html';
          break;
      case 'ru':
          newUrl = 'index-ru.html';
          break;
      default:
          newUrl = 'index.html';
  }

  window.location.href = newUrl;
});

// services dropdown

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled",
};

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(
      params.disabledClassName,
      params.activeClassName
    );
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(
      `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
    );

    if (
      activeElements.length &&
      !evt.target.closest(`.${params.activeClassName}`)
    ) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(
        `.${params.dropClassName}[data-target="${path}"]`
      );

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


// burger 

const burgerButton = document.querySelector('.burger');
const navList = document.querySelector('.nav__list');

burgerButton.addEventListener('click', () => {
    navList.classList.toggle('nav__list--active');
    burgerButton.classList.toggle('burger--active');
});

// hero swiper

var container = document.querySelector(".hero");
var heroSlider = new Swiper(".hero__swiper", {
  allowTouchMove: false,
  loop: true,
  effect: "fade",
  speed: 300,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// choices

const element = document.querySelector(".select__lang");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
  shouldSortItems: false,
  items: [],
});

// services

let servicesBtn = document.querySelectorAll(".services__btn");
let servicesContent = document.querySelectorAll(".services-content");

servicesBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    servicesBtn.forEach(function (btn) {
      btn.classList.remove("services__btn--active");
    });
    e.currentTarget.classList.add("services__btn--active");

    servicesContent.forEach(function (element) {
      element.classList.remove("services-content--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("services-content--active");
  });
});

// smooth  scroll

if (window.location.href.includes("index.html")) {
  const smoothLinks = document.querySelectorAll(".nav__link");
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

//

function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}

document
  .querySelector('.nav__link[href="#about-us"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#about-us");
  });

document
  .querySelector('.nav__link[href="#contact-us"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#contact-us");
  });

//scroll to top

document.addEventListener("DOMContentLoaded", function () {
  let scrollToTopButton = document.querySelector(".scroll-to-top");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopButton.addEventListener("click", scrollToTop);
});
