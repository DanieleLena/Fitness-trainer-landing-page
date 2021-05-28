//MOBILE-MENU

const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".mobile-link");
const hamburgerIcon = document.getElementById("#hamburger");
const crossIcon = document.getElementById("#cross");

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("hamburger-close")) {
    closeMenu();
  } else {
    openMenu();
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

const openMenu = () => {
  hamburgerMenu.classList.toggle("hamburger-close");
  menu.style.transition = "1.5s max-height ease-out";
  menu.classList.add("mobile-menu-open");
  hamburgerIcon.classList.toggle("hide-icon");
  crossIcon.classList.toggle("hide-icon");
};
const closeMenu = () => {
  hamburgerMenu.classList.toggle("hamburger-close");
  menu.style.transition = "none";
  menu.classList.remove("mobile-menu-open");
  hamburgerIcon.classList.toggle("hide-icon");
  crossIcon.classList.toggle("hide-icon");
};

// THR TOGGLE FAQ

const faqs = document.querySelectorAll(".question");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((faq2) => {
      if (faq2 !== faq) {
        faq2.classList.remove("question-active");
      }
    });
    faq.classList.toggle("question-active");
  });
});

const faqsBtn = document.querySelectorAll(".faqBtn");

faqsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    faqsBtn.forEach((btn2) => {
      if (btn2 !== btn) {
        btn2.classList.remove("btn-active");
      }
    });
    btn.classList.toggle("btn-active");
  });
});
