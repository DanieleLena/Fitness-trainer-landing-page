
// THR TOGGLE FAQ

const faqs = document.querySelectorAll(".question");

faqs.forEach((faq) => {

  faq.addEventListener("click", () => {

    faqs.forEach((faq2) => {
        
      if (faq2 !== faq) {
        faq2.classList.remove("question-active");
      }
    });
    // faq.style.maxHeight = "100%";
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
    // faq.style.maxHeight = "100%";
    btn.classList.toggle("btn-active");
  });
});