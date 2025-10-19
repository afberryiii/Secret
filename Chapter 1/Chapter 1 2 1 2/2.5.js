document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Container");
  const gutButton = document.getElementById("gutButton");
  const dropButton = document.getElementById("dropButton");

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
      navigate("../Chapter%201%202%202%201/2.9.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (dropButton) {
    dropButton.addEventListener("click", () =>
      navigate("../Chapter%201%202%201%202%201/2.11.html")
    );
  }
});
