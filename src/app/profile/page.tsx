"use client"

import React from 'react';
import { useState  , useEffect} from 'react';
import { supabase } from '../../../supabase';
import handler from '../../../lib/profile';
const Profile: React.FC = () => {
  const [profileData, setProfileData] = useState<any>(null);

  

  return (
    <div className="profile-container">
      <div className="profile-header">
        <button onClick={() => handler()}>FTECH</button>
      </div>

      
    </div>
  );
};

export default Profile;


