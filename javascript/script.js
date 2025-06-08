let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(showNextImage, 3000); // troca de imagem a cada 3 segundos

// Desbloqueia autoplay da música após primeiro clique
// ========== Início automático da música ==========
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.5; // ajuste o volume se quiser
  audio.play().catch((err) => {
    console.warn("Autoplay bloqueado, tentando novamente após interação");
  });
});

// ========== Corações automáticos ==========
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

function generateRandomHearts() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < 6; i++) {
    const x = Math.random() * width;
    const y = height - 30; // Começa de baixo
    createHeart(x, y);
  }
}

// Dispara corações a cada 2 segundos
setInterval(generateRandomHearts, 2000);
