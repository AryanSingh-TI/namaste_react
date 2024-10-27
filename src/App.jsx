import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function f()
{
    for(let i = 0;i<10;i++)
    {
        
        setTimeout( function()
        {
            console.log(i);
            
        },1000*i)
    }
    console.log("start")
}
f()
function App() {

  return (
   <>
   <h1>Hello</h1>
   
   </>
  )
}

export default App
