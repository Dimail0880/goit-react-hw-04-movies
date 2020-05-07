import React from "react";
import { avatarImgLink } from "../../helpers/getAPI";
import style from "./Cast.module.css";

const CastActorItem = ({ avatar, name, character }) => {
  return (
    <>
      <li className={style.cardItem}>
        {avatar ? (
          <img src={`${avatarImgLink}${avatar}`} alt={name} />
        ) : (
          <img
            width={138}
            src="https://recyclingbalers.s3.amazonaws.com/image/No%20Image.jpg"
            alt="img not found"
          />
        )}
        <p>{name}</p>
        <p>Character: {character} </p>
      </li>
    </>
  );
};

export default CastActorItem;
