import React, { Component } from "react";
import { getMovieByQuery } from "../../helpers/getAPI";
import queryString from "query-string";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";
import { routes } from "../../helpers/route";

export default class SearchBar extends Component {
  state = {
    movies: [],
    value: "",
    from: "",
  };
  componentDidMount() {
    const query = queryString.parse(this.props.location.search).query;

    if (query) {
      this.setState({ value: query });
      this.getMoviesList(query);
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    if (!this.state.value) {
      return;
    }
    this.getMoviesList(this.state.value);

    this.props.history.replace({
      pathname: this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
    this.setState({ from: this.state.value });
    this.setState({ value: "" });
  };

  getMoviesList = (data) => {
    getMovieByQuery(data).then((res) => this.setState({ movies: res }));
  };

  render() {
    const { value, movies } = this.state;
    return (
      <>
        <form className={style.form} onSubmit={this.handelSubmit}>
          <input
            className={style.input}
            type="text"
            value={value}
            name="value"
            placeholder="Enter search"
            onChange={this.handleChange}
          />
          <button className={style.button} type="submit">
            Search..
          </button>
        </form>
        <ul>
          {movies.map((el) => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `${routes.MOVIES}/${el.id}`,
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
