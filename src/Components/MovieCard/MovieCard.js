import React from "react";
import { Link } from "react-router-dom";
import { posterImgLink } from "../../helpers/getAPI";
import style from "./MovieCard.module.css";
import { routes } from "../../helpers/route";

const MovieCard = ({ movie, goBack }) => {
  return (
    <>
      <button className={style.btn} onClick={goBack}>
        Go back
      </button>
      <div className={style.container}>
        {movie.backdrop_path && (
          <img
            className={style.poster}
            src={`${posterImgLink}${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}

        <div className={style.details}>
          <h3>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h3>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h4>Overview</h4>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <ul>
            {movie &&
              movie.genres &&
              movie.genres.map((el) => <li key={el.id}>{el.name}</li>)}
          </ul>
        </div>
      </div>
      <h5>Additional information</h5>
      <Link
        className={style.link}
        to={`${routes.MOVIES}/${movie.id}${routes.MOVIE_CAST}`}
      >
        Cast
      </Link>
      <Link
        className={style.link}
        to={`${routes.MOVIES}/${movie.id}${routes.MOVIE_REVIEWS}`}
      >
        Reviews
      </Link>
    </>
  );
};

export default MovieCard;
