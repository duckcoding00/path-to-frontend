document.addEventListener("DOMContentLoaded", () => {
  const factHeaders = document.querySelectorAll(".fact");
  const factIcons = document.querySelectorAll(".fact-icon");

  factHeaders.forEach((header, index) => {
    header.addEventListener("click", () => {
      toggleContent(index);
    });
  });

  factIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      toggleContent(index);
    });
  });

  function toggleContent(index) {
    const contentDiv =
      factHeaders[index].closest(".columns").nextElementSibling;
    const contentParagraph = contentDiv.querySelector("p");
    const icon = factIcons[index];

    if (contentParagraph.classList.contains("is-hidden")) {
      contentParagraph.classList.remove("is-hidden");
      icon.textContent = "+";
    } else {
      contentParagraph.classList.add("is-hidden");
      icon.textContent = "-";
    }
  }
});
