document.getElementById('year').textContent = new Date().getFullYear();

const movies = [
  {title: "Oppenheimer", year: 2023, img: "assets/Oppenheimer_poster.jpg"},
  {title: "Dune: Part Two", year: 2024, img: "assets/dune_poster.jpg"},
  {title: "Poor Things", year: 2023, img: "assets/poorthings_poster.jpg"},
  {title: "The Holdovers", year: 2023, img: "assets/therod_poster.jpg"},
  {title: "Killers of the Flower Moon", year: 2023, img: "assets/killers_poster.jpg"},
  {title: "The Zone of Interest", year: 2023, img: "assets/thezone_poster.png"}
];

const grid = document.getElementById('movie-grid');
movies.forEach(m => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img class="poster" src="${m.img}" alt="${m.title} poster" />
    <div class="meta">
      <p class="title">${m.title}</p>
      <p class="year">${m.year} • Drama</p>
    </div>
  `;
  grid.appendChild(card);
});
