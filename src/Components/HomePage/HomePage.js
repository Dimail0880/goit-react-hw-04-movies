import React, { Component } from "react";
import { getTrending } from "../helpers/getAPI";
import { Link } from "react-router-dom";
// import MoviesList from '../MoviesList/MoviesList'

export default class HomePage extends Component {
  state = {
    moviesList: [],
  };

  componentDidMount() {
    getTrending()
      .then((res) => {
        this.setState({
          moviesList: res.data.results,
        });
      })
      .catch((error) => console.log("Home page", error));
  }

  render() {
    const { moviesList } = this.state;
    console.log(moviesList)
    return (
      <>
        <h2>Trending now </h2>
        <ul>
          {moviesList.map((el) => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `/movies/${el.id}`,
                  state: { from: this.props.location },

                }}
              >
                {el.original_title ? el.original_title : el.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
