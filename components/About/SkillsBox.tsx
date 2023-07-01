import Image from "next/image"
import { useState } from "react";
interface props{
    Name:string,
    img:any
}
const Skill:React.FC<props> = ({Name,img}) => {
    const [Hovered, setHovered] = useState(false)
    return ( 
        <div className=" w-full h-[70px] rounded-full flex flex-col justify-center items-center text-[#7d7789] hover:translate-y-[-7%] duration-200 "
        onMouseOver={()=>setHovered(true)}  onMouseLeave={()=>setHovered(false)}
        >
           <Image alt="Skill Logo" src={img} className="w-[55px] h-[55px]" ></Image>
            <h1 className= {` text-center font-semibold ${Hovered ? "block"  : "hidden" } `} > {Name} </h1>
        </div>
     );
}
 
export default Skill;