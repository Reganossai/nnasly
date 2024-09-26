import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHx8MA%3D%3D"
        className="farm-about"
        alt="farm"
      />
      <div className="third-text">
        <h1>CONTACT</h1>
        <p>GET IN TOUCH WITH US</p>
      </div>
    </div>
  );
};

export default Contact;
