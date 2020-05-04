import React, { Component } from "react";
import { castRequest } from "../../helpers/getAPI";
import CastActorItem from "./CastActorItem";
import Loader from "react-loader-spinner";
import style from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    actors: [],
    isLoading: true,
  };
  componentDidMount() {
    const movieID = this.props.match.params.movieId;
    castRequest(movieID)
      .then((res) => this.setState({ actors: res }))
      .finally(this.setState({ isLoading: false }));
  }

  render() {
    const { actors, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <ul className={style.container}>
            {actors.map(({ profile_path, name, character, id }) => (
              <CastActorItem
                key={id}
                avatar={profile_path}
                name={name}
                character={character}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
