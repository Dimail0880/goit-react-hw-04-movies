import React, { Component } from "react";
import { getMovieByQuery } from "../helpers/getAPI";
import MoviesList from "../MoviesList/MoviesList";
import queryString from "query-string";

export default class SearchBar extends Component {
  state = {
    queryList: [],
    value: "",
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

    this.getMoviesList(this.state.value);

    this.props.history.push({
      ...this.props.location.pathname,
      search: `query=${this.state.value}`,
    });
    this.setState({ value: '' });
  };

  getMoviesList = (data) => {
    getMovieByQuery(data).then((res) =>
      this.setState({ queryList: res })
    );
  };

  render() {
    const { value, queryList } = this.state;
    return (
      <>
        <form onSubmit={this.handelSubmit}>
          <input
            type="text"
            value={value}
            name="value"
            placeholder="Enter search"
            onChange={this.handleChange}
          />
          <button type="submit">Search..</button>
        </form>
        {queryList.length > 0 && <MoviesList queryList={queryList} />}
      </>
    );
  }
}
