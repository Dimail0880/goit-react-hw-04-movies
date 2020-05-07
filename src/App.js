import React, { Component, Suspense, lazy } from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Loader from "react-loader-spinner";
import { routes } from "./helpers/route";

const HomePage = lazy(() => import("./Containers/HomePage/HomePage"));
const SearchBar = lazy(() => import("./Components/SearchBar/SearchBar"));
const MovieDetailsPage = lazy(() =>
  import("./Containers/MovieDetailsPage/MovieDetailsPage")
);

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={routes.HOME} exact component={HomePage} />
            <Route path={routes.MOVIES} exact component={SearchBar} />
            <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
