"use client"
import { supabase } from '../../../supabase';
import { useState } from "react"
import { fetchStatus } from '../../../lib/serveractions';
const Status = ()=>{
    const [bagNumber , setbagNumber] = useState('');
    const [status , setstatus] = useState(false);
    const [count , setcount] = useState(0);
    const [isLoading , setisLoading] = useState(false);
    

  const FetchStatus =async (bg:any) => {

    const response = await fetchStatus(bg);
    if(response === null){
        return;
    }
    else{
        setstatus(response.status);
        setisLoading(false);
    }

    
  }
  const handleClick = (bg:any)=> { 
       setcount(count+1);
       setisLoading(true);
       setTimeout(() => {
        FetchStatus(bg);
    }, 1000);
       

  }

    return(
        <>

        
        <div className="" style={{display:'flex' , flexDirection:'column' , height:'100vh'  , justifyContent:'center' , alignItems:'center'}}>
        <label style={{fontSize:'38px' , }}> ENTER YOUR BAG NUMBER </label><br/>
        <input type="text" value={bagNumber} style={{color:'black' , outline:'none' , width:'300px' , fontSize:'30px'}} onChange={(e)=>setbagNumber(e.target.value)}/>
        <br/>
        <button type="button" className="btn" onClick={()=>handleClick(bagNumber)} onKeyDown={()=>handleClick(bagNumber)}>SUBMIT</button><br/>
        {isLoading ? (
                    <div style={{fontSize:'38px'}}>LOADING....</div>
                ) : (
                    count > 0 ? (status ? <div style={{fontSize:'38px'}} >STATUS: READY</div> : <div style={{fontSize:'38px'}} >Status: Not ready yet</div>) : null
                )}
        
        
        </div>
        </>
    )
}

export default Status;

