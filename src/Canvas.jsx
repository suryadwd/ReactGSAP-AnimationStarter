import React, { useRef, useEffect } from 'react'
import image from './Canvaimage'
const Canvas = () => {

const cavasRef = useRef(null)

useEffect(()=>{
    const canvas = cavasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = image[0]
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img,0,0)
    }
},[])


  return (
    <canvas ref={cavasRef}  className='w-[18rem] h-[18rem] ' id='canvas'></canvas>
  )
}

export default Canvas
