"use client"
import { fetchuserdetails } from "../../../lib/serveractions"
import { supabase } from "../../../supabase";
import { useState } from "react";
import { useEffect } from "react";
const Profile = ()=>{
    const [email, setemail] = useState<string | undefined>('');
    const [data , setdata] = useState({});
    const [details , setdetails] = useState<any[] | undefined>([]);
    const [isloading , setisLoading] = useState(true);
    useEffect(() => {
        const fetchDataOnPageLoad = async () => {
          const res = await fetchSession();
          if (res === null) {
            console.log("Not logged in");
            return;
          }
          setdata(res);
          
          
          setemail(res.user.email);
          
          
          await fetch(res.user.email);

          setTimeout(() => {
            setisLoading(false); 
          }, 2000);
          
        };
        
        fetchDataOnPageLoad(); // Call the function when the component mounts
      }, []);

   
    const fetch = async (email:any) =>{
       const response = await fetchuserdetails(email);
       if(response === null){
        console.log("can't fetch");
        
        return;
      }
      setdetails(response);
      console.log(response);
      
    
      
       
       

    }

    const fetchSession = async () => {
        try {
          const { data, error } = await supabase.auth.getUser();
  
          if (error) {
            console.error('Error fetching session data:', error);
            return null;
          } 
  
          return data
        } catch (error) {
          console.error('Error fetching session data:', error);
          return null;
        }
      };


    return(
        <>
            <div className="profile">
      { isloading ? (<div>LOADING .....</div>) : (
      
      
      details !== undefined && details.length > 0 ? (
        <div>
          <li>NAME : {details[0].Name}</li>
          <li>EMAIL : {details[0].email}</li>
          <li>BAGNUMBER : {details[0].bag_number}</li>
          <li>SUBMISSIONDAY : {details[0].submissionday}</li>
          
          <li>REGISTER NUMBER : {details[0].regnumber}</li>
        </div>
      ) : (
        'Details not available'
      )
      
      )
      
      }
    </div>
        </>
    )
}
export default Profile;
