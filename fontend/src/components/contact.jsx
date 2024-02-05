import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
// import { useNavigate } from 'react-router-dom';


const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [state, handleSubmit] = useForm("mwkgvkjw");

  if (state.succeeded) {
    alert('Thanks for getting in touch!');
  }
  
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" disabled={state.submitting}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                Liquid Neurons Pvt Ltd A003, Cynosure Whitespace, Koralur road, Thirumalashe, Kadugodi, Hosakote, Bangalore Rural - 560067
              </p>
              <p>
                Karnataka, India
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                +91 6360685293
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                support@liquidneurons.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/company/liquid-neurons-pvt-ltd/about/?viewAsMember=true">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
