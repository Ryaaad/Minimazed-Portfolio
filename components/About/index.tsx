import Title from "../shared/Title";
import Image from "next/image";
import Mclogo from "../../public/Images/About/MCLOGO.png"
import GdscLogo from "../../public/Images/About/Gdsc.png"
import GDGLogo from "../../public/Images/About/GDG.jpeg"
import OSLogo from "../../public/Images/About/OSLogo.png"
import oneClick from "../../public/Images/About/OneClickLOGO.jpg"
import Skill from "./SkillsBox";
import taillwind from "../../public/Images/About/Skills/Tailwind_CSS_Logo.svg.png"
import Next from "../../public/Images/About/Skills/Nextjs.png"
import React from "../../public/Images/About/Skills/logo-react.svg"
import Pandas from "../../public/Images/About/Skills/Pandas.png"
import Arduino from "../../public/Images/About/Skills/arduino-logo.png"
import Typescript from "../../public/Images/About/Skills/Typescript_logo.png"
import NestJS from "../../public/Images/About/Skills/NestJS.png"
import Numpy from "../../public/Images/About/Skills/Numpy.png"
import ChartJS from "../../public/Images/About/Skills/ChartJS.svg"
import Git from "../../public/Images/About/Skills/Git.png"
const About = () => {
    return ( 
        <div  className="py-[95px] px-[20px] text-[#7d7789] " >
          <Title title="About Me" />
        <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between md:items-start pr-2 mt-8  ">
        <p   className=" w-full md:w-[45%] font-[15px] "  >  Hello ! i'm  <span className="font-bold"> Allali Rayan </span>a passionate and dedicated Fullstack web developer with 2 years experience. 
        <br />
        <br />
        I am committed to delivering high-quality results and transforming your ideas into reality.
        <br />
  Let's collaborate and bring your vision to life !</p>
        <div  className=" w-full mt-3 h-[120px] md:mt-0 md:w-[45%] md:h-[170px] flex flex-col justify-between ">
          <div  className="flex gap-10 items-center " >
          <span className="font-bold ">  Name: </span> Allali Rayan
          </div>
          <div  className="flex gap-10 items-center" >
          <span className="font-bold "> Degree: </span> bachelor system informatique
          </div>
          <div  className="flex gap-10 items-center" >
          <span className="font-bold "> Mail: </span>  rayanalllali@gmail.com
          </div>
          <div className="flex gap-10 items-center" >
          <span className="font-bold "> Phone: </span> 05 42 96 95 87
          </div>

        </div>
        </div>

        <div  className=" flex items-start justify-between mt-20 " >
        <div className="w-[40%]" >
        <Title title="SERVICES" />
        <div className="mt-7">
        <div className="mt-7 text-sm sm:text-base ">
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
        <div className="mt-7 text-sm sm:text-base ">
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


        <div  className=" flex flex-col gap-[80px] sm:gap-12 md:gap-0 md:flex-row md:items-start md:justify-between mt-20 " >
        <div className=" w-full sm:w-[45%] md:w-[40%]" >
        <Title title="LANGUAGE" />
        <div className="mt-10 sm:mt-7">
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
   <div className="w-full">
    <div className="flex w-[70%] justify-between">
    <h1>English</h1>
    <h1>70%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[70%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
   <div className="w-full">
    <div className="flex w-[70%] justify-between">
    <h1>French</h1>
    <h1>60%</h1>
    </div>
   
   <div className="w-full h-[3px] bg-[rgb(228,233,237)] rounded-full mt-2 ">
   <div className="w-[60%] h-[3px] bg-[rgb(125,119,137)] rounded-full ">
   </div>
   </div>
   </div>
     </div>


        </div>
        </div>
        <div className=" w-full sm:w-[55%] md:w-[50%]" >
        <Title title="Skills" />
        <div className="mt-8 grid grid-cols-[repeat(4,20%)] pl-2 w-full items-center justify-center justify-items-center gap-2 sm:mt-5 lg:grid-cols-[repeat(3,25%)] lg:gap-4 xl:grid-cols-[repeat(4,20%)] 
        2xl:grid-cols-[repeat(5,20%)] ">
        <Skill Name="Tailwind" img={taillwind} ></Skill>
        <Skill Name="NextJS" img={Next} ></Skill>
        <Skill Name="ReactJS" img={React} ></Skill>
        <Skill Name="NestJS" img={NestJS} ></Skill>
        <Skill Name="Typescript" img={Typescript} ></Skill>
        <Skill Name="Pandas" img={Pandas} ></Skill>
        <Skill Name="Arduino" img={Arduino} ></Skill>
        <Skill Name="Numpy" img={Numpy} ></Skill>
        <Skill Name="ChartJS" img={ChartJS} ></Skill>
        <Skill Name="Git" img={Git} ></Skill>
        </div>
        </div>
        </div>


        <div  className="w-full mt-20 " >
        <Title title="Worked with" />
        <div className="grid grid-cols-2 grid-rows-4 h-[80vh] md:grid-cols-4 md:grid-rows-2 mt-12 md:h-[40vh] ">
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0 flex justify-center items-center">
          <Image  alt="GDGLogo" id='hovered' src={GDGLogo} className=" rounded-full opacity-50 w-[85px] h-[85px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] md:border-r-0 border-b-0  flex justify-center items-center  ">
            <Image  alt="Mclogo" id='hovered' src={Mclogo} className=" rounded-full opacity-50 w-[85px] h-[85px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-b-0  flex justify-center items-center ">
          <Image  alt="GdscLogo" id='hovered' src={GdscLogo} className=" rounded-full opacity-50 w-[90px] h-[90px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] md:border-r-0 border-b-0 flex justify-center items-center ">
          <Image  alt="OSLogo" id='hovered' src={OSLogo} className=" opacity-50 w-[90px] h-[90px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 flex justify-center items-center ">
          <Image  alt="oneClick logo" id='hovered' src={oneClick} className=" rounded-full opacity-50 w-[90px] h-[90px] hover:opacity-100 duration-75 cursor-pointer " ></Image>
          </div>
          <div className="border-2 border-solid border-[#e5edf4] md:border-r-0 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] border-r-0 border-t-0 md:border-t-2 flex justify-center items-center "></div>
          <div className="border-2 border-solid border-[#e5edf4] md:border-r-0 border-t-0 md:border-t-2 flex justify-center items-center "></div>
        </div>
        </div>
        </div>
     );
}
 
export default About;