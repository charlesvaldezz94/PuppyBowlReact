import React from "react";

const AllPuppies = (props) => {
  const myPuppies = props.puppyData;
  console.log(myPuppies)


  return (
  <div className="box"> {`This is the AllPuppies Component`}
    {myPuppies.length ?
      myPuppies.map((puppy) => {
      console.log(puppy)
        return (
          <div key={`player-${puppy.id}`} className = "puppy">
            <div>{puppy.name}</div>
            <div>{puppy.breed}</div>
            <div>{puppy.status}</div>
          </div>
        )
    })
  :  <div>Loading the cutest puppies...</div>
  }
  </div>
  )
}

export default AllPuppies;
