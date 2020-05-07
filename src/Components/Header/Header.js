import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { routes } from "../../helpers/route";

const Header = () => {
  return (
    <>
      <ul className={styles.navbar}>
        <li className={styles.navbarItem}>
          <NavLink
            exact
            to={`${routes.HOME}`}
            className="nav-link"
            activeClassName={styles.selected}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navbarItem}>
          <NavLink
            exact
            to={`${routes.MOVIES}`}
            className="nav-link"
            activeClassName={styles.selected}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
