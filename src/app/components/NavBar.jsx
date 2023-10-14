import React, { useState , useEffect} from 'react';
import './components.css'; 
import { supabase } from '../../../supabase';

function SideNavbar({details }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [Data , setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from('StudentDetails') 
          .select('*')
          .eq('email', details);

        if (error) {
          console.error('Error fetching data:', error);
        } else {
          setData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
    const opennav = () => {
    setIsSideNavOpen(true);
    openSideNavBar(); 
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <>
    <div className="side-navbar">
      <div id="mySidenav" className={`sidenav ${isSideNavOpen ? 'open' : ''}`}>
        
        {console.log(Data)};
        {Data.length > 0 && (
          <>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
         <a href='#'>{Data[0].Name}</a>
         <a href="#">{details}</a>
         <a href="#">Role:Student</a>
         <a href="#">{Data[0].regnumber}</a>
         <a href="#">{Data[0].bag_number}</a>
         <a href='#'>{Data[0].submissionday}</a> 
         <span
        style={{ fontSize: '30px', cursor: 'pointer' , color:'white' }}
        onClick={opennav}
      >
        &#9776; open
      </span>

         </>
         )
        }
  
        
  
        
         
        
        
      </div>

      
    
    </div>
    </>
  );

  
}

export default SideNavbar;

/*
import React, { useState } from 'react';
 // Import the CSS for styling

function SideNavbar({details}) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const openNav = () => {
    setIsSideNavOpen(true);
  };

  const closeNav = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div className="side-navbar">
      <div id="mySidenav" className={`sidenav ${isSideNavOpen ? 'open' : ''}`}>

        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      
      <span
        style={{ fontSize: '30px', cursor: 'pointer' }}
        onClick={openNav}
      >
        &#9776; open
      </span>
    </div>
  );
}

export default SideNavbar;*/
