function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

const circleCount = 444;
const minSize = 44;
const maxSize = 144;

const screenEl = document.getElementById('screen');

function drawCircles() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  screenEl.innerHTML = '';

  for (let i = 0; i < circleCount; i++) {
    const size = rand(minSize, maxSize);

    // random x/y, but so the circle stays fully inside the screen
    const x = rand(0, w - size);
    const y = rand(0, h - size);

    const circleEl = document.createElement('div');
    circleEl.classList.add('circle');

    circleEl.style.width = size + 'px';
    circleEl.style.height = size + 'px';
    circleEl.style.left = x + 'px';
    circleEl.style.top = y + 'px';
    circleEl.style.backgroundColor = randomColor();
    circleEl.style.opacity = '0.5';

    screenEl.appendChild(circleEl);
  }
}

drawCircles();
window.addEventListener('resize', drawCircles);
