import Image, { StaticImageData } from "next/image";
import { RiShareBoxLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";


interface props{
    setDetails:Dispatch<SetStateAction<boolean>>,
    Name:string,
    img:StaticImageData,
    demo?:string,
    github:string
}
const Box:React.FC<props> = ({setDetails,Name,img,demo,github}) => {
    const [hovered, sethovered] = useState(false)
    return ( 
        <div className="w-full h-[105vw] sm:w-[45vw] sm:h-[45vh] md:h-[55vh] lg:h-[31vw] lg:w-[26vw] xl:w-[28vw] relative cursor-pointer z-10 "  
        onMouseEnter={()=> {sethovered(true); console.log("hover",hovered)   }}
        onMouseLeave={()=> {sethovered(false); console.log(hovered)   }}
        // onClick={()=>{setDetails(true)}}
        >   
            <Image id='hovered' alt="Project"  src={img} className="w-full h-full opacity-75 hover:opacity-50 duration-700 bg-cover "  ></Image>
            {hovered && 
            <>
            <div className={`bg-white shadow-2xl absolute bottom-5 w-[90%] right-[50%] translate-x-[50%] p-2 px-4 z-10 h-[15%] min-h-[85px] sm:h-[25%] md:h-[20%] lg:h-[25%] xl:min-h-[90px] xl:w-[85%] xl:h-[20%] xl:max-h-[96px] `} >
                    <h1 className="font-bold text-black ">{Name} </h1>
                    <div className="flex w-full items-center justify-center gap-5 mt-3 text-sm xl:text-base ">
                    <Link className="flex items-center gap-2 hover:text-black duration-300 hover:font-semibold " target="_blank" href={github} >
                    <h1>Code</h1>
                    <AiFillGithub className=" text-xl xl:text-2xl"></AiFillGithub>
                   </Link>
             { demo &&   <Link className="flex items-center gap-2 hover:text-black duration-300 hover:font-semibold " target="_blank" href={demo} >
                         <h1>Live Demo</h1>
                         <RiShareBoxLine   className=" text-2xl 2xl:text-3xl"></RiShareBoxLine>
                        </Link>}
                    </div>
            </div>
            </>
            }
        </div>
     );
}
 
export default Box;