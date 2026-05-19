const layers = document.querySelectorAll(".layer");

const factors = [0.04, 0.08, 0.14, 0.12, 0.08, 0.18]; //sky,water,fish,surface,sharkboy,glow

let currentY = 0;
let targetY = 0;

function animPageScroll() {
  targetY = window.scrollY;

  currentY += (targetY - currentY) * 0.08;

  layers.forEach((layer, i) => {
    const factor = factors[i] || 0;

    layer.style.transform =
      `translateY(${-targetY * factor}px)`;
  });

  requestAnimationFrame(animPageScroll);
}

animPageScroll();