import Contact from '../components/Contact';


const RouterHandler = () => {
    return ( 
        <div className="bg-[#f6fbff] h-[510px] w-[calc(100%-420px)] overflow-y-scroll" >
        <Contact></Contact>
        <div className="h-[1500vh] bg-black "></div>
        {/* <Landing></Landing>  */}
        </div>
     );
}
 
export default RouterHandler;