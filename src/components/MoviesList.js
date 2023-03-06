import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const deleteHandler = (id) => {
    props.movies.filter((movie) => movie.id !== id);
    props.onDeleteMovie(id);
  };
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDeleteMovie={deleteHandler}
        />
      ))}
    </ul>
  );
};

export default MovieList;
