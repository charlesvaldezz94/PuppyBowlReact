import React from "react";

const AllPuppies = (props) => {
  const puppyData = props.puppyData;
  const getClickedPuppy = props.getClickedPuppy

  //map through puppyData array of objects
  //set each key to a div
  //on click button calls getClickedPuppy func and
  //passes in puppyId for puppy data fetch request in main
  return (
    <div className="box">
      {puppyData.length ? (
        puppyData.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <div className="nameAndId">
                <span>{puppy.name}</span>
                {`# ${puppy.id}`}
              </div>
              <div>
                <img src={puppy.imageUrl} className="puppyPicture"></img>
              </div>
              <button
                type="button"
                id="DetailsButton"
                onClick={() => {
                  getClickedPuppy(puppy.id);
                }}
              >
                Details
              </button>
            </div>
          );
        })
      ) : (
        <div className="LoadingScreen"> Loading the cutest puppies...</div>
      )}
    </div>
  );
};

export default AllPuppies;
