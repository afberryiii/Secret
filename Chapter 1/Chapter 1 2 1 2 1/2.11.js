document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const gutButton = document.getElementById("gutButton");
  const focusButton = document.getElementById("focusButton");

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

  if (gutButton) {
    gutButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%202/2.9.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (focusButton) {
    focusButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%202%202%202%20H1/2.13.html")
    );
  }
});
