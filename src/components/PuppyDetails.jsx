import React from "react";

const PuppyDetails = (props) => {
  const clickedPuppy = props.clickedPuppy;

  //pass in clickedPuppy state data (individual puppy data from dynamic api/fetch)
  //created new div to display all relevant puppy data
  return (
    <div className="puppyDetails">
      <div id="puppyStats">
        <img src={clickedPuppy.imageUrl} className="puppyPicture"></img>
        <span id="puppyStatsText">
          <h2>{clickedPuppy.name}</h2>
          <p>
            <b>Breed: </b>
            {clickedPuppy.breed}
          </p>
          <p>
            <b>ID: </b>
            {clickedPuppy.id}
          </p>
          <p>
            <b>Status: </b>
            {clickedPuppy.status}
          </p>
          <p>
            <b>Team: </b>
            {clickedPuppy.team.name}
          </p>
          <p>
            <b>Team Score: </b>
            {clickedPuppy.team.score}
          </p>
          <button type="button" id="backButton" onClick={() => {
           props.setClickedPuppy({})
          }}>Back</button>
        </span>
      </div>
    </div>
  );
};

export default PuppyDetails;
