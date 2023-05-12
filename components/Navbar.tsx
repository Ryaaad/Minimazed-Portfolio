import { Open_Sans} from '@next/font/google'
import { useState } from 'react'

const poppins = Open_Sans({
  weight: '600',
})
const Navbar = () => {
    const [a,seta]=useState(true)
    let b=false,c=false,d=false,e=false
    let f=false
    const [Clicked, setclicked] = useState([a,b,c,d,e,f])
    
    return ( 
    <div className="flex justify-between p-3 justify-items-center px-12 relative top-0 right-0 items-center w-full " >
     
       <h1 id='hovered' className= {` ${poppins.className} hover:cursor-pointer text-2xl leading-2 font-bold`}> Allali Ryad</h1>
       <ul className="flex items-center text-[15px]  text-[#333] ">
        <li  id='hovered' className={`${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${a && "bg-[#333] text-white  " } `}
         onClick={()=>{  seta(prev=>prev=!prev);setclicked([false,false,false,false,false,false]); }}
         >Home</li>
        <li  id='hovered' className={`${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100 relative
         z-10 hover:text-white  ${Clicked[1] && "bg-[#333] text-white  " } `}
         onClick={()=>{  b=!b; setclicked([false,b,false,false,false,false]); seta(false) }}
         >About</li>
        <li id='hovered'  className={` ${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-75 
        relative z-10 hover:text-white  ${Clicked[2] && " bg-[#333]  text-white  " }`}
        onClick={()=>{  c=!c; setclicked([false,false,c,false,false,false]);seta(false) }}
        >Portfolio</li>
        <li  id='hovered' className={` ${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${Clicked[3] && " bg-[#333]  text-white" } `}
         onClick={()=>{  d=!d; setclicked([false,false,false,d,false,false]);seta(false) }}
         >Service</li>
        <li  id='hovered' className={` ${poppins.className} p-2  px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${Clicked[4] && " bg-[#333]  text-white" }`}
         onClick={()=>{  e=!e; setclicked([false,false,false,false,e,false]);seta(false) }}
         >New</li>
        <li  id='hovered' className={` ${poppins.className} p-2  px-6 hover:cursor-pointer delay-500 duration-100 
        relative z-10 hover:text-white  ${Clicked[5] && " bg-[#333]  text-white  " } `} 
        onClick={()=>{  f=!f; setclicked([false,false,false,false,false,f]);seta(false) }}
        >Contact</li>
       </ul>
    </div>
        );
}
 
export default Navbar;