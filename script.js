const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const topGif = document.getElementById("topGif");
const floatingImages = document.getElementById("floating-images");
const mainText = document.getElementById("mainText");
const container = document.querySelector(".container");

// Make NO button run away inside the container
noBtn.addEventListener("mouseover", () => {
  const rect = container.getBoundingClientRect();

  const x = Math.random() * (rect.width - 120);
  const y = Math.random() * (rect.height - 120);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// What happens when YES is clicked
yesBtn.addEventListener("click", () => {

  // Hide everything on the main screen
  topGif.style.display = "none";
  mainText.style.display = "none";
  container.style.display = "none";

  // Show floating photos in background
  floatingImages.style.display = "block";

  // Show final full-screen message
  message.style.display = "block";
  message.innerHTML = "Yayyyy.... pui pui! I love you the most Jaan 💖";
});
