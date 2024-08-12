import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function About() {
  return (
    <>
      <section className="bg-[url('src/images/backgrounds/about-light-small.png')] md:bg-[url('src/images/backgrounds/about-light-large.png')]  bg-cover bg-center h-screen p-8 md:p-12 lg:p-20 overflow-scroll ">
        <Nav />
        <div className=" mt-20 pb-20 md:ml-44 md:mr-12 md:mt-44 lg:mt-24 lg:grid lg:grid-cols-5 gap-5  ">
          <div className=" space-y-4 col-span-3 lg:pt-24">
            <h1 className="text-8xl md:text-9xl">About.</h1>
            <h2 className="text-3xl md:text-4xl">
              I'm Makanta, A frontend developer
            </h2>
            <div className="text-justify md:text-lg overflow-scroll">
              <p>
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the
                privilege of building software for an advertising agency, a
                start-up, a huge corporation, and a digital product studio.
              </p>
              <p>
                My main focus these days is building accessible user interfaces
                for our customers at Klaviyo. I most enjoy building software in
                the sweet spot where design and engineering meet — things that
                look good but are also built well under the hood. In my free
                time, I've also released an online video course that covers
                everything you need to know to build a web app with the Spotify
                API.
              </p>
              <p>
                When I’m not at the computer, I’m usually rock climbing,
                reading, hanging out with my wife and two cats, or running
                around Hyrule searching for Korok seeds K o r o k s e e d s .
              </p>
            </div>
          </div>
          <div
            className="
          w-72 md:w-96 mt-4 col-span-2"
          >
            <img src="src/images/my-profile.jpg" alt="" />
          </div>
        </div>
        <Social />
      </section>
    </>
  );
}
