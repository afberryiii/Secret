document.title = "Prologue";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goHideButton = document.getElementById("HideButton");
  const goBreakInButton = document.getElementById("BreakInButton");

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

  if (goHideButton) {
    goHideButton.addEventListener("click", () =>
      navigate("../Choice%203%20Outcome%201/1.5.html")
    );
  } else {
    console.error("Error: Button with ID 'HideButton' not found.");
  }

  if (goBreakInButton) {
    goBreakInButton.addEventListener("click", () =>
      navigate("../Choice%203%20Outcome%202/1.6.html")
    );
  }
});
