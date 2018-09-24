import React from "react";
import PropTypes from "prop-types";

function MovieBox(props) {
  const { movieItem } = props;
  return (
    <li>
      <h2>{movieItem.title}</h2>
      <p>{movieItem.synopsis}</p>
      <p>Directed by {movieItem.director}</p>
      <img src={movieItem.poster} height="200px" alt={movieItem.title} />
      <p>Released in {movieItem.year}</p>
    </li>
  );
}

MovieBox.propTypes = {
  movieItem: PropTypes.object
};

MovieBox.defaultProps = {
  movieItem: {
    title: "Harry Potter",
    director: "Christopher Columbus",
    synopsis: "a small wizzard on his broom",
    year: 2000,
    poster: "example.com"
  }
};

export default MovieBox;
