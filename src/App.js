import React, { Component } from "react";
import movies from "./data.json";
import MovieBox from "./components/MovieBox";
import "./App.css";
import AddMovie from "./components/AddMovie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieArray: movies
    };
  }

  addMovie(newMovie) {
    const { movieArray } = this.state;
    const movieArrayCopy = [...movieArray];
    movieArrayCopy.push(newMovie);
    this.setState({ movieArray: movieArrayCopy });
  }

  render() {
    const { movieArray } = this.state;
    const myMovieList = movieArray.map(oneMovie => {
      return <MovieBox key={oneMovie.id} movieItem={oneMovie} />;
    });

    return (
      <React.Fragment>
        <ul>{myMovieList}</ul>
        <MovieBox />
        <AddMovie addMovie={newMovie => this.addMovie(newMovie)} />
      </React.Fragment>
    );
  }
}

export default App;
