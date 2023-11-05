
import Header from "../components/Header";
import About from "../components/About";
import UIStatus from "../components/Status";
import Contact from "../components/Contact";

import './home.css';
const Home = ()=>{
  return(
  <>

  <Header/>
  <section style={{margin:'10px' ,padding:'7px' , marginTop:'10%' , display:'flex' ,justifyContent:'center' , alignItems:'center' , flexDirection:'column'}}>
   
    <div className="h-36 w-1 bg-white mt-2 mb-2"></div>
    <div style={{fontSize :'58px' , color:'aqua'}}>
      STATUS
    </div>
    <div className="h-36 w-1 bg-white mt-2 mb-2"></div>
    <UIStatus/>
      <div className="h-36 w-1 bg-white mt-2 mb-2"></div>
      <About/>
      <div className="h-36 w-1 bg-white mt-2 mb-2"></div>
      <Contact/>
      <div className="h-36 w-1 bg-white mt-2 mb-2"></div>
      
  </section>
  
  
  
  </>
  );


  
}

export default Home;


