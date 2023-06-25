import Image from "next/image";
import me from "../../public/Images/shared/Rayan.jpg"
import { Dispatch, SetStateAction } from "react";
import { FiX } from "react-icons/fi";


interface props{
    setDetails:Dispatch<SetStateAction<boolean>>
}
const BoxDetails:React.FC<props> = ({setDetails}) => {
    return (
        <>
        <div className=" h-[60vh] w-[55vw] max-h-[700px] max-w-[620px] absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] bg-white p-8 overflow-y-scroll custom-scrollbar sm:w-[65vw] sm:h-[75vh] md:w-[50vw] md:h-[65vh] lg:h-[75vh] xl:w-[52vw] xl:h-[85vh] ">
         <Image alt="" src={me} className="w-full h-[25vw]  " ></Image>
         <h1 className="text-start text-lg sm:text-2xl font-bold text-[#333] my-2 mt-3 sm:my-5 ">Holy Quran</h1>
         <p className="text-[#7d7789] text-[12px] sm:text-base "> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero eos delectus eveniet commodi temporibus quos deserunt error porro. Neque nisi, 
         omnis, reprehenderit quisquam quo libero pariatur placeat ipsum, adipisci impedit laborum est quibusdam sint. Eos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio rerum, veniam 
         nostrum porro possimus nemo itaque sequi. Minima, accusamus officia voluptas quisquam maxime neque illo non deleniti tempora, quibusdam, tempore illum vel assumenda sint facere. Accusantium voluptatum ex 
         velit totam ullam mollitia, excepturi aliquam repellendus, ab vel accusamus! Dolor, id vitae ea dolore ut reiciendis iusto natus. Quisquam sapiente deleniti natus officia in labore cumque architecto iure, 
         repudiandae ipsa iste, facilis reprehenderit ut quos nam quia exercitationem blanditiis rem omnis voluptatem minima cum. Non placeat illo eligendi dignissimos quaerat ea odit necessitatibus earum. Libero 
         tempora ipsum dolor repellendus expedita. </p>
        </div>
        <div className=" w-[40px] h-[40px] text-white flex justify-center items-center absolute cursor-pointer bg-transparent border-2 border-solid border-white 
        hover:rounded-[9999px] transition-all duration-500 rounded-[10px]  right-[5%] top-[20%] sm:top-[12%] md:right-[15%] md:top-[18%] lg:top-[12%] xl:right-[20%] 2xl:right-[25%] xl:top-[10%] "
        onClick={()=>{setDetails(false)}}
        >
            <FiX className="text-xl" ></FiX>
        </div>
        </>
      
      );
}
 
export default BoxDetails;