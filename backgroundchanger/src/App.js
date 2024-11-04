import React,{useState} from 'react'

function App() {
  const[color,setColor]=useState("white");
  return (
    <>
<div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
     {/* Footer Outer Div */}
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'></div>
    {/* Footer Inner Div */}
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    {/* Settelment of Buttons  */}
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-2xl px-3 py-2 '> 
<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"red"}}
onClick={()=>{setColor("red")}} >Red</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"blue"}}
onClick={()=>{setColor("blue")}} >Blue</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"green"}}
onClick={()=>{setColor("green")}} >Green</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"yellow"}}
onClick={()=>{setColor("yellow")}} >Yellow</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"olive"}}
onClick={()=>{setColor("olive")}} >Olive</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"grey"}}
onClick={()=>{setColor("grey")}} >Grey</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"black"}}
onClick={()=>{setColor("black")}} >Black</button>

<button className='outline-none px-4 py-1 rounded-2xl text-white shadow-sm'style={{backgroundColor:"purple"}}
onClick={()=>{setColor("purple")}} >Purple</button>

<button className='outline-none px-4 py-1 rounded-2xl shadow-sm'style={{backgroundColor:"white"}}
onClick={()=>{setColor("white")}} >White</button>

</div> 
</div>
</div> 
    </>
  )
}

export default App
