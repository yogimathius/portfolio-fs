import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import fire from '../../fire.js';

const AdminLogin = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  if (isLoggedIn) {
    <Redirect to ="/home"/>

  }
  const signOut = () => {
    fire.auth().signOut()
  };

  // console.log("logged in is: ", isLoggedIn);

  return (
    <div className="absolute right-0 bottom-3 mr-2 flex justify-end text-gray-dk-blue hover:text-white font-bold text-xs">
      {!isLoggedIn
        ? (
          <Link to='/login'>
            Admin
          </Link>
        ) 
        : (
          <>
          <span onClick={signOut}>
            <button href="#">Sign out</button>
          </span>
          </>
        )}
    </div>
  );
};

export default AdminLogin;