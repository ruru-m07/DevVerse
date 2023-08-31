import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

   useEffect(() => {
     if (localStorage.getItem("token")) {
       console.log("going for login");
     } else {
       navigate("/login");
     }
     // eslint-disable-next-line
   }, []);

  return (
    <div>
      <h1>this is home page</h1>
    </div>
  )
}

export default Home
