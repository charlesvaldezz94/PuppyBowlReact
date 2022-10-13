import React, {useState} from "react";
import Navbar from "./Navbar"

const Main = () => {
  const [puppyData, setpuppyData] = useState([]);
  
  return <div id="main">
    <Navbar />
    <h1> I am main </h1>
  </div>;
};

export default Main;
