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
      <>
      <div className='pl-[48px] hidden md:block'>
            <h1 className={`mt-[120px] mb-[60px] tracking-wide relative text-[#333] ${poppins.className} font-extrabold text-4xl lg:text-5xl `}  >ALLALI RYAD
            <div className="absolute bottom-[-30%] left-0 w-[60px]  bg-black  h-[3px] lg:h-1 " ></div>
            </h1>
           
            <p className={`my-8 text-[#7d7789] tracking-wide ${poppinslighter.className} text-xl lg:text-2xl `}>Creative
              <span className={`text-black font-semibold`} >   Web developer</span>  </p>
            <button id='hovered' className={ `bg-[#333] text-white border-2 border-transparent cursor-pointer
         ${poppinslight.className} rounded-none z-10 absolute duration-500 hover:border-[#000] 
         hover:border-solid hover:bg-[transparent]  hover:text-[#333]  p-2 px-6 lg:p-3 lg:px-8 `} >Get in Touch</button>
      </div>

      <div className='pl-5 block absolute top-[50%] translate-y-[-50%] md:hidden '>
            <h1 className={` tracking-wide relative text-[#333] ${poppins.className} font-extrabold text-4xl mb-[50px] sm:text-5xl sm:mb-[60px] `}  >ALLALI RYAD
            <div className="absolute bottom-[-40%] left-0 w-[60px]  bg-black h-[3px] sm:h-1 " ></div>
            </h1>
           
            <p className={` text-[#7d7789] tracking-wide ${poppinslighter.className} my-6 text-xl sm:text-2xl sm:my-8 `}>Creative
              <span className={`text-black font-semibold`} >   Web developer</span>  </p>
            <button id='hovered' className={ `bg-[#333] text-white border-2 border-transparent cursor-pointer
         ${poppinslight.className} rounded-none z-10 absolute duration-500 hover:border-[#000] 
         hover:border-solid hover:bg-[transparent]  hover:text-[#333] p-3 px-6 sm:p-4 sm:px-8 `} >Get in Touch</button>
      </div>

      </>
     
    );
}
 
export default Landing;