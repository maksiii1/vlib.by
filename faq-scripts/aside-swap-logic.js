function moveSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const faqContainer = document.querySelector(".faq-container");
  const parent = faqContainer.parentNode;

  if (window.innerWidth < 1023) {
    if (sidebar.parentNode !== parent) {
      parent.appendChild(sidebar);
    }
  }
}

window.addEventListener("DOMContentLoaded", moveSidebar);
