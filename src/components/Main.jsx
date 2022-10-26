import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AllPuppies from "./AllPuppies";
import DogSearchBar from "./DogSearchBar";
import PuppyDetails from "./PuppyDetails";

const Main = () => {
  //piece of state containing all our puppy data
  const [puppyData, setPuppyData] = useState([]);

  //piece of state for search results
  const [searchPuppies, setSearchPuppies] = useState("");

  //piece of state for puppy details button
  const [clickedPuppy, setClickedPuppy] = useState({});

  //fetch for players puppy data (all) use effect should allow this fetch to update anytime the puppy data changes in api
  useEffect(() => {
    const getPuppyData = async () => {
      try {
        const response = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players"
        );
        const result = await response.json();
        const puppies = result.data.players;
        setPuppyData(puppies);
      } catch (error) {
        console.log("There was a problem getting puppy data!");
      }
    };
    getPuppyData();
    // console.log(puppyData);
  }, []);

  //function for changing state/filtering puppy by search results
  function filterPuppyData() {
    //if searchPuppies state is empty string (falsey) return puppyData to state
    if (!searchPuppies) {
      return puppyData;
    }
    //if searchPuppies state not empty string (truthy)
    //filter puppy data, set puppy.name to lowercase so it doesnt impede search through puppyData for name key
    //if puppy.name equals the string contained in searchPuppy state return array containing matching name puppies to puppyData state
    else {
      return puppyData.filter((puppy) => {
        return puppy.name.toLowerCase() === searchPuppies.toLowerCase();
      });
    }
  }

  //function for dynamically fetching individual puppy details/data
  //tied to on click for details button in all puppies component
  const getClickedPuppy = async (puppyId) => {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${puppyId}`
    );
    const result = await response.json();
    //had issue here, needed to drill into objects another few layers
    //to pass the player object into clickedPuppy state
    const puppyInfo = result.data.player;
    // console.log(puppyInfo);
    setClickedPuppy(puppyInfo);
  };

  return (
    <div id="main">
      <div id="container">
        <Navbar />
        <DogSearchBar setSearchPuppies={setSearchPuppies} />

        {/* if clickedPuppy has been passed an id, from onclick function 
        call in AllPuppies component.
        pass props as needed */}
        {clickedPuppy.id ? (
          <PuppyDetails
            setClickedPuppy={setClickedPuppy}
            clickedPuppy={clickedPuppy}
            getPuppyClicked={getClickedPuppy}
          />
        ) : (
          <AllPuppies
            puppyData={filterPuppyData()}
            getClickedPuppy={getClickedPuppy}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
