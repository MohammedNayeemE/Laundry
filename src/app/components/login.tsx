import { error } from 'console';
import { supabase } from '../../../supabase';
import { NextResponse } from 'next/server';

interface loginprams{
    email:string,
    password:string
}

async function signInWithEmail({email , password} : loginprams) {
    try{
    const response = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if(response.error){
        console.error('login error' ,response.error.message);
        return;
        
    }
    else{
        console.log('Logged In');
        NextResponse.redirect('http://localhost:3000/home');
        
    }

    }
    catch(err){

    }

    
  }

  export {signInWithEmail};