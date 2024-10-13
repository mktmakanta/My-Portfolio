import React, { useState } from "react";
import emailjs from "emailjs-com";
import Nav from "./Navigation";
import Social from "./SocialHandles";
import Modal from "./Modal";

// KEYS
// const serviceId = process.env.REACT_APP_SERVICE_ID;
// const templateId = process.env.REACT_APP_TEMPLATE_ID;
// const userId = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await emailjs.send(
        "service_xezr4dg",
        "template_vi08yxk",
        formData,
        "t_zPmq5JjO_Q2hUlN"
      );
      console.log("SUCCESS!", response.status, response.text);
      setSuccessMessage("Message sent successfully!");
      setShowModal(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("FAILED...", err);
      setErrorMessage("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="bg-[url('/images/backgrounds/contact-light-small.png')] dark:bg-[url('/images/backgrounds/contact-dark-small.png')] md:bg-[url('/images/backgrounds/contact-light-large.png')] dark:md:bg-[url('/images/backgrounds/contact-dark-large.png')] bg-cover bg-center h-screen overflow-scroll p-10 md:p-14 lg:p-20">
        <Nav />
        <div className="max-w-7xl mt-20 md:mt-40 lg:mt-24 md:mr-12 md:ml-44 space-y-2 dark:text-white font-montserrat">
          {/* Success and Error Messages */}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {showModal && (
            <Modal
              message="Email sent successfully!"
              onClose={handleCloseModal}
            />
          )}

          <h1 className="text-6xl font-inter font-semibold">CONTACT.</h1>
          <h3 className="text-sm md:text-lg md:mt-4">
            Get in touch or message me via email directly on{" "}
            <span className="font-extrabold">mktmakantamkt@gmail.com</span>
          </h3>

          <form
            className="mt-4 md:mt-12 lg:mt-4 py-4 pb-24"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-2">
              <label className="font-semibold text-lg md:text-xl">Name</label>
              <input
                className="p-4 bg-neutral-100/25 rounded-sm focus:outline-none focus:ring-1 focus:ring-violet-400 focus:bg-white w-full lg:w-5/6 shadow-sm"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label className="font-semibold text-lg md:text-xl">Email</label>
              <input
                className="p-4 bg-neutral-100/25 shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-400 focus:bg-white rounded-sm w-full lg:w-5/6"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-4 flex flex-col space-y-2">
              <label className="font-semibold text-lg md:text-xl">
                Message
              </label>
              <textarea
                className="p-4 bg-neutral-100/25 dark:text-black shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-400 focus:bg-white rounded-sm h-40 md:h-48 w-full lg:w-5/6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className="py-3 px-8 lg:px-10 lg:py-4 lg:text-2xl bg-neutral-800 dark:bg-white dark:text-black hover:text-violet-500 dark:hover:text-violet-500 text-white rounded font-bold md:font-semibold md:text-lg"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <Social />
      </section>
    </>
  );
};

export default Contact;
