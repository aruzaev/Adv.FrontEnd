import React, { useState } from "react";

const MovieList = () => {
  // Define state for movies
  const [movies, setMovies] = useState([
    { id: 1, title: "The Big Short", rating: 7 },
    { id: 2, title: "The Whale", rating: 10 },
    { id: 3, title: "Spiderman: Into the Spiderverse", rating: 9 },
    { id: 4, title: "The Big Lebowski", rating: 8 },
    { id: 5, title: "Avengers: Endgame", rating: 6 },
  ]);

  // Define upvote function
  const upvote = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, rating: movie.rating + 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  // Define downvote function
  const downvote = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, rating: movie.rating - 1 };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Rating</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.rating}</td>
            <td>
              {/* Pass movie.id to upvote and downvote functions */}
              <button onClick={() => upvote(movie.id)}>Upvote</button>
              <button onClick={() => downvote(movie.id)}>Downvote</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
