import { IoLocationSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import Title from "../shared/Title";
import Image from "next/image";
import Mclogo from "../../public/Images/About/MCLOGO.png"
import GdscLogo from "../../public/Images/About/Gdsc.png"
import GDGLogo from "../../public/Images/About/GDG.jpeg"


const About = () => {
    return ( 
        <div  className="py-[95px] px-[20px] text-[#7d7789] " >
          <Title title="About Me" />
        <div className="flex justify-between items-start pr-2 mt-8  ">
        <p   className=" w-[45%] font-[15px] "  >  Hello ! i'm  <span className="font-bold"> Allali Ryad </span>a passionate and dedicated Fullstack web developer with 2 years of professional experience. 
        <br />
        <br />
        I am committed to delivering high-quality results and transforming your ideas into reality.
        <br />
  Let's collaborate and bring your vision to life !</p>
        <div  className=" w-[45%] h-[170px] flex flex-col justify-between ">
          <div  className="flex gap-10 items-center " >
          <span className="font-bold ">  Name: </span> Allali Ryad
          </div>
          <div  className="flex gap-10 items-center" >
          <span className="font-bold "> Degree: </span> Master of Science
          </div>
          <div  className="flex gap-10 items-center" >
          <span className="font-bold "> Mail: </span>  ryadallali0@gmail.com
          </div>
          <div className="flex gap-10 items-center" >
          <span className="font-bold "> Phone: </span> 05 42 38 54 21 85
          </div>

        </div>
        </div>

        <div  className=" flex items-start justify-between mt-20 " >
        <div className="w-[40%]" >
        <Title title="SERVICES" />
        <div className="mt-7">
        <div className="mt-7">
     <div className="flex flex-col gap-4">
     <div className="flex items-center   ">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 1</span>
  </div>
  <div className="flex items-center">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 2</span>
  </div>
  <div className="flex items-center">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 3</span>
  </div>
     </div>
        </div>
        </div>
        </div>
        <div className="w-[50%]" >
        <Title title="INTERESTS" />
        <div className="mt-7">
     <div className="flex flex-col gap-4">
     <div className="flex items-center   ">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 1</span>
  </div>
  <div className="flex items-center">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 2</span>
  </div>
  <div className="flex items-center">
    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
    <span>Item 3</span>
  </div>
     </div>


        </div>
        </div>
        </div>


        <div  className=" flex items-start justify-between mt-20 " >
        <div className="w-[40%]" >
        <Title title="PROGRAMMING" />
        <div className="mt-7">
        <div className="mt-7">
     <div className="flex flex-col gap-4">
     <div className="flex items-center   ">
   <div className="w-full">
    <div className="flex w-[75%] justify-between">
    <h1>React</h1>
    <h1>75%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[75%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
  </div>
  <div className="w-full">
    <div className="flex w-[75%] justify-between">
    <h1>React</h1>
    <h1>75%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[75%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
   <div className="w-full">
    <div className="flex w-[85%] justify-between">
    <h1>Nextjs</h1>
    <h1>85%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[85%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
     </div>
        </div>
        </div>
        </div>
        <div className="w-[50%]" >
        <Title title="LANGUAGE" />
        <div className="mt-7">
     <div className="flex flex-col gap-4">
     <div className="w-full">
    <div className="flex w-[85%] justify-between">
    <h1>Arabic</h1>
    <h1>85%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[85%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
     </div>


        </div>
        </div>
        </div>


        <div  className="w-full mt-20 " >
        <Title title="PARTNERS" />
        <div className="grid grid-cols-4 grid-rows-2 mt-12 h-[40vh] ">
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0 flex justify-center items-center ">
          <Image  alt="GDGLogo" id='hovered' src={GDGLogo} className=" rounded-full opacity-50 w-[85px] h-[85px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0  flex justify-center items-center ">
            <Image  alt="Mclogo" id='hovered' src={Mclogo} className=" rounded-full opacity-50 w-[85px] h-[85px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0  flex justify-center items-center ">
          <Image  alt="GdscLogo" id='hovered' src={GdscLogo} className=" rounded-full opacity-50 w-[90px] h-[90px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 flex justify-center items-center "></div>
        </div>
        </div>
        </div>
     );
}
 
export default About;