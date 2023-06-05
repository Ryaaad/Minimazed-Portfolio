import { IoLocationSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import Title from "../shared/Title";


const Contact = () => {
    return ( 
        <div  className="py-[95px] px-[20px] " >
          <Title  title="GET IN TOUCH" ></Title>
            <div className="flex mt-[60px] items-center justify-between ">
             <div className="border border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-[31%] border-[#00000012]  ">
             <IoLocationSharp></IoLocationSharp>
             Ave Street, New York, USA
             </div>
             <div className="border border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-[31%] border-[#00000012]  ">
             <HiMail></HiMail>
            ryadallali0@gmail.com
             </div>
             <div className="border-[#00000012] border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-[31%] border">
             <BsFillPhoneFill></BsFillPhoneFill>
             054238542185
             </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div  className="w-[360px] flex flex-col items-start h-[382px] justify-between " >
              <textarea placeholder="Name" className="w-[360px] h-[44px]  p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <textarea placeholder="Email" className="w-[360px] h-[44px]  p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <textarea placeholder="Message" className="w-[360px] h-[120px] p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <button id='hovered' className={ `bg-[#333] p-4 px-10 text-white border-2 border-transparent cursor-pointer text-lg font-semibold rounded-none duration-500 hover:border-[#000] 
              hover:border-solid hover:bg-[transparent]  hover:text-[#333]`} >Send Message</button>
              </div>
              <iframe
      width="363"
      height="382"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.956526335876!2d2.948663615285915!3d36.75052587994681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f36eab08ea732f%3A0xf74053fc4d7bba35!2sZeralda%2C%20Algeria!5e0!3m2!1sen!2sus!4v1620803762922!5m2!1sen!2sus"
    ></iframe>
            </div>
        </div>
     );
}
 
export default Contact;