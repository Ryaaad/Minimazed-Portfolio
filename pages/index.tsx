import Head from 'next/head'
import Landing from './CMP/Landing'
import { useState,useEffect } from 'react'
import { FiDribbble } from "react-icons/fi";
import Navbar from './CMP/Navbar'
import { ImFacebook } from "react-icons/im";
import { FaDiscord } from "react-icons/Fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  const [Hovered, setHovered] = useState(false)
  useEffect(() => {
  
 const hover=document.querySelectorAll('#hovered')

 for (let index = 0; index <15 ;index++) {
   hover[index]?.addEventListener("mouseover",()=>{
    setHovered(prev=>prev=true)
   });
   hover[index]?.addEventListener("mouseout",()=>{
    setHovered(prev=>prev=false)
   })
 }
 
  }, [])
  return (
    <div  className='h-[100vh] overflow-hidden '  onMouseMove={(e)=>{ 
      const cursor=document.getElementById("Mouse")
      const x=e.clientX
      const y=e.clientY
      if(cursor != null)
     { cursor.style.left=x+"px";
     cursor.style.top=y+"px";
   }
     }} >
      <Head>
        <title>Ryad Allali</title>
        <meta name="description" content=" Ryad Allali Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
<div  id='Mouse' className={` w-1 h-1 p-3 absolute rounded-full border-2 border-solid border-[#33333389] 
      translate-x-[-50%] translate-y-[-50%] bg-[transparent] ${Hovered && "border-[transparent] "} `}>
 <div   id='Mouse' 
 className={`absolute bg-black  rounded-full w-[6px] h-[6px] translate-x-[-50%] translate-y-[-50%] 
 ${Hovered && "h-[75px] bg-[#3333338e] w-[75px] "}  duration-500 `}  > </div>
      </div>
      <Navbar ></Navbar>
      <Landing></Landing>
      <div className='flex justify-between w-[92%] mx-auto mt-4 '>
        <h1  className="font-semibold" >Copyright  &copy; 2022</h1>
        <div className='flex gap-2 text-lg'>
        <ImFacebook   id='hovered'  ></ImFacebook>
        <FiDribbble  id='hovered' ></FiDribbble>
      <FaDiscord id='hovered' ></FaDiscord>
      <BsTwitter id='hovered' ></BsTwitter>
      <AiFillInstagram></AiFillInstagram>
        </div>
      
      </div>
     
    </div>
  )
}
