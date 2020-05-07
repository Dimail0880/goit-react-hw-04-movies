import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { getMovieDetails } from "../../helpers/getAPI";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Review/Review";
import Loader from "react-loader-spinner";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { routes } from "../../helpers/route";

export default class MovieDetailsPage extends Component {
  state = { movie: {}, from: {}, isLoading: true };

  componentDidMount() {
    const { params } = this.props.match;

    getMovieDetails(params.movieId)
      .then((res) => this.setState({ movie: res }))
      .finally(this.setState({ isLoading: false }));
  }

  goBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push(`${routes.HOME}`);
  };

  render() {
    const { movie, isLoading, from } = this.state;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BrowserRouter>
              <MovieCard movie={movie} goBack={this.goBack} from={from} />
              <Route
                path={`${routes.MOVIE_DETAILS}${routes.MOVIE_CAST}`}
                component={Cast}
              />
              <Route
                path={`${routes.MOVIE_DETAILS}${routes.MOVIE_REVIEWS}`}
                component={Reviews}
              />
            </BrowserRouter>
          </>
        )}
      </>
    );
  }
}
