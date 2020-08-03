import React, {Fragment} from 'react'
import schedule1 from '../assets/car/British_Grand_Prix.png';
import schedule2 from '../assets/car/70th_Anniversary_Grand_Prix.png';
import schedule3 from '../assets/car/Spanish_Grand_Prix.png';
import schedule4 from '../assets/car/Belgian_Grand_Prix.png';

export const Schedules = () => {
  return (
    <Fragment>
      <section id="gallery">
        <h3>2020 ABC RACING CHAMPIONSHIP™ RACE CALENDAR</h3>
        <ul class="grid">
          <li>
            <h4>Previous</h4>
            <img src={schedule1} alt="comet" />
            <h4>FORMULA 1 PIRELLI BRITISH GRAND PRIX 2020</h4>
            <h5>July31-August 02</h5>
            <a href="https://www.formula1.com/content/fom-website/en/racing/2020/Great_Britain.html" target="_blank" rel="noopener noreferrer">More...</a>
          </li>
          <li>
            <h4>Next</h4>
            <img src={schedule2} alt="comet" />
            <h4>EMIRATES FORMULA 1 70TH ANNIVERSARY GRAND PRIX 2020</h4>
            <h5>August 07-09</h5>
            <a href="https://www.formula1.com/content/fom-website/en/racing/2020/70th_Anniversary.html" target="_blank" rel="noopener noreferrer">More...</a>
          </li>
          <li>
            <h4>Upcoming</h4>
            <img src={schedule3} alt="comet" />
            <h4>FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2020</h4>
            <h5>August 14-16</h5>
            <a href="https://www.formula1.com/content/fom-website/en/racing/2020/Spain.html" target="_blank" rel="noopener noreferrer">More...</a>
          </li>
          <li>
            <h4>Upcoming</h4>
            <img src={schedule4} alt="comet" />
            <h4>FORMULA 1 ROLEX BELGIAN GRAND PRIX 2020</h4>
            <h5>August 28-30</h5>
            <a href="https://www.formula1.com/content/fom-website/en/racing/2020/Belgium.html" target="_blank" rel="noopener noreferrer">More...</a>
          </li>
        </ul>
        <p class="leading">
          Stability is the name of the game for the 2020 season, with eight of the 10 Formula 1 teams fielding unaltered line-ups in their bid for Grand Prix glory. 
        </p>
      </section>
    </Fragment>
  )
}
