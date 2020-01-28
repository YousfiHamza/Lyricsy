import React from "react";
import spinner1 from "./spinner1.gif";
import spinner2 from "./spinner2.gif";

const Spinner = props => {
  const spinner = props.num === 1 ? spinner2 : spinner1;
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: " 40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
