import { Poppins} from '@next/font/google'
 const poppins = Poppins({
    weight: '900',
  })
  const poppinslight = Poppins({
    weight: '500',
  })
  const poppinslighter = Poppins({
    weight: '300',
  })
const Landing = () => {
    
    return (  
      <div className='pl-[48px]'>
            <h1 className={`mt-[120px] mb-[60px] tracking-wide relative 
            text-[48px] text-[#333] ${poppins.className} font-extrabold`}  >ALLALI RYAD
            <div className="absolute bottom-[-30%] left-0 w-[60px] h-1 bg-black " ></div>
            </h1>
           
            <p className={`my-8 text-[#7d7789] tracking-wide text-2xl ${poppinslighter.className}`}>Creative
              <span className={`text-black ${poppinslighter.className}`} >   Web developer</span>  </p>
            <button id='hovered' className={ `bg-[#333] p-3 px-8 text-white border-2 border-transparent cursor-pointer
         ${poppinslight.className} rounded-none z-10 absolute duration-500 hover:border-[#000] 
         hover:border-solid hover:bg-[transparent]  hover:text-[#333]`} >Get in Touch</button>
      </div>
    );
}
 
export default Landing;