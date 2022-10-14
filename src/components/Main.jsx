import React, {useState, useEffect} from "react";
import Navbar from "./Navbar"
import AllPuppies from "./AllPuppies";
import Searchbar from "./DogSearchBar";
import DogSearchbar from "./DogSearchBar";

const Main = () => {
  const [puppyData, setPuppyData] = useState([]);
  useEffect (() => {
    async function getPuppyData() {
      const response = await fetch ("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players")
      const result = await response.json()
      const puppies = result.data.players
      setPuppyData(puppies)
    }
    getPuppyData()
  }, [])

  return (

  <div id="main">

    <div id="container">
    <Navbar />
    <DogSearchbar puppyData={puppyData}/>
    <AllPuppies puppyData={puppyData}/>
    </div>


  </div>)
};

export default Main;
