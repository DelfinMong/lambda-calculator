import React from "react";


const NumberButton = ( { newInfo1,item } ) => {
  return (
    <span className="numbers-container">
    
    <button className="numbers" onClick = {() => { newInfo1(item) }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { item }
    </button>
    </span>
  );
};


export default NumberButton