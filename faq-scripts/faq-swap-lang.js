document
  .getElementById("language-select")
  .addEventListener("change", (event) => {
    const selectedPage = event.target.value;
    window.location.href = selectedPage;
  });
