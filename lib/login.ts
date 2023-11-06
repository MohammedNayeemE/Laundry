// api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../supabase';
import { signInWithEmail } from './signinupactions/signin';

interface loginprams {
    email: string;
    password: string;
  }


  const handleLogin = async ({email ,password} : loginprams) => {
    const response = await signInWithEmail({ email, password });
  
    if (response === null || response === undefined) {
      // Handle null or undefined response
      throw new Error('Unexpected error');
    }
  
    if (response.error) {
      throw new Error(response.error);
    }
  
    const sessionData = {
      access_token: response.data.session.access_token,
      refresh_token: response.data.session.refresh_token,
    };
  
   
     
    return response;
  };

  export  {handleLogin };
