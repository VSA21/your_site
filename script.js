// ---------- СЧЁТЧИК ----------
const startDate = new Date("2020-06-01");

function updateDays() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("days").textContent = days + " дней ❤️";
}

updateDays();
setInterval(updateDays, 1000 * 60 * 60);

// ---------- МУЗЫКА ----------
const music = document.getElementById("music");
let musicOn = false;

//----------Громкость-----------
music.volume = 0.2;

function toggleMusic() {
  if (!musicOn) {
    music.play();
    musicOn = true;
  } else {
    music.pause();
    musicOn = false;
  }
}

// ---------- ЛАЙТБОКС ----------
function openImage(src) {
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  img.src = src;
  box.style.display = "flex";
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}

// ---------- СЕРДЕЧКИ ----------
let heartsOn = false;

function toggleHearts() {
  heartsOn = !heartsOn;
}

function createHeart() {
  if (!heartsOn) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (10 + Math.random() * 20) + "px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);