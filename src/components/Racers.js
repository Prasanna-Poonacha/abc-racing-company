import React, {Fragment} from 'react'
import driver1 from '../assets/car/D1.png';
import driver2 from '../assets/car/D2.png';
import driver3 from '../assets/car/D3.png';

export const Racers = () => {
  return (
    <Fragment>
      <section id="drivers">
        <h3>Drivers 2020</h3>
        <div class="projects grid">
          <a href="https://www.formula1.com/en/drivers/lewis-hamilton.html" target="_blank" rel="noopener noreferrer">
            <img src={driver1} alt="space race" />
            <h4>LEWIS HAMILTON</h4>
          </a>
          <a href="https://www.formula1.com/en/drivers/valtteri-bottas.html" target="_blank" rel="noopener noreferrer">
            <img src={driver2} alt="planet boy" />
            <h4>VALTERRI BOTTAS</h4>
          </a>
          <a href="https://www.formula1.com/en/drivers/max-verstappen.html" target="_blank" rel="noopener noreferrer">
            <img src={driver3} alt="captain cosmo" />
            <h4>MAX VERSTAPPEN</h4>
          </a>
        </div>
      </section>
    </Fragment>
  )
}
