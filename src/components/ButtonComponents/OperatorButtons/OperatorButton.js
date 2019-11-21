import React from "react";

const OperatorButton = (props) => {
  return (
   <span className="char-container">
    <button className="char" onClick = {() => { props.newInfo1(props.item.char) }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.item.char}
    </button>
    </span>
  );
};

export default OperatorButton