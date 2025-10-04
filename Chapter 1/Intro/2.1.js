document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goAskButton = document.getElementById("askButton");
  const goIgnoreButton = document.getElementById("ignoreButton");

  if (container) {
    container.classList.add("is-visible");
    console.log("Scene Content fading in successfully.");
  }

  const navigate = (nextFilePath) => {
    if (!container) return;
    container.classList.remove("is-visible");
    container.classList.add("fade-out");

    setTimeout(() => {
      window.location.replace(nextFilePath);
    }, 2100);
  };

  if (goAskButton) {
    goAskButton.addEventListener("click", () =>
      navigate("../Chapter%201%20Choice%201/2.2.html")
    );
  } else {
    console.error("Error: Button with ID 'askButton' not found.");
  }

  if (goIgnoreButton) {
    goIgnoreButton.addEventListener("click", () =>
      navigate("../Chapter%201%20Choice%202/2.3.html")
    );
  }
});
