document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      button.querySelector("i").style.transform = "rotate(0deg)";
    } else {
      answer.style.maxHeight = answer.scrollHeight + 50 + "px";
      button.querySelector("i").style.transform = "rotate(180deg)";
    }
  });
});
