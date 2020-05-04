import React, { Component } from "react";
import { getTrending } from "../../helpers/getAPI";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

export default class HomePage extends Component {
  state = {
    moviesList: [],
    isLoading: true,
  };

  componentDidMount() {
    getTrending()
      .then((res) => this.setState({ moviesList: res }))
      .finally(this.setState({ isLoading: false }));
  }

  render() {
    const { moviesList, isLoading } = this.state;
    return (
      <>
        <h2>Trending now </h2>

        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </>
    );
  }
}
