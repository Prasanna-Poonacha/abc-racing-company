import React, { Fragment } from 'react';
import carImage1 from '../assets/car/gal1.jpeg';
import carImage2 from '../assets/car/gal2.jpeg';
import carImage3 from '../assets/car/gal3.jpeg';
import carRace from '../assets/car/car.mp4';
import posterImage from '../assets/car/carx1900x1200-12.jpeg';

export const Gallery = () => {
  return (
    <Fragment>
      <section id="gallery">
        <h3>Gallery</h3>
        <ul class="grid">
          <li>
            <img src={carImage1} alt="comet" />
          </li>
          <li>
            <video
              muted
              loop
              preload="auto"
              poster={posterImage}
              controls
              autoplay
              height="100px"
              width="200px"
            >
              <source src={carRace} type="video/mp4"></source>
            </video>
          </li>
          <li>
            <img src={carImage3} alt="comet" />
          </li>
          <li>
            <video
              muted
              loop
              preload="auto"
              poster={posterImage}
              controls
              autoplay
              height="100px"
              width="200px"
            >
              <source src={carRace} type="video/mp4"></source>
            </video>
          </li>
          <li>
            <video
              muted
              loop
              preload="auto"
              poster={posterImage}
              controls
              autoplay
              height="100px"
              width="200px"
            >
              <source src={carRace} type="video/mp4"></source>
            </video>
          </li>
          <li>
            <img src={carImage2} alt="comet" />
          </li>
          <li>
            <img src={carImage3} alt="comet" />
          </li>
          <li>
            <video
              muted
              loop
              preload="auto"
              poster={posterImage}
              controls
              autoplay
              height="100px"
              width="200px"
            >
              <source src={carRace} type="video/mp4"></source>
            </video>
          </li>
          <li>
            <img src={carImage1} alt="comet" />
          </li>
          <li>
            <img src={carImage2} alt="comet" />
          </li>
          <li>
            <img src={carImage3} alt="comet" />
          </li>
          <li>
            <video
              muted
              loop
              preload="auto"
              poster={posterImage}
              controls
              autoplay
              height="100px"
              width="200px"
            >
              <source src={carRace} type="video/mp4"></source>
            </video>
          </li>
        </ul>
        <p class="leading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          fringilla lacus diam. Mauris fringilla consectetur nibh, sit amet
          tempus augue.
        </p>
      </section>
    </Fragment>
  );
};
