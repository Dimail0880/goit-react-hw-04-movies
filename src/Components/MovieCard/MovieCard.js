import React from "react";
import { Link } from "react-router-dom";
import {posterImgLink} from "../../helpers/getAPI"
import style from './MovieCard.module.css'

const MovieCard = ({ data, goBack }) => {
  return (
    <>
    
      <button className={style.btn} onClick={goBack}> Go back</button>
      <div className={style.container}>
      {data.backdrop_path && <img
      className={style.poster}
        src={`${posterImgLink}${data.backdrop_path }`}
        alt={data.title}
      />}
      
        <div className={style.details}>
      <h3>
        {data.title} ({data.release_date && data.release_date.slice(0, 4)})
      </h3>
      <p>User Score: {data.vote_average * 10}%</p>
      <h4>Overview</h4>
      <p>{data.overview}</p>
      <h4>Genres</h4>
      <ul>
        {data && 
        data.genres &&
                    data.genres.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
      </div>
      </div>
      <h5>Additional information</h5>
      <Link className={style.link} to={`/movies/${data.id}/cast`}>Cast</Link>
      <Link className={style.link} to={`/movies/${data.id}/reviews`}>Reviews</Link>
    </>
  );
};

export default MovieCard;
