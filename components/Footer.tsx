import { FiDribbble } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { FaDiscord } from "react-icons/Fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return ( 
        <div  className='flex justify-between w-[92%] mx-auto mt-4 '>
        <h1  className="font-semibold" >Copyright  &copy; 2022</h1>
        <div  className='flex gap-2 text-lg'>
        <ImFacebook className='z-10 cursor-pointer '   id='hovered'  ></ImFacebook>
        <FiDribbble   className='z-10 cursor-pointer '  id='hovered' ></FiDribbble>
      <FaDiscord  className='z-10 cursor-pointer '  id='hovered' ></FaDiscord>
      <BsTwitter  className='z-10 cursor-pointer '  id='hovered' ></BsTwitter>
      <AiFillInstagram   className='z-10 cursor-pointer '  id='hovered' ></AiFillInstagram>
        </div>
      
      </div>
     );
}
 
export default Footer;