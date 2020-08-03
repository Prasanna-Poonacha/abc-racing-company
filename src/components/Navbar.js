import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Fragment>
      <nav class="site-nav grid">
        <h1><Link to="/">ABC Racing Company</Link></h1>
        <ul>
          <li>
            <Link to="/schedules">Schedules</Link>
          </li>
          <li>
            <Link to="/racers">Top 3</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
