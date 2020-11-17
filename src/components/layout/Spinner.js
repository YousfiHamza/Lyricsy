import React from "react";
import spinner from "./spinner2.gif";

const Spinner = (props) => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "300px", margin: " 40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
