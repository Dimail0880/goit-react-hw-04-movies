import React from "react";

const CastActorItem = ({actor}) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w138_and_h175_face/${actor.profile_path}`}
        alt={actor.name}
      ></img>
      <p>{actor.name}</p>
      <p>Character: {actor.character} </p>
    </>
  );
};

export default CastActorItem;
