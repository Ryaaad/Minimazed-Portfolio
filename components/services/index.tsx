import { MdDesignServices , MdWeb } from "react-icons/md";

import Title from "../shared/Title";
import BoxContainer from "./Box";

const Service = () => {
    const Services=[

 {ServiceName:"Ui & Ux Design", desc:"I'll bring your design concepts to life From mobile to web, I seamlessly blend aesthetics and functionality", icone: <MdDesignServices  className="text-4xl md:text-6xl" ></MdDesignServices>},
 {ServiceName:"front-end Development", desc:" From design to implementation, I specialize in turning your ideas into captivating websites", icone: <MdWeb  className=" text-4xl md:text-6xl" ></MdWeb>},
 {ServiceName:"Back-end Development", desc:" Everything from building databases to System design to building Rest Api", icone: <MdWeb  className=" text-4xl md:text-6xl" ></MdWeb>}
    ]
    return ( 
<div  className="py-[95px] px-[10px] text-[#7d7789] xl:px-[3vw] 2xl:px-[6vw] " >
        <Title title="Services" />
   <div  className="grid justify-center mt-12 gap-8 grid-cols-1 lg:gap-x-0 lg:justify-between md:grid-cols-[repeat(2,43vw)] lg:grid-cols-[repeat(2,26vw)] xl:grid-cols-[repeat(2,27vw)] " >
    {Services.map((service,index)=>{
        return <BoxContainer key={index} {...service} ></BoxContainer>

    })}
    </div>
</div>
     
     );
     
     
}
 
export default Service;