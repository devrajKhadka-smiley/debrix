import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>Get in touch with us. We'd love to hear from you!</p>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 