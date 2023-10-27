//login function

"use server"

import { error } from 'console';
import { supabase } from '../../../supabase';


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
        return null;
        
    }
    else{
        console.log('Logged In');
        
        
    }

    }
    catch(err){

    }

    
  }

  export {signInWithEmail};