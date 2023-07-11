import Link from "next/link";
import {FaDiscord,FaLinkedinIn,FaGithub} from "react-icons/fa";
import {SiGmail} from "react-icons/si";

const Footer = () => {
    return ( 
        <div  className='flex items-end flex-col-reverse gap-5 md:justify-between md:w-[92%] md:mx-auto md:mt-4 md:flex-row  '>
        <h1  className="md:font-semibold sm:text-base text-[12px] " >Copyright  &copy; 2023</h1>
        <div  className='flex gap-2 md:text-lg'>
        <Link  className='z-10 cursor-pointer '  target="_blank"  id='hovered' href={"https://github.com/Ryaaad"} >
           <FaGithub ></FaGithub>
        </Link>
        <Link  className='z-10 cursor-pointer '  target="_blank"  id='hovered' href={"mailto:ryadallali0@gmail.com"} >
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