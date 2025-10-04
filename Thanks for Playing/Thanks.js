document.title = "Thanks for Playing";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sceneContainer");
  const goMenuButton = document.getElementById("menuButton");

  if (container) {
    container.classList.add("is-visible");
    console.log("Scene Content fading in successfully.");
  }

  const navigate = (nextFilePath) => {
    if (!container) return;

    // Start fade-out animation
    container.classList.remove("is-visible");
    container.classList.add("fade-out");

    // Wait for fade-out animation to finish, then navigate
    setTimeout(() => {
      window.location.replace(nextFilePath);
    }, 2100); // Match your CSS fade-out duration
  };

  if (goMenuButton) {
    goMenuButton.addEventListener("click", () =>
      navigate("../Title%20Screen/index.html")
    );
  } else {
    console.error("Error: Button with ID 'menuButton' not found.");
  }
});
