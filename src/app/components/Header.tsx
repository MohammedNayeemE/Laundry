import NavBar from "./NavBar"

const Header = () =>{
    return(
      <>
        <header>
      <NavBar/>
      <div className="hero" >
        <div className="textcontent" style={{margin:'10px'}}>
           <div style={{fontSize:'68px' , padding:'5px'}}>
            <p>FOR THE STUDENTS BY THE  <span style={{color:'aqua'}}>STUDENTS</span></p>
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
    )
  }

  export default Header;