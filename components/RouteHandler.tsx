import Contact from './Contact/index';
import About from './About';
import Landing from './Home';


interface props{
    Route:string
}
const RouterHandler:React.FC<props> = ({Route}) => {
    return ( 
        <div className="bg-[#f6fbff] h-[510px] w-[calc(100%-420px)] overflow-y-scroll custom-scrollbar" >
            {Route=="Home" && <Landing></Landing> }
            {Route=="About" && <About></About> }
            {Route=="Contact" && <Contact></Contact> }
        </div>
     );
}
 
export default RouterHandler;