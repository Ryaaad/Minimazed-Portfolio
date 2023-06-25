
interface props{
    title:string
}

const Title:React.FC<props> = ({title}) => {
    return (
        <div className="flex gap-3 sm:gap-5 items-center ">
        <h1 className="text-[#333333] tracking-[0.3rem] text-[14px] font-bold min-w-max z-10 uppercase sm:text-[15px]" >{title}</h1>  
        <span className="bg-[#7d7789] w-full h-[1px] translate-y-[60%]  "></span>
          </div> 
      );
}
 
export default Title;