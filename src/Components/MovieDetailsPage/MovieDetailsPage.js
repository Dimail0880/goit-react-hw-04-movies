import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { getMovieDetails } from "../../helpers/getAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Review/Review";
import Loader from "react-loader-spinner";
import MovieCard from "../MovieCard/MovieCard";

export default class MovieDetailsPage extends Component {
  state = { data: {}, from: {}, isLoading: true };

  componentDidMount() {
    const { params } = this.props.match;

    getMovieDetails(params.movieId)
      .then((res) => this.setState({ data: res }))
      .finally(this.setState({ isLoading: false }));
  }

  goBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push(state.from);
      return;
    }
    this.props.history.push("/");
  };
  
  render() {
    const { data, isLoading, from } = this.state;

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <BrowserRouter>
              <MovieCard data={data} goBack={this.goBack} from={from} />
              <Route path="/movies/:movieId/cast" component={Cast} />
              <Route path="/movies/:movieId/reviews" component={Reviews} />
            </BrowserRouter>
          </>
        )}
      </>
    );
  }
}
