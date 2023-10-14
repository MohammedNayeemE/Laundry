
"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import {signup} from './components/signup';
import { supabase } from '../../supabase'
import { NextResponse } from 'next/server';
export default function Home(){
  
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [regnumber , setregnumber] = useState('');
  const [bag_number , setbagNumber] = useState('');
  const [submissionday , setsubmissionday] = useState('');
  const [Name , setname] = useState('');
  let student_id = Math.floor(Math.random() * 50);
  
  const update = async () =>{
    const response = await supabase
    .from('StudentDetails')
    .insert([{ student_id ,  regnumber , Name , email , submissionday , bag_number }])
    .select()

    if(response.error){
      console.error('error occured' , response.error.message);
      return;
    }
    else{
      console.log('Updated');
      
    }
  }
  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    //console.log(email , password);
    await update();
    
    await signup({email , password});
    setbagNumber('');
    setregnumber('');
    setemail('');
    setname('');
    setpassword('');
    setsubmissionday('');
    
        
    
  }

  
  return(
    
    <>
    
    <div className='form'>
      
        <div className='inputfields'>
          <div className='Name'>
            <label>Name</label>
            
            <input type='text' placeholder='ABC'value={Name} onChange={(e)=>setname(e.target.value)}/>
          </div>

          <div className='regnumber'>
            <label>Register Number</label>
            <input type='text' placeholder='22CS001'value={regnumber} onChange={(e)=>setregnumber(e.target.value)}/>
          </div>
          <div className='bagnumber'>
            <label>Laundry Bag Number</label>
            <input type='text' placeholder='00'value={bag_number} onChange={(e)=>setbagNumber(e.target.value)}/>
          </div>
          <div className='bagnumber'>
            <label>Submission Day</label>
            <input type='text' placeholder='00'value={submissionday} onChange={(e)=>setsubmissionday(e.target.value)}/>
          </div>
          <div className='email'>
            <label>Email</label>
            <input type='email' placeholder='college mail id' value={email} onChange={(e)=>setemail(e.target.value)} />
          </div>
          <div className='Name'>
            <label>Password</label>
            
            <input type='password' placeholder='atleast 8 chracters'value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>
          <button type='submit' className='btn' onClick={(e)=>handleSubmit(e)}>Register</button>
        </div>
      
    </div>
    
    </>
  )
}