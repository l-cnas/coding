const C = [
  'Višta',
  'Gaidys',
  'Šernas',
  'Lapė',
  'Vilkas',
  'Šuo dingo',
  'Barsukas',
  'Voverė',
  'Šuo',
  'Naminis katinas',
  'Laukinis katinas',
  'Šuo atsirado',
  'Bebras',
  'Ožys'
];

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


const animals = [];
for (let i = 0; i < 10; i++) {
  animals.push(...C);
}

animals.forEach(name => {
  const div = document.createElement('div');
  div.innerText = name;

  const size = rand(10, 100);

  div.style.position = 'absolute';
  div.style.left = rand(0, window.innerWidth) + 'px';
  div.style.top = rand(0, window.innerHeight) + 'px';

  div.style.fontSize = size + 'px';
  div.style.color = `rgb(${rand(0,255)}, ${rand(0,255)}, ${rand(0,255)})`;

  document.body.appendChild(div);
});
