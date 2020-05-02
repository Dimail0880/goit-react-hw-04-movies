import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { getMovieDetails } from "../helpers/getAPI";
import Cast from "../Cast/Cast";
import Reviews from "../Review/Review";
import shortId from "shortid";

const getIdFromProps = (props) => props.match.params.movieId;

export default class MovieDetailsPage extends Component {
  state = { data: {} };
  componentDidMount() {
    const id = getIdFromProps(this.props);
    getMovieDetails(id).then((res) => this.setState({ data: res.data }));
  }
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };
  render() {
    const props = this.state.data;
    return (
      <>
        <button onClick={this.goBack}> Go back</button>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.backdrop_path}`}
          alt={props.original_title}
        />
        <h3>
          {props.original_title} ({props.release_date})
        </h3>
        <p>User Score: {props.vote_average * 10}%</p>
        <h4>Overview</h4>
        <p>{props.overview}</p>
        <h4>Genres</h4>
        <ul>
          {props.genres &&
            props.genres.length > 0 &&
            props.genres.map((i) => <li key={shortId.generate()}>{i.name}</li>)}
        </ul>
        <h5>Additional information</h5>
        <Link to={`/movies/${props.id}/cast`}>Cast</Link>
        <Link to={`/movies/${props.id}/reviews`}>Reviews</Link>

        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </>
    );
  }
}
