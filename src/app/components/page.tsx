// login page

"use client";
import { useState } from 'react';
import { signInWithEmail } from './signin';

const Login = () => {
  const [regnumber, setRegnumber] = useState('');
  const [password, setPassword] = useState('');
  const [email , setEmail] = useState('');
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const response = await signInWithEmail({email , password});

    if(response !== null) alert("Logged IN");

    setEmail('');
    setPassword('');
    setRegnumber('');
    
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
}

export default Login;
