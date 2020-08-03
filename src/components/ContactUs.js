import React, {Fragment}from 'react';

export const ContactUs = () => {
  return (
    <Fragment>
      <section id="contact" class="form-container">
        <h3>Get In Touch</h3>
        <p class="leading">Please submit your details</p>
        <form>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <textarea placeholder="YOUR MESSAGE"></textarea>
          <button class="button">Submit</button>
        </form>
      </section>
    </Fragment>
  );
};
