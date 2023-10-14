"use client"
import { supabase } from '../../../supabase';
import { useState } from "react"

const Status = ()=>{
    const [bagNumber , setbagNumber] = useState('');
    const [status , setstatus] = useState(false);
    const [count , setcount] = useState(0);
    const [isLoading , setisLoading] = useState(false);
    
    const fetchStatus = async (bg:any) => {
      const { data, error } = await supabase
          .from('LaundryDetails')
          .select('status')
          .eq('bag_number' ,bg)
          .single()
      
      if (error) {
          console.error('Supabase error:', error.message);
          throw error;
      }
      
      if (data) {
          setstatus(data.status);
          setisLoading(false);
      }
  };
  const handleClick = (bg:any)=> { 
       setcount(count+1);
       setisLoading(true);
       setTimeout(() => {
        fetchStatus(bg);
    }, 2000);
       

  }

    return(
        <>

        
        <div className="" style={{display:'flex' , flexDirection:'column' , height:'100vh'  , justifyContent:'center' , alignItems:'center'}}>
        <label> Enter your Bag Number </label>
        <input type="text" value={bagNumber} style={{color:'black' , outline:'none'}} onChange={(e)=>setbagNumber(e.target.value)}/>
        <br/>
        <button type="button" className="btn" onClick={()=>handleClick(bagNumber)}>Submit</button>
        {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    count > 0 ? (status ? <div>Status: Ready</div> : <div>Status: Not ready yet</div>) : null
                )}
        
        
        </div>
        </>
    )
}

export default Status;