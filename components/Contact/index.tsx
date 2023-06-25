import { IoLocationSharp } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { BsFillPhoneFill } from "react-icons/bs";
import Title from "../shared/Title";


const Contact = () => {
    return ( 
        <div  className="py-[95px] px-[20px] xl:px-[4vw] 2xl:px-[6vw] " >
          <Title  title="GET IN TOUCH" ></Title>
            <div className="flex mt-[60px] flex-col gap-5 md:gap-0 md:items-center md:justify-between md:flex-row ">
             <div className="border border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-full border-[#00000012] md:text-base lg:text-[12px] xl:text-base md:w-[31%] ">
             <IoLocationSharp  className="text-base" ></IoLocationSharp>
             Ave Street, New York, USA
             </div>
             <div className="border border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-full border-[#00000012] md:text-base lg:text-[12px] xl:text-base md:w-[31%]">
             <HiMail  className="text-base" ></HiMail>
            ryadallali0@gmail.com
             </div>
             <div className="border-[#00000012] border-solid  flex flex-col justify-center items-center gap-2 text-[#7d7789] h-[94px] w-full border md:text-base lg:text-[12px] xl:text-base md:w-[31%]">
             <BsFillPhoneFill className="text-base" ></BsFillPhoneFill>
             054238542185
             </div>
            </div>
            <div className="mt-8 flex flex-col gap-5 md:gap-0 md:justify-between md:flex-row md:items-center">
              <div  className=" flex flex-col items-start justify-between h-[350px] w-full md:w-[48%] md:h-[382px] " >
              <textarea placeholder="Name" className="w-full h-[44px]  p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <textarea placeholder="Email" className="w-full h-[44px]  p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <textarea placeholder="Message" className="w-full h-[120px] p-3 py-2 text-sm font-semibold bg-transparent border border-solid border-[#00000012] resize-none " />
              <button id='hovered' className={ `bg-[#333] text-sm p-2 px-6 my-8 text-white border-2 border-transparent cursor-pointer font-semibold rounded-none duration-500 hover:border-[#000] 
              hover:border-solid hover:bg-[transparent]  hover:text-[#333] sm:p-3 sm:px-11 md:my-0 md:p-4 md:px-10 sm:text-lg `} >Send Message</button>
              </div>
              <iframe
      height="382"
      loading="lazy"
      className="md:w-[48%] w-full "
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.956526335876!2d2.948663615285915!3d36.75052587994681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f36eab08ea732f%3A0xf74053fc4d7bba35!2sZeralda%2C%20Algeria!5e0!3m2!1sen!2sus!4v1620803762922!5m2!1sen!2sus"
    ></iframe>
            </div>
        </div>
     );
}
 
export default Contact;