document.title = "Chapter 1: Echoes of the Past";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goShowButton = document.getElementById("showButton");
  const goKeepButton = document.getElementById("keepButton");

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

  if (goShowButton) {
    goShowButton.addEventListener("click", () =>
      navigate("../../Thanks%20for%20Playing/Thanks.html")
    );
  } else {
    console.error("Error: Button with ID 'showButton' not found.");
  }

  if (goKeepButton) {
    goKeepButton.addEventListener("click", () =>
      navigate("../../Thanks%20for%20Playing/Thanks.html")
    );
  }
});
