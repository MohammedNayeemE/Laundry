// login page

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { handleLogin } from '../../../lib/login';

interface loginprams {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [regnumber , setRegnumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try{
    const response = await handleLogin({email , password});
    
    console.log(response);
    
    // Handle response from the server
    if (response!= null) {
      router.push('/profile');
    } 
  }
  catch(error){
    console.log(error);
  }
  };

  return (
    <div className="form">
      <div className="inputfields">
        <div className="regnumber">
          <label>Register Number</label>

          <input
            type="text"
            placeholder="22CS001"
            value={regnumber}
            onChange={(e) => setRegnumber(e.target.value)}
          />
        </div>
        <div className="regnumber">
          <label>College Mail Id</label>

          <input
            type="email"
            placeholder="abc.dept2022@citchennai.net"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password">
          <label>Password</label>
          <input
            type="password"
            placeholder="at least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;


