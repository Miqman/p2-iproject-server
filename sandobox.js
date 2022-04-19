let genres = [
  {
    mal_id: 24,
    type: "anime",
    name: "Sci-Fi",
    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
  },
  {
    mal_id: 24,
    type: "anime",
    name: "Action",
    url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
  },
];

let coba = {};
genres = genres.map((el) => el.name);
coba = genres.join(", ");

console.log(coba);
