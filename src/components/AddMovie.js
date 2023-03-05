import React, { useState } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [openingText, setOpeningText] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    const newMovie = {
      title: title,
      openingText: openingText,
      releaseDate: releaseDate,
    };
    console.log(newMovie);
    props.onAddMovie(newMovie);
    setTitle("");
    setOpeningText("");
    setReleaseDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows="5"
          id="opening-text"
          value={openingText}
          onChange={(event) => setOpeningText(event.target.value)}
          required
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
          required
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
