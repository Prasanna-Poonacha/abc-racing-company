import React, {Fragment} from 'react'

export const SignUp = () => {
  return (
    <Fragment>
      <section id="contact" class="form-container">
        <h3>Sign Up</h3>
        <p class="leading">Lorem ipsum dolor sit amet, consectetur.</p>
        <form>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <input type="password" placeholder="CONFIRM PASSWORD" />
          <button class="button">Sign Up</button>
        </form>
      </section>
    </Fragment>
  )
}
