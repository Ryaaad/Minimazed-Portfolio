import { useState } from "react";
import Title from "../shared/Title";
import BoxDetails from "./BoxDetails";
import Box from "./ProjectBox";
import ClairOptique from "../../public/Images/Projects/Clair'optique/Clair’optique.png"
import Gamjam2023 from "../../public/Images/Projects/Gamejam2023/GDG-Algiers-Game-Jam.png"
import Jesper from "../../public/Images/Projects/Jesper/jesper.png"
import Blackbird from "../../public/Images/Projects/blackbird/Shopy.png"
const Project = () => {
  const [Details, setDetails] = useState(false)
  const [Filter,setFilter] = useState('all')
  const Projects=[{
    Name:"Clair'optique",
    img:ClairOptique,
    demo:"https://clairoptique.vercel.app/",
    github:"https://github.com/Ryaaad/clairoptiqu"
  },
  {
    Name:"Game Jam 2023",
    img:Gamjam2023,
    demo:"https://game-jam.gdgalgiers.com/",
    github:"https://github.com/GDGAlgiers/gamejam-2023-website"
  },
  {
    Name:"Jesper",
    img:Jesper,
    demo:"https://jesper-alpha.vercel.app/",
    github:"https://github.com/Ryaaad/JESPER"
  },
  {
    Name:"BlackBird",
    img:Blackbird,
    demo:"https://blackbird-swart.vercel.app/",
    github:"https://github.com/Ryaaad/Blackbird"
  }

]
    return (
      <>
        <div className="py-[95px] px-[4vw] sm:px-[25px] text-[#7d7789] xl:px-[2vw] 2xl:px-[6vw] ">
          <Title title="Projects" />
          <div className="mt-12">
            <div className="flex items-center justify-start gap-8 ">
                <h3  id='hovered' className={`font-semibold cursor-pointer ${Filter=="all" ? "text-black" : "text-[#333333ad] " } hover:text-black `} onClick={()=>{setFilter('all')}} >All</h3>
                <h3  id='hovered' className={`font-semibold cursor-pointer ${Filter=="Frontend" ? "text-black" : "text-[#333333ad] " } hover:text-black `} onClick={()=>{setFilter('Frontend')}} >Front-end</h3>
                <h3  id='hovered' className={`font-semibold cursor-pointer ${Filter=="Backend" ? "text-black" : "text-[#333333ad] " } hover:text-black `} onClick={()=>{setFilter('Backend')}} >Back-end</h3>
                {/* <h3  id='hovered' className={`font-semibold cursor-pointer ${Filter=="all" ? "text-black" : "text-[#333] " } `} >Mobile </h3> */}
            </div>

           { (Filter=='all' || Filter=='Frontend') && <div className="grid items-center justify-center justify-items-center w-full mt-8 grid-cols-1 xl:mt-12 gap-[5vw] md:gap-[2vw] xl:gap-[5vw] sm:grid-cols-[repeat(2,45vw)] 
            lg:grid-cols-[repeat(2,26vw)] xl:grid-cols-[repeat(2,28vw)] ">
              {Projects.map((prjct,index)=>{
                return <Box key={index} {...prjct} setDetails={setDetails} ></Box>
              })}
            </div>}
          </div>
        </div>

      { Details && <div className="fixed w-[100%] h-[100vh] top-0 right-0 bg-[#000000cc] z-50 ">
        <BoxDetails setDetails={setDetails} ></BoxDetails>
        </div>     }
       </>
      
      );
}
 
export default Project;