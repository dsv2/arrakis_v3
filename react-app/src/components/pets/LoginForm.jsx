import React, { useState } from 'react';
import { saveUser } from '../../services/BondsServices';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


const LoginForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {};
    user.username = username;
    user.password = password;
    console.log(user);

    saveUser(user)
   .then(res => {
      setUsername('');
      setPassword('');
      props.loginSuccess(true);
      })
    .catch(err=>{
       console.log(err);
      })
  }

  return (
    // <Row className='loginForm'>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => setUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleSubmit}>Login</button>
    //   {error && <div>{error}</div>}
    // </Row>


    <Row className='loginForm' >
        <Form class="loginForm">
            <Form.Group className="info" controlId="username">
                <Form.Label>Username: </Form.Label>
                <Form.Control type="text" placeholder="username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="info" controlId="password">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group><br></br>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </Row>

  );
};

export default LoginForm;

