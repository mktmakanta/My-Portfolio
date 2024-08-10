import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function About() {
  return (
    <>
      <section className="bg-[url('src/images/backgrounds/about-light-large.png')] bg-cover bg-center h-screen">
        <Nav />
        <div>About</div>
        <Social />
      </section>
    </>
  );
}
