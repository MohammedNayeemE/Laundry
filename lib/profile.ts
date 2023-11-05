// pages/api/profile.ts
"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../supabase';

export default async function handler() {
  const session = await supabase.auth.getSession();
  
  if (!session.data.session) {
     console.log("session error");
     
    return;
  }
  

  // Fetch user profile data based on session information
  const profileData = 
  await supabase
        .from('StudentDetails')
        .select()
        .eq('email' , session.data.session.user.email);

  if (!profileData) {
    console.log("not found");
    
    return;
  }
  console.log(profileData);
  
  // Render the profile page using the profile data
  return profileData // Replace 'res.render' with the appropriate rendering method
}
