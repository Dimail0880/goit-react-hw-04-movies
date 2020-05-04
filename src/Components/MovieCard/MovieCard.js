import React from "react";
import { Link } from "react-router-dom";
import {posterImgLink} from "../../helpers/getAPI"
const MovieCard = ({ data, goBack }) => {
  return (
    <>
      <button onClick={goBack}> Go back</button>
      {data.backdrop_path && <img
        src={`${posterImgLink}${data.backdrop_path }`}
        alt={data.title}
      />}
      

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

      <h5>Additional information</h5>
      <Link to={`/movies/${data.id}/cast`}>Cast</Link>
      <Link to={`/movies/${data.id}/reviews`}>Reviews</Link>
    </>
  );
};

export default MovieCard;
