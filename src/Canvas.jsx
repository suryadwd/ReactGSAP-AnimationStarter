import React, { useRef, useEffect, useState } from "react";
import image from "./Canvaimage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Canvas = ({ details }) => {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const cavasRef = useRef(null);

  const [index, setIndex] = useState({ value: startIndex });

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      ease: "linear",
      repeat: -1,
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });
  });

  // setup so whenever site opens it will load the first image
  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = cavasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth+"px";
      canvas.style.height = canvas.offsetHeight+"px";
      ctx.scale(scale,scale)
      ctx.drawImage(img, 0, 0,canvas.offsetWidth,canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      ref={cavasRef}
      className="absolute"
      style={{
        width: `${size *1.1}px`,
        height: `${size *1.1}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    ></canvas>
  );
};

export default Canvas;
