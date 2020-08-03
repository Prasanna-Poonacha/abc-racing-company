import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import racing from "../assets/car/car-racing.gif";

export const Home = () => {
  return (
    <Fragment>
      <section id="welcome" class="grid">
        <div class="welcome-text">
          <h2>
            Racing <br /> Redefined
          </h2>
          <p class="leading">
            It is up to you whether you move fast or you stay last.
          </p>
          <Link to="/schedules">
            <a href="#!" class="button">
              Schedules
            </a>
          </Link>
        </div>
        <div class="welcome-img">
          <img src={racing} alt="racing"/>
        </div>
      </section>
    </Fragment>
  );
};
