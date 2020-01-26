const movies = [
  {
    track_name: "1",
    artist_name: "Oceans 8",
    album_name: "Comedy",
    likes: 4,
    dislikes: 1
  },
  {
    track_name: "2",
    artist_name: "Midnight Sun",
    album_name: "Comedy",
    likes: 2,
    dislikes: 0
  },
  {
    track_name: "3",
    artist_name: "Les indestructibles 2",
    album_name: "Animation",
    likes: 3,
    dislikes: 1
  },
  {
    track_name: "4",
    artist_name: "Sans un bruit",
    album_name: "Thriller",
    likes: 6,
    dislikes: 6
  },
  {
    track_name: "5",
    artist_name: "Creed II",
    album_name: "Drame",
    likes: 16,
    dislikes: 2
  },
  {
    track_name: "6",
    artist_name: "Pulp Fiction",
    album_name: "Thriller",
    likes: 11,
    dislikes: 3
  },
  {
    track_name: "7",
    artist_name: "Pulp Fiction",
    album_name: "Thriller",
    likes: 12333,
    dislikes: 32
  },
  {
    track_name: "8",
    artist_name: "Seven",
    album_name: "Thriller",
    likes: 2,
    dislikes: 1
  },
  {
    track_name: "9",
    artist_name: "Inception",
    album_name: "Thriller",
    likes: 2,
    dislikes: 1
  },
  {
    track_name: "10",
    artist_name: "Gone Girl",
    album_name: "Thriller",
    likes: 22,
    dislikes: 12
  }
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, movies)
);
