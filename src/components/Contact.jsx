import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold  text-blue-400">Get in Touch</h2>
        <p className="mt-4 text-gray-300 text-lg">
          I'd love to hear from you! Fill out the form below or email me at
          <span className=" text-blue-400  font-semibold"> agarwalkashish207@gmail.com</span>
        </p>

        <form
          action="https://getform.io/f/akkkmvza"
          method="POST"
          className="mt-8 bg-gray-800 p-8 rounded-lg shadow-xl space-y-6"
        >
          <div className="flex flex-col text-left">
            <label className="text-gray-300 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-2 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 text-blue-400  outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-gray-300 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 text-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="text-gray-300 font-semibold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 p-3 rounded-lg bg-gray-700 text-white focus:ring-2 text-blue-400  outline-none"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full  text-blue-400 hover:bg-blue-600 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
