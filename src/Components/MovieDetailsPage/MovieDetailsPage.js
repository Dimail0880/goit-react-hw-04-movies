import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { getMovieDetails } from "../helpers/getAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Review/Review";
import shortId from "shortid";

export default class MovieDetailsPage extends Component {
  state = { data: {},
prevLocation: {} };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    getMovieDetails(movieId).then((res) => this.setState({ data: res.data }));
    // this.setState({prevLocation: this.props.history })
  }
  goBack = () => {
    const { history, location } = this.props;
		// if (location.state) {
		// 	return history.push(location.state.from);
		// }
		history.push("/");
  };
  render() {
        // console.log(this.state.location.state) 

    const { data } = this.state;
    return (
      <>
        <button onClick={this.goBack}> Go back</button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
          alt={data.original_title}
        />
        <h3>
          {data.original_title} ({data.release_date})
        </h3>
        <p>User Score: {data.vote_average * 10}%</p>
        <h4>Overview</h4>
        <p>{data.overview}</p>
        <h4>Genres</h4>
        <ul>
          {data.genres &&
            data.genres.length > 0 &&
            data.genres.map((el) => <li key={shortId.generate()}>{el.name}</li>)}
        </ul>
        <h5>Additional information</h5>
        <Link to={`/movies/${data.id}/cast`}>Cast</Link>
        <Link to={`/movies/${data.id}/reviews`}>Reviews</Link>

        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </>
    );
  }
}
