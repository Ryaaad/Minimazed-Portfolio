interface props{
    ServiceName:string,
    desc:string,
    icone: JSX.Element,
}
const BoxContainer:React.FC<props> = ({ServiceName,desc,icone}) => {
    return ( 
        <div id="hovered" className="flex flex-col gap-3 justify-center items-center p-9 border border-solid border-[#b9b8c3] h-[45vh] md:h-[48vh] lg:h-[55vh] xl:h-[60vh] text-[#333] hover:bg-[#333]
         hover:text-white duration-[750ms]  w-full md:w-[43vw] lg:w-[26vw] xl:w-[27vw] ">
{icone}
<h1 className=" text-xl md:text-2xl font-bold text-center my-3 ">{ServiceName} </h1>
<p  className="text-[#84838f] text-center " >{desc}</p>
        </div>
     );
}
 
export default BoxContainer;