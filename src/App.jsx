import React, { useState } from "react";
import Canvas from "./Canvas";
import locate from "./locate";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import gsap from "gsap";

const App = () => {
  const [bgColor, setBgColor] = useState("#000");
  const [textColor, setTextColor] = useState("#fff");

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  const handleClick = () => {
    const newColor = bgColor === "#000" ? "#fd2c2a" : "#000";
    setBgColor(newColor);
    const newTextColor = textColor === "#fff" ? "#000" : "#fff";
    setTextColor(newTextColor);

    gsap.to(document.body, {
      backgroundColor: newColor,
      duration: 1.5,
      ease: "power2.inOut",
    });

    gsap.to("body, div, h1, h3, p, nav, ul, li", {
      color: newTextColor,
      duration: 1.5,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <div className="relative w-full min-h-screen" onClick={handleClick}>
        {locate[0].map((item, index) => (
          <Canvas details={item} key={index} />
        ))}

        <div className="w-full h-screen text-white">
          <nav className="fixed top-0 left-0 w-full text-white p-6 z-50">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-xl font-bold">SURYA--SURAJ</div>
              <ul className="flex gap-8">
                {["Home", "About", "Projects", "Contact"].map((link, index) => (
                  <li
                    key={index}
                    className="hover:text-red-500 transition-colors cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="w-full h-screen py-[8%]">
            <div className="textcontainer w-full px-[20%]">
              <div className="text w-[50%]">
                <h3 className="text-4xl leading-[1.1]">
                  Passionate Developer Crafting Immersive Digital Experiences
                </h3>
                <p className="w-[80%] mt-8 text-xs">
                  Hello! I’m a full-stack developer with expertise in a range of
                  modern technologies and programming languages. From building
                  interactive user interfaces to developing scalable backends ,
                  I thrive in creating solutions that are both innovative and
                  functional.
                </p>
                <p className="text-md mt-10">scroll</p>
              </div>
            </div>

            <div className="w-full absolute bottom-3 left-0">
              <h1 className="text-[14rem] font-normal tracking-tight leading-none">
                Being a learner
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full z-1 relative h-screen text-white mt-32 px-10">
        {locate[7].map((canvasdets, index) => (
          <Canvas details={canvasdets} key={index} />
        ))}

        <h1 className="text-8xl tracking-tighter">about the brand</h1>
        <p className="text-3xl leading-[1.8] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>

        <img
          className="w-[50%] mt-6 ml-[20%] h-[100%] object-contain"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>
    </>
  );
};

export default App;
