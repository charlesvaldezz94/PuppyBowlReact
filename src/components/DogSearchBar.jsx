import React, { useState } from "react";

const DogSearchbar = (props) => {
  const myPuppies = props.puppyData;

  const [SearchPuppies, setSearchPuppies] = useState(myPuppies);

  const onSearchChange = (value) => {
    console.log(value)
  }

  function handleSearchClick(event) {
    let SearchResult = "";

    console.log("clicked");
    event.preventDefault();
  }

  return (
    <form id="SearchBar">
      <label>
        Name
        <input 
        type="search" 
        placeholder="Type the dog's name..."
        onChange={e=>onSearchChange(e.target.value)}
         />
      </label>
      <button className="SearchButton" onClick={handleSearchClick}>
        Search
      </button>
    </form>
  );
};

export default DogSearchbar;
