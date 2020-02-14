import React from "react";

const IDcard = props => {
  return <div>
      <img src={props.user.url} alt={props.user.name}></img>
      <h3>{props.user.name}</h3>
      <h4>{props.user.age}</h4>
     
  </div>;
};

export default IDcard;
