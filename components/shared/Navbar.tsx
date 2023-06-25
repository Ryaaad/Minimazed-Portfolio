import { Open_Sans} from '@next/font/google'
import { Dispatch, SetStateAction, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import Footer from './Footer';
import Image from "next/image";
import me from "../../public/Images/shared/Rayan.jpg"


const poppins = Open_Sans({
  weight: '600',
})
interface props{
  setRoute: Dispatch<SetStateAction<string>>
}
const Navbar:React.FC<props> = ({setRoute}) => {
   const [MenuClicked,setMenuClicked]=useState(false);
    const [a,seta]=useState(true);
    let b=false,c=false,d=false,e=false
    const [Clicked, setclicked] = useState([a,b,c,d,e])
    
    return ( 
      <>
    <div className="hidden justify-between p-3 justify-items-center px-6 relative top-0 right-0 items-center w-full md:flex " >
     
       <h1 id='hovered' className= {` ${poppins.className} hover:cursor-pointer text-2xl leading-2 font-bold`}> Allali Ryad</h1>
       <ul className="flex items-center text-[15px]  text-[#333] ">
        <li  id='hovered' className={`${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${a && "bg-[#333] text-white  " } `}
         onClick={()=>{  seta(true);setclicked([false,false,false,false,false]); setRoute("Home")  }}
         >Home</li>
        <li  id='hovered' className={`${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100 relative
         z-10 hover:text-white  ${Clicked[1] && "bg-[#333] text-white  " } `}
         onClick={()=>{  b=!b; setclicked([false,b,false,false,false]); seta(false);setRoute("About")  }}
         >About</li>
        <li id='hovered'  className={` ${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-75 
        relative z-10 hover:text-white  ${Clicked[2] && " bg-[#333]  text-white  " }`}
        onClick={()=>{  c=!c; setclicked([false,false,c,false,false]);seta(false);setRoute("Portfolio")  }}
        >Projects</li>
        <li  id='hovered' className={` ${poppins.className} p-2 px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${Clicked[3] && " bg-[#333]  text-white" } `}
         onClick={()=>{  d=!d; setclicked([false,false,false,d,false]);seta(false);setRoute("Service") }}
         >Service</li>
        <li  id='hovered' className={` ${poppins.className} p-2  px-6 hover:cursor-pointer delay-500 duration-100
         relative z-10 hover:text-white  ${Clicked[4] && " bg-[#333]  text-white" }`}
         onClick={()=>{  e=!e; setclicked([false,false,false,false,e]);seta(false);setRoute("Contact") }}
         >Contact</li>
       </ul>
    </div>

    <div className="flex justify-between p-3 justify-items-center px-5 relative top-0 right-0 items-center w-full md:hidden " >
     
     <h1 className= {` ${poppins.className} hover:cursor-pointer text-2xl leading-2 font-bold`}> Allali Ryad</h1>
     { !MenuClicked && <RxHamburgerMenu className='text-3xl cursor-pointer ' onClick={()=>setMenuClicked(true)} ></RxHamburgerMenu>}
     { MenuClicked &&  <FiX className='text-3xl cursor-pointer z-20' onClick={()=>setMenuClicked(false)} ></FiX>}


  {MenuClicked &&   <div className=" absolute grid justify-items-end bottom-0 translate-y-[100%] z-10 right-0  h-[calc(100vh-56px)] bg-white text-[#333] py-[75px] px-3 w-[35%] sm:w-[30%] sm:px-4  ">
      <Image alt='me' src={me} className='h-[70px] w-[70px]  filter brightness-5 grayscale' ></Image>
      <ul className='text-end  flex flex-col gap-2 mt-3' >
    <li className={`cursor-pointer `}
         onClick={()=>{  seta(true);setclicked([false,false,false,false,false]); setRoute("Home")  }}>Home</li>

        <li className={`cursor-pointer`}  onClick={()=>{  b=!b; setclicked([false,b,false,false,false]); seta(false);setRoute("About")  }} >About</li>
        <li className={`cursor-pointer`}
        onClick={()=>{  c=!c; setclicked([false,false,c,false,false]);seta(false);setRoute("Portfolio")  }}
        >Projects</li>
        <li className={`cursor-pointer `}
         onClick={()=>{  d=!d; setclicked([false,false,false,d,false]);seta(false);setRoute("Service") }}
         >Service</li>
        <li className={`cursor-pointer`}
         onClick={()=>{  e=!e; setclicked([false,false,false,false,e]);seta(false);setRoute("Contact") }}
         >Contact</li>
      </ul>
    
         <div >
    <Footer></Footer>
         </div>
    </div>}
  </div>
      </>
        );
}
 
export default Navbar;