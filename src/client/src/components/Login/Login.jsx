import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../../fire.js';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });
  
    if (isLoggedIn === true) {
      return <Redirect to ="/home"/>
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            console.error('Incorrect username or password');
        });
    }



    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-4">
            <form className="flex flex-col justify-center" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) => setEmail(target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    onChange={({ target}) => setPassword(target.value)}
                    placeholder="Password"
                />
                <br />
                <button className="btn btn-primary" type="submit">
                    Sign in
                </button>
            </form>
        </div>
        
    )
};

export default Login