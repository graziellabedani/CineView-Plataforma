document.getElementById('year').textContent = new Date().getFullYear();

const premiados = [
  { title: "Oppenheimer", year: 2023, genre: "Drama", img: "assets/Oppenheimer_poster.jpg" },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", img: "assets/dune_poster.jpg" },
  { title: "Poor Things", year: 2023, genre: "Fantasia", img: "assets/poorthings_poster.jpg" },
  { title: "Killers of the Flower Moon", year: 2023, genre: "Drama", img: "assets/killers_poster.jpg" },
  { title: "The Zone of Interest", year: 2023, genre: "Guerra", img: "assets/thezone_poster.png" },
  { title: "The Holdovers", year: 2023, genre: "Drama", img: "assets/therod_poster.jpg" }
];

const top5 = [
  { title: "Oppenheimer", year: 2023, genre: "Drama", img: "assets/Oppenheimer_poster.jpg" },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", img: "assets/dune_poster.jpg" },
  { title: "Poor Things", year: 2023, genre: "Fantasia", img: "assets/poorthings_poster.jpg" },
  { title: "Killers of the Flower Moon", year: 2023, genre: "Drama", img: "assets/killers_poster.jpg" },
  { title: "The Zone of Interest", year: 2023, genre: "Guerra", img: "assets/thezone_poster.png" },
  { title: "The Holdovers", year: 2023, genre: "Drama", img: "assets/therod_poster.jpg" }
];

const comedia = [
  { title: "Oppenheimer", year: 2023, genre: "Drama", img: "assets/Oppenheimer_poster.jpg" },
  { title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", img: "assets/dune_poster.jpg" },
  { title: "Poor Things", year: 2023, genre: "Fantasia", img: "assets/poorthings_poster.jpg" },
  { title: "Killers of the Flower Moon", year: 2023, genre: "Drama", img: "assets/killers_poster.jpg" },
  { title: "The Zone of Interest", year: 2023, genre: "Guerra", img: "assets/thezone_poster.png" },
  { title: "The Holdovers", year: 2023, genre: "Drama", img: "assets/therod_poster.jpg" }
];

function carregarFilmes(lista, elementoID) {
  const grid = document.getElementById(elementoID);

  lista.forEach(f => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="poster" src="${f.img}" alt="${f.title} poster">
      <div class="meta">
        <p class="title">${f.title}</p>
        <p class="year">${f.year} • ${f.genre}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}
carregarFilmes(premiados, "premiados-grid");
carregarFilmes(top5, "top5-grid");
carregarFilmes(comedia, "comedia-grid");
