import React from "react";
import {avatarImgLink} from "../../helpers/getAPI"
import style from "./Cast.module.css";

const CastActorItem = ({avatar, name, character, id}) => {
  return (
    <>
      
    <li id={id} className={style.cardItem}>
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
