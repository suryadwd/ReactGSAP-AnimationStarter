import React from 'react'
import Canvas from './Canvas'
import locate from './locate'
import LocomotiveScroll from 'locomotive-scroll'
import { useEffect } from 'react'


const App = () => {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll()
  })
  return (
    <>
      <div className='relative w-full min-h-screen'>
      {
        locate[0].map((item,index)=>(
          <Canvas details={item} key={index}/>
        ))
      }
    </div>
      <div className='relative w-full min-h-screen'>
      {
        locate[1].map((item,index)=>(
          <Canvas details={item} key={index}/>
        ))
      }
    </div>
    </>
  )
}

export default App
