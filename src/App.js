import React, { Component } from "react";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SearchBar from "./Components/SearchBar/SearchBar";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
// import Cast from "./Components/Cast/Cast";
// import Reviews from "./Components/Review/Review";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies" exact component={SearchBar} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
        </Switch>
      </>
    );
  }
}
