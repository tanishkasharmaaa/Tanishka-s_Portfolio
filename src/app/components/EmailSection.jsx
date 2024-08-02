"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(null);
    setEmailSubmitted(false);

    emailjs
      .sendForm('service_i7roh6o', 'template_bat503p', form.current, {
        publicKey: 'G3NLy9bxqQ72L3z_z',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(error.text || "Something went wrong.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Contact Us
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to drop us a message, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="user_name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="from_email"
                type="text"
                id="user_name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="user_email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your Email
              </label>
              <input
                name="user_email"
                type="email"
                id="user_email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
