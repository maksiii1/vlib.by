document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("faq-search");
  const faqQuestions = document.querySelectorAll(".faq-question");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    faqQuestions.forEach((btn) => {
      const text = btn.textContent.toLowerCase();
      if (query && text.includes(query)) {
        btn.classList.add("highlighted");
      } else {
        btn.classList.remove("highlighted");
      }
    });
  });
});
