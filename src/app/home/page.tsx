import NavBar from "../components/NavBar"
import Image from "next/image";
const Home = ()=>{
  return(
  <>

  <header>
    <NavBar/>
    <div className="hero" >
      <div className="textcontent" style={{margin:'10px'}}>
         <div style={{fontSize:'68px' , padding:'5px'}}>
         For The Students By the <span style={{color:'aqua'}}>Students</span>
         </div>
      <div style={{margin:'10px' , padding:'5px'}}>
      
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga omnis minima. Modi, rem tempora perspiciatis laborum, expedita aut reprehenderit ipsam architecto eveniet repellendus nihil?
      
      </div>
      </div>
      <div className="heroimage" style={{margin:'10px'}}>
        <img src="chefewa.jpg" alt="heroimage" style={{width:'650px' , height:'350px'}}/>
      </div>
    </div>
  </header>
  
  
  </>
  );


  
}

export default Home;


/*
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          console.error('Error fetching session data:', error);
        } else {
          setSession(data);
        }
      } catch (error) {
        console.error('Error fetching session data:', error);
      }
    };
*/