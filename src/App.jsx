import React from "react";
import Canvas from "./Canvas";
import locate from "./locate";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });
  return (
    <>
      <div className="relative w-full min-h-screen">
        {locate[0].map((item, index) => (
          <Canvas details={item} key={index} />
        ))}

        <div className="w-full h-screen  text-white ">
          <nav className="fixed top-0 left-0 w-full     text-white p-6 z-50">
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
            <div className="textcontainer  w-full px-[20%]">
              <div className="text w-[50%]">
                <h3 className="text-3xl leading-[1]">
                  At Thirtysixstudio, we build immersive digital experiences for
                  brands with a purpose.
                </h3>
                <p className=" w-[80%] mt-6 text-xs ">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
