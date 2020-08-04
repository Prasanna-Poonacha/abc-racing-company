import React, {Fragment} from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Fragment>
      <nav class="site-nav grid">
        <h1><Link to="/abc-racing-company">ABC Racing Company</Link></h1>
        <ul>
          <li>
            <Link to="/abc-racing-company/schedules">Schedules</Link>
          </li>
          <li>
            <Link to="/abc-racing-company/racers">Top 3</Link>
          </li>
          <li>
            <Link to="/abc-racing-company/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/abc-racing-company/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/abc-racing-company/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
