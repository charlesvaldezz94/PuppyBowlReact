import React, { useState } from "react";

const DogSearchbar = (props) => {
  const myPuppies = props.puppyData;

  function handleSearchClick(event) {
    let SearchResult = "";
    
    console.log("clicked");
    event.preventDefault();
  }

  return (
    <form id="SearchBar">
      <label>
        Name
        <input type="text" />
      </label>
      <button className="SearchButton" onClick={handleSearchClick}>
        {" "}
        Search{" "}
      </button>
    </form>
  );
};

export default DogSearchbar;
