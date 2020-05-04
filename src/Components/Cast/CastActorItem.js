import React from "react";
import {avatarImgLink} from "../../helpers/getAPI"
const CastActorItem = ({avatar, name, character, id}) => {
  return (
    <>
      
    <li id={id}>
      {avatar &&   <img
        src={`${avatarImgLink}${avatar}`}
        alt={name}
      ></img>}
    
      <p>{name}</p>
      <p>Character: {character} </p>
      </li>
    </>
  );
};

export default CastActorItem;
