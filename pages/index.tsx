import Head from 'next/head'
import { useState,useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import Image from "next/image";
import Landing from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Service from '../components/services';
import Project from '../components/Projects';
import me from "../public/Images/shared/Rayan.jpg"
export default function Home() {
  const [Hovered, setHovered] = useState(false)
  const [Route, setRoute] = useState("Home")
  useEffect(() => {
  
 const hover=document.querySelectorAll('#hovered')

 for (let index = 0; index <14 ;index++) {
   hover[index]?.addEventListener("mouseover",()=>{
    setHovered(prev=>prev=true)
   });
   hover[index]?.addEventListener("mouseout",()=>{
    setHovered(prev=>prev=false)
   })
 }
 
  }, [Route])

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
<div  id='Mouse' className={` hidden w-1 h-1 p-3 absolute rounded-full border-2 border-solid border-[#33333389] pointer-events-none
      translate-x-[-50%] translate-y-[-50%] bg-[transparent] ${Hovered && "border-[transparent] "} md:block `}>
 <div   id='Mouse' 
 className={` hidden absolute bg-black rounded-full w-[6px] h-[6px] translate-x-[-50%] translate-y-[-50%] 
 ${Hovered && "h-[70px] bg-[#3333338e] w-[70px] "}  duration-500 pointer-events-none md:block `}  > </div>
</div>
      <Navbar setRoute={setRoute} ></Navbar>
      <div className="h-[510px] flex w-full mx-auto md:w-[95%] " >
        <Image src={me} alt="me"  className='h-[510px] w-[380px] hidden lg:block lg:w-[400px] filter brightness-5 grayscale ' ></Image>
        <div className={`bg-[#f6fbff] w-full h-[calc(100vh-56px)] md:h-[510px] lg:w-[calc(100%-400px)] ${Route!="Home" && "overflow-y-scroll custom-scrollbar" } `} >
            {Route=="Home" && <Landing  setRoute={setRoute} ></Landing> }
            {Route=="About" && <About></About> }
            {Route=="Contact" && <Contact></Contact> }
            {Route=="Service" && <Service></Service> }
            {Route=="Portfolio" && <Project></Project> }
            
        </div>
       </div>
       <div  className='hidden md:block' >
      <Footer></Footer>
       </div>
    </div>
  )
}
//