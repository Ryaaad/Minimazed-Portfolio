import { FaDiscord,FaLinkedinIn,FaGithub } from "react-icons/Fa";

const Footer = () => {
    return ( 
        <div  className='flex justify-between w-[92%] mx-auto mt-4 '>
        <h1  className="font-semibold" >Copyright  &copy; 2023</h1>
        <div  className='flex gap-2 text-lg'>
        <FaGithub   className='z-10 cursor-pointer '    id='hovered' ></FaGithub>
        <FaLinkedinIn   className='z-10 cursor-pointer '  id='hovered' ></FaLinkedinIn>
      <FaDiscord  className='z-10 cursor-pointer '  id='hovered' ></FaDiscord>
        </div>
      
      </div>
     );
}
 
export default Footer;