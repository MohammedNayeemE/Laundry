"use client";
import { useState , useEffect } from "react";
import SideNavBar from '../components/NavBar';

import { supabase } from "../../../supabase";

const Home = ()=>{
    const [session, setSession] = useState<any | null>(null);
    const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false);

  useEffect(() => {
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

    fetchSession();
  }, []);

  const openSideNavbar = () => {
    setIsSideNavbarOpen(true);
  };
    return(
        <>
        {session && <SideNavBar details = {session.user.email}  />}
        
        <div className="bigcontainer" style={{display:'flex' , flexDirection:'row', justifyContent:'center' , alignItems:'center',height:'100vh' , margin:'10px' }}>
        <div className="container" style={{border:'1px solid white' , borderRadius:'8px' ,padding:'3px' , height:'200px', display:'flex' ,width:'50%', flexDirection:'column'
         ,  justifyContent:'center' , alignItems:'center' , margin:'10px', cursor:'pointer' }} onClick={openSideNavbar}>
            <h2>My Profile</h2>
        </div>
        <div className="container" style={{border:'1px solid white' , borderRadius:'8px' ,padding:'3px' , height:'200px',width:'50%' ,  display:'flex' , flexDirection:'column'
         ,  justifyContent:'center' , alignItems:'center' , margin:'10px' , cursor:'pointer' }}>
            <h2>Know My Status</h2>
        </div>
        </div>
        
        </>
    )
}
export default Home;