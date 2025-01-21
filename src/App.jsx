import React from 'react'
import Canvas from './Canvas'
import locate from './locate'

const App = () => {
  return (
    <>
      <div className='relative w-full min-h-screen'>
      {
        locate[0].map((item,index)=>(
          <Canvas details={item} key={index}/>
        ))
      }
    </div>
    </>
  )
}

export default App
