import { useState } from "react";
import Title from "../shared/Title";
import BoxDetails from "./BoxDetails";
import Box from "./ProjectBox";
const Project = () => {

  const [Details, setDetails] = useState(false)
    return (
      <>
        <div className="py-[95px] px-[4vw] sm:px-[25px] text-[#7d7789] xl:px-[2vw] 2xl:px-[6vw] ">
          <Title title="Projects" />
          <div className="mt-12">
            <div className="flex items-center justify-start text-[#333] gap-8 ">
                <h3  id='hovered' className="font-semibold cursor-pointer " >All</h3>
                <h3  id='hovered' className="font-semibold cursor-pointer " >Front-end</h3>
                <h3  id='hovered' className="font-semibold cursor-pointer " >Back-end</h3>
                <h3  id='hovered' className="font-semibold cursor-pointer " >Ui UX </h3>
            </div>

            <div className="grid items-center justify-center justify-items-center w-full mt-8 grid-cols-1 xl:mt-12 gap-[5vw] md:gap-[2vw] xl:gap-[5vw] sm:grid-cols-[repeat(2,45vw)] 
            lg:grid-cols-[repeat(2,26vw)] xl:grid-cols-[repeat(2,28vw)] ">
              <Box setDetails={setDetails}></Box>
              <Box setDetails={setDetails} ></Box>
              <Box setDetails={setDetails} ></Box>
              <Box setDetails={setDetails} ></Box>
              <Box setDetails={setDetails} ></Box>
              <Box setDetails={setDetails} ></Box>
            </div>
          </div>
        </div>

      { Details && <div className="fixed w-[100%] h-[100vh] top-0 right-0 bg-[#000000cc] z-50 ">
        <BoxDetails setDetails={setDetails} ></BoxDetails>
        </div>     }
       </>
      
      );
}
 
export default Project;