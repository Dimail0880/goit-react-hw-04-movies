import React, { Component, Suspense, lazy } from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const SearchBar = lazy(() => import("./Components/SearchBar/SearchBar"));
const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage")
);

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/movies" exact component={SearchBar} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
