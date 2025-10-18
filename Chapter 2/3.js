document.title = "Chapter 2: Whispers Over Wine";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const continueButton = document.getElementById("continueButton");
  const nextPagePath = "../Thanks%20for%20Playing/Thanks.html";

  if (!container) console.error("Container 'sceneContainer' not found.");
  if (!continueButton) console.error("Button 'continueButton' not found.");

  if (container) container.classList.add("is-visible");

  if (continueButton && container) {
    continueButton.addEventListener("click", () => {
      container.classList.add("fade-out");
      setTimeout(() => {
        window.location.replace(nextPagePath);
      }, 2100);
    });
  }
});
