const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const topGif = document.getElementById("topGif");
const mainText = document.getElementById("mainText");
const container = document.querySelector(".container");
const floatingImages = document.getElementById("floating-images");

const audioBefore = document.getElementById("audioBefore");
const audioAfter = document.getElementById("audioAfter");

let audioStarted = false;

// Start first audio on first click anywhere
document.body.addEventListener("click", () => {
  if (!audioStarted) {
    audioBefore.play();
    audioStarted = true;
  }
});

// Runaway NO button (works inside container)
noBtn.addEventListener("mouseover", () => {
  const rect = container.getBoundingClientRect();

  const x = Math.random() * (rect.width - 120);
  const y = Math.random() * (rect.height - 120);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// What happens when YES is clicked
yesBtn.addEventListener("click", () => {

  // Stop first audio
  audioBefore.pause();
  audioBefore.currentTime = 0;

  // Start second audio
  audioAfter.play();

  // Hide everything on main screen
  topGif.style.display = "none";
  mainText.style.display = "none";
  container.style.display = "none";

  // Show floating photos
  floatingImages.style.display = "block";

  // Show final message
  message.style.display = "block";
  message.innerHTML = "Yayyyy.... pui pui! I love you the most Jaan 💖";
});
