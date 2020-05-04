// import React from "react";
// import { Link } from "react-router-dom";

// const MoviesList = ({ queryList, from }) => {
//   console.log(from)

//   return (
//     <ul>
//       {queryList.map((item) => (
//         <li key={item.id}>
//           <Link
//             to={{
//               pathname: `/movies/${item.id}`,
//               state: { from: from },
//             }}
//           >
//             {item.original_title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MoviesList;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MoviesList extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.history);
  }

  render() {
    const { queryList, from } = this.props;
    return (
      <ul>
        {queryList.map((item) => (
          <li key={item.id}>
            <Link
              to={{
                pathname: `/movies/${item.id}`,
                state: { from: from },
              }}
            >
              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
