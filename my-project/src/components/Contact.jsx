import React, { useState } from "react";
import emailjs from "emailjs-com";
import Nav from "./Navigation";
import Social from "./SocialHandles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xezr4dg",
        "template_vi08yxk",
        formData,
        "t_zPmq5JjO_Q2hUlN"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section className="bg-[url('src/images/backgrounds/contact-light-small.png')] md:bg-[url('src/images/backgrounds/contact-light-large.png')] bg-cover bg-center h-screen overflow-scroll p-10">
        <Nav />
        <div className=" mt-20">
          <h1 className="text-8xl">Contact.</h1>
          <h3 className="text-sm">
            Get in touch or massage me via email directly on{" "}
            <span className="font-extrabold">mktmakantamkt@gmail.com</span>
          </h3>
          <form className="mt-4  py-4 pb-24" onSubmit={handleSubmit}>
            <div
              className="flex flex-col space-y-2
            "
            >
              <label className="font-semibold text-lg">Name</label>
              <input
                className="p-4 bg-neutral-100/25  rounded-sm  focus:outline-none focus:bg-white w-full shadow-sm "
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label className="font-semibold text-lg">Email</label>
              <input
                className="p-4 bg-neutral-100/25 shadow-sm  focus:outline-none focus:bg-white rounded-sm w-full"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label className="font-semibold text-lg">Message</label>
              <textarea
                className="p-4 bg-neutral-100/25 shadow-sm  focus:outline-none focus:bg-white rounded-sm h-40 w-full"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className=" py-3 px-8 bg-neutral-800  text-white rounded"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>

        <Social />
      </section>
    </>
  );
};

export default Contact;
