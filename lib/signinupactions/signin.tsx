//login function

// lib/signinupactions/signin.ts
"use server"
import { supabase } from "../../supabase";

interface loginprams {
  email: string;
  password: string;
}

async function signInWithEmail({ email, password }: loginprams) {
  try {
    const response = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log(response);
    
    if (response.error) {
      console.error('Login error:', response.error.message);
      return null;
    } 
    else {
      console.log('Logged In');
      const sessionData = {
        access_token: response.data.session.access_token,
        refresh_token: response.data.session.refresh_token,
      };
      
      
      return response; // Return session object
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

export { signInWithEmail };


