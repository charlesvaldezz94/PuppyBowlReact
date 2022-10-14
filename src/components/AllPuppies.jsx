const AllPuppies = (props) => {
  const myPuppies = props.puppyData;



  return (
  <div className="box">
    {myPuppies.length ?
      myPuppies.map((puppy) => {
        return (

          <div key={`player-${puppy.id}`} className = "puppy">
            <div className="nameAndId"><span>{puppy.name}</span>{`# ${puppy.id}`}</div>
            <div><img src={puppy.imageUrl} className = "puppyPicture"></img></div>
            <button>Details</button>
          </div>
        )
    })
  :  <div>Loading the cutest puppies...</div>
  }
  </div>
  )
}

export default AllPuppies;
