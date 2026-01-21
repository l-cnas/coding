const slides = document.querySelectorAll('.jsGallery li');
const texts = document.querySelectorAll('.jsPhotoText li');
const thumbsUl = document.querySelector('.jsPreviewCnt');
const thumbs = document.querySelectorAll('.jsPreviewCnt li');

const prevBtn = document.querySelector('.jsPrev');
const nextBtn = document.querySelector('.jsNext');
const playBtn = document.querySelector('.jsPlay');
const stopBtn = document.querySelector('.jsStop');

let i = 0;
let timer;
let playing = true;

const SPEED = 3000;

// uzdeda "act" klase ant pasirinkto elemento
function setAct(list, idx) {
  list.forEach((el, n) => el.classList.toggle('act', n === idx));
}

// perstumia thumbnail juosta i centra ant aktyvios nuotraukos
function centerThumb() {
  const t = thumbs[i];
  if (!t) return;

  const box = thumbsUl.parentElement;

  // kiek reikia perstumti, kad thumb butu per viduri
  const x = (box.clientWidth / 2) - (t.offsetLeft + t.clientWidth / 2);

  // ribos, kad neperstumtu i tuscia vieta
  const maxLeft = 0;
  const maxRight = box.clientWidth - thumbsUl.scrollWidth;

  const finalX = Math.max(maxRight, Math.min(maxLeft, x));

  thumbsUl.style.transition = 'transform 250ms ease';
  thumbsUl.style.transform = `translateX(${finalX}px)`;
}

// pakeicia slide + teksta + thumb vienu metu
function show(n) {
  if (n < 0) n = slides.length - 1;
  if (n >= slides.length) n = 0;
  i = n;

  setAct(slides, i);
  setAct(texts, i);
  setAct(thumbs, i);
  centerThumb();
}

// auto slide kas 3s
function start() {
  if (timer) return;
  playing = true;

  timer = setInterval(() => show(i + 1), SPEED);

  if (playBtn) playBtn.style.display = 'none';
  if (stopBtn) stopBtn.style.display = 'flex';
}

function stop() {
  playing = false;

  clearInterval(timer);
  timer = null;

  if (playBtn) playBtn.style.display = 'flex';
  if (stopBtn) stopBtn.style.display = 'none';
}

// kad paspaudus next/prev neprarastu 3s ritmo
function restart() {
  if (!playing) return;
  stop();
  start();
}

nextBtn?.addEventListener('click', () => {
  show(i + 1);
  restart();
});

prevBtn?.addEventListener('click', () => {
  show(i - 1);
  restart();
});

stopBtn?.addEventListener('click', stop);
playBtn?.addEventListener('click', start);

// pasirinkus thumb iskart sokam i ta slide
thumbs.forEach((t, idx) => {
  t.addEventListener('click', () => {
    show(idx);
    restart();
  });
});

show(0);
start();