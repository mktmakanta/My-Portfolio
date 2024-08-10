import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function Contact() {
  return (
    <>
      <section className="bg-[url('src/images/backgrounds/contact-light-large.png')] bg-cover bg-center h-screen p-14">
        <Nav />
        <div>Contacts</div>
        <Social />
      </section>
    </>
  );
}
