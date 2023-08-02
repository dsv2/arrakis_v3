import React, { useState } from 'react';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Fetch the loginData.json file
    try {
      const response = await fetch('data.json');
      const data = await response.json();

      // Check if the entered credentials match any user in the JSON file
      const user = data.users.find(user => user.username === username && user.password === password);

      if (user) {
        // Login successful, do something (e.g., redirect to a dashboard)
        console.log('Login successful!');
        setError('');
      } else {
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('Error fetching login data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default LoginForm;









// import React, { useState } from "react";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </div>
//     )
// }

