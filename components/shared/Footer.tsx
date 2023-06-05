import Link from "next/link";
import { FaDiscord,FaLinkedinIn,FaGithub } from "react-icons/Fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return ( 
        <div  className='flex justify-between w-[92%] mx-auto mt-4 '>
        <h1  className="font-semibold" >Copyright  &copy; 2023</h1>
        <div  className='flex gap-2 text-lg'>
        <Link  className='z-10 cursor-pointer '  target="_blank"  id='hovered' href={"https://github.com/Ryaaad"} >
           <FaGithub ></FaGithub>
        </Link>
        <Link  className='z-10 cursor-pointer '  target="_blank"  id='hovered' href={"ryadallali0@gmail.com"} >
           <SiGmail ></SiGmail>
        </Link>
        <Link  className='z-10 cursor-pointer '  target="_blank"  id='hovered' href={"https://www.linkedin.com/in/ryad-allali-208874204"} >
           <FaLinkedinIn ></FaLinkedinIn>
        </Link>

        
      <FaDiscord  className='z-10 cursor-pointer '  id='hovered' ></FaDiscord>
        </div>
      
      </div>
     );
}
 
export default Footer;