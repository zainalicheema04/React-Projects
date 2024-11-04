import React,{useState,useCallback,useEffect, useRef} from 'react'

function PasswordGenerator() {
    const [lenght ,setLenght]=useState(8)
    const [number ,setNumber]=useState(false)
    const [character ,setCharacter]=useState(false)
    const [password,setPasssword]=useState("")

    const passwordRef=useRef(null)

    const PG = useCallback(()=>{
        let pass="";
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz"
        if(number) str +="0123456789"
        if(character) str +="!@#$%^&*()"
        for(let i=0;i<lenght;i++){
            let char = Math.floor(Math.random()*str.length +1)
            pass += str.charAt(char)
        }

        setPasssword(pass)

    },[lenght,character,number,setPasssword])

    // copyPassword funcation
    const copyPassword=useCallback(()=>{
        passwordRef.current.select()
        window.navigator.clipboard.writeText(password)
    })

    useEffect(()=>{
        PG()
    },[lenght,character,number,PG])

  return (
    // Outer Body Div  
    <div id='Main' className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-slate-600'>
        {/* Password Generator Heading */}
        <h1 className='text-white text-center text-3xl py-5 overline italic'>Password Generator</h1>
        
        {/* Password Generator Section */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>


            <input
            className='outline-none w-full py-1 px-3'
             type="text"
              placeholder='Password'
               value={password}
                readOnly
                ref={passwordRef}
                />



                <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

            {/* Lenght Control section start */}
        <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>


            <input 
            type="range"
            className='cursor-pointer' 
            min={8} 
            max={100} 
            value={lenght}
            onChange={(e)=>{setLenght(e.target.value)}}
            />

            
            <label className='italic text-white'>Lenght : {lenght}</label>
            </div>

            {/* Number CheckBox Section start */}
            <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={number}
                id='numberInput'
                onChange={()=>{
                    setNumber((prev)=>!prev);
                }}
                 />
                 <label className='italic text-white'>Number</label>
            </div>

                 {/* Special Character CheckBox Section start */}
            <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={character}
                id='characterInput'
                onChange={()=>{
                    setCharacter((prev)=>!prev);
                }}
                 />
                 <label className='italic text-white'>Special-Word</label>
            </div>
        </div>
    </div>
  )
}

export default PasswordGenerator
