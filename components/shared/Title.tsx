
interface props{
    title:string
}

const Title:React.FC<props> = ({title}) => {
    return (
        <div className="flex gap-5 items-center ">
        <h1 className="text-[#333333] tracking-[0.3rem] text-[15px] font-bold min-w-max z-10 uppercase " >{title}</h1>  
        <span className="bg-[#7d7789] w-full h-[1px] translate-y-[60%]  "></span>
          </div> 
      );
}
 
export default Title;