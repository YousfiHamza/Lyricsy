import React from "react";
import TrackList from "../Tracks/TrackList";
import Search from "../Search";

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <TrackList />
    </React.Fragment>
  );
};

export default Home;
