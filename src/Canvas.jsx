import React, { useRef, useEffect, useState } from 'react'
import image from './Canvaimage'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Canvas = () => {

const cavasRef = useRef(null)

const [index,setIndex] = useState({value:0})

useGSAP( () => {

  gsap.to(index,{
    value:149,
    duration:3,
    ease:'linear',
    repeat:-1,
    onUpdate:()=>{
      setIndex({value:Math.round(index.value)})
    }
  })

}
)

// setup so whenever site opens it will load the first image
useEffect(()=>{
    const canvas = cavasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = image[index.value]
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0)
    }
},[index])


  return (
    <canvas ref={cavasRef}  className='w-[18rem] h-[18rem] ' id='canvas'></canvas>
  )
}

export default Canvas
