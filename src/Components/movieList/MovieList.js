import React from "react";
import AddMovie from "../addCard/AddMovie";
import MovieCard from "../movieCards/MovieCard";
import "./movieList.css";

const MovieList = ({
  movies,
  deleteCard,
  addMoviesCard,
  searchByTitle,
  searchByRating,
}) => {
  return (
    <div className="movieList">
      {movies
        .filter(
          (movie) =>
            movie.title
              .toLowerCase()
              .includes(searchByTitle.toLowerCase().trim()) &&
            movie.rating >= searchByRating
        )
        .map((movie, index) => (
          <MovieCard
            key={index}
            id={index}
            movieInfo={movie}
            deleteFunction={deleteCard}
          />
        ))}
      <AddMovie addToList={addMoviesCard} />
    </div>
  );
};

export default MovieList;
