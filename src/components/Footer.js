import React from 'react'
import fb from '../assets/car/icon_fb.svg';
import tw from '../assets/car/icon_tw.svg';

export const Footer = () => {
  return (
    <footer>
        <div class="grid">
          <p class="copyright">Copyright 2020 ABC Racing Company</p>
          <ul class="social">
            <li>
              <a href="!#">
                <img src={fb} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="!#">
                <img src={tw} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
  )
}
