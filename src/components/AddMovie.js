import React, { Component } from "react";
import PropTypes from "prop-types";
import Joi from "joi-browser";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      director: "",
      synopsis: "",
      year: "",
      poster: "",
      errors: {
        title: "",
        director: "",
        synopsis: "",
        year: "",
        poster: ""
      }
    };
  }

  schema = {
    title: Joi.string().required(),
    director: Joi.string().required(),
    synopsis: Joi.string().required(),
    year: Joi.number().required(),
    poster: Joi.string().required()
  };

  handleUserInput(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  validateInput() {
    const result = Joi.validate(this.state, this.schema, { abortEarly: false });
    console.log(result);

    const errors = {};
    result.error.details.map(oneItem => {
      return (errors[oneItem.path[0]] = oneItem.message);
    });
    return errors;
  }

  submitMovieForm(event) {
    event.preventDefault();

    const errors = this.validateInput();
    this.setState({ errors });
    if (errors) {
      return;
    }

    const newMovie = this.state;
    this.props.addMovie(newMovie);
    this.setState({
      title: "",
      director: "",
      synopsis: "",
      year: "",
      poster: ""
    });
  }

  render() {
    const { title, director, synopsis, year, poster, errors } = this.state;
    // const { submitMovieForm } = this.props;
    return (
      //form[onSubmit]>(label+input)*6

      <form onSubmit={event => this.submitMovieForm(event)}>
        <label htmlFor="title">Movie title</label>
        <input
          type="text"
          name="title"
          onChange={event => this.handleUserInput(event)}
          value={title}
        />
        {errors.title && <div>{errors.title}</div>}

        <label htmlFor="director">Director</label>
        <input
          type="text"
          name="director"
          onChange={event => this.handleUserInput(event)}
          value={director}
        />
        {errors.director && <div>{errors.director}</div>}
        <label htmlFor="synopsis">Synopsis</label>
        <input
          type="text"
          name="synopsis"
          onChange={event => this.handleUserInput(event)}
          value={synopsis}
        />
        {errors.synopsis && <div>{errors.synopsis}</div>}
        <label htmlFor="year">Released in:</label>
        <input
          type="text"
          name="year"
          onChange={event => this.handleUserInput(event)}
          value={year}
        />
        {errors.year && <div>{errors.year}</div>}
        <label htmlFor="poster">Poster URL:</label>
        <input
          type="text"
          name="poster"
          onChange={event => this.handleUserInput(event)}
          value={poster}
        />
        {errors.poster && <div>{errors.poster}</div>}
        <button>Submit</button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func
};

export default AddMovie;
