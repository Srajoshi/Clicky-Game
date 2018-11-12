import React from "react";
import "./FriendCard.css";


function handleClick(props) {
  props.reArrangeCards();
  props.clickedFriend(props.id);
}

 function FriendCard (props) {
  return (

    <div className="card">
      <div className="img-container imageBox">
        <img
          alt={props.name}
          src={props.image}
          id={props.id}
          onClick={() => handleClick(props)} />

        
    </div>
      {/* <div className="name">
      <strong>Name:</strong> {props.name}
    </div> */}
    </div>
  )
}
export default FriendCard;