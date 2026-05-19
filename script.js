let currentY = window.scrollY;
let targetY = window.scrollY;

function animPageScroll() {
  target = window.scrollY;

  currentY += (targetY - currentY) * 0.0001;

  window.scrollTo(0, currentY);

  requestAnimationFrame(animate);
}

animPageScroll();