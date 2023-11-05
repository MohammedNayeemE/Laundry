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
  
   // const res = await supabase.auth.setSession(sessionData);
    //console.log(res);
    
    //console.log(response.data.session);
     
    return response;
  };

  export  {handleLogin };
/*
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body as loginprams;

  const response = await signInWithEmail({ email, password });

  if (response === null || response === undefined) {
    // Handle null or undefined response
    res.status(400).json({ error: 'Unexpected error' });
    return;
  }

  if (response.error) {
    res.status(401).json({ error: response.error });
    return;
  }

  const sessionData = {
    access_token: response.data.session.access_token,
    refresh_token: response.data.session.refresh_token,
  };

  await supabase.auth.setSession(sessionData); // Store session in cookie
  res.redirect('/profile');
}

  


  /*

  */