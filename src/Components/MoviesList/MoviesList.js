import React from "react";
import { Link } from "react-router-dom";

const MoviesList = ({ queryList }) => {
  return (
    <ul>
      {queryList.map((item) => (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              // state: {  from: this.props.location },
            }}
          >
            {item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
