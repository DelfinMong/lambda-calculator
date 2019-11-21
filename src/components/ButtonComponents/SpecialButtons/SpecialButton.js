import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = ({ newInfo1,item }) => {
  return (
    <span className="special-container">
    <button className="special" onClick = {() => { newInfo1(item) }}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {item}
    </button>
    </span>
  );
};

export default SpecialButton