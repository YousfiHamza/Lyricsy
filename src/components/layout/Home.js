import React from "react";
import TrackList from "../Tracks/TrackList";
import Search from "../Search";

import { Consumer } from "../../context";

const Home = () => {
  return (
    <Consumer>
      {value => {
        const { handleTheme, lightTheme, light, dark } = value;
        const theme = lightTheme ? light : dark;
        return (
          <React.Fragment>
            <Search />
            <TrackList />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Home;
