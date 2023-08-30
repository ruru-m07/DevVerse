import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {

  return (
    <>
      <Router>
        {/* <div className="grid h-screen md:w-full"> */}
        {/* <Navbar user={user} /> */}
        {/* <Sidebar /> */}
        {/* <Alert alert={alert} /> */}
        <div className="grid md:w-full">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            ></Route>
            <Route
              exact
              path="/signup"
              element={<Signup />}
            ></Route>
            <Route
              exact
              path="/login"
              element={<Login />}
            ></Route>
            
            {/* <Route path="*" element={<Pagenotfound />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
