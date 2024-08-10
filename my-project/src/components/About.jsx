import React from "react";
import Nav from "./Navigation";
import Social from "./SocialHandles";

export default function About() {
  return (
    <>
      <section className="bg-[url('src/images/backgrounds/about-light-large.png')] bg-cover bg-center h-screen p-14">
        <Nav />
        <div className="grid grid-cols-5 px-20 pt-20 pl-64 ">
          <div className=" pt-28 space-y-8 col-span-3">
            <h1 className="text-9xl">ABOUT</h1>
            <h2 className="text-3xl">I'm Makanta, A frontend developer</h2>
            <p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio illum ratione accusamus dolorem nihil vitae. Dolorem,
                voluptas quo amet fuga, earum maxime labore deserunt maiores
                natus facere vitae, similique corrupti!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis recusandae consequuntur, harum in culpa, sunt
                nostrum fugiat voluptatibus assumenda optio excepturi nemo
                dolorum quis autem impedit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Iste facilis suscipit temporibus
                consequuntur perferendis cumque obcaecati ratione rem, impedit
                libero debitis inventore provident voluptatum odit voluptate
                facere, saepe deserunt voluptatem.
              </p>
            </p>
          </div>
          <div
            className="
          w-96 justify-self-end pt-6 col-span-2"
          >
            <img src="src/images/my-profile.jpg" alt="" />
          </div>
        </div>
        <Social />
      </section>
    </>
  );
}
