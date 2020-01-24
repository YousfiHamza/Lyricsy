import React from "react";

import Track from "./Track";
import { Consumer } from "../context";

const TrackList = () => {
  return (
    <Consumer>
      {value => {
        console.log(value);
        return (
          <React.Fragment>
            <h1>Hello from TrackList</h1>
            <Track />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default TrackList;
