document.addEventListener("DOMContentLoaded", () => {
  const nextPageContent = document.getElementById("nextPageContent");

  setTimeout(() => {
    nextPageContent.classList.add("fade-in-end");
  }, 50);
});
