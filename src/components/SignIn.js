import React, {Fragment} from 'react'
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <Fragment>
        <section id="contact" class="form-container">
          <h3>Sign In</h3>
          <p class="leading">Lorem ipsum dolor sit amet, consectetur.</p>
          <form>
            <input type="text" placeholder="NAME" />
            <input type="email" placeholder="EMAIL" />
            <button class="button">Sign In</button> &nbsp;&nbsp;
            <Link to="/abc-racing-company/signup"><button class="button">Register with Us</button></Link>
          </form>
        </section>
    </Fragment>
  )
}
