import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    lightTheme: true,
    light: {
      color: "#555",
      bTitle: "#cdc",
      background: "#ddd",
      Bcolor: "#27f",
      Bbackground: "#fff",
    },
    dark: {
      color: "#ddd",
      ui: "#333",
      background: "#555",
      Bcolor: "#f31",
      Bbackground: "#222",
    },
  };

  handleTheme = () => {
    this.setState({
      lightTheme: !this.state.lightTheme,
    });
  };

  setTrackList = (list) => {
    this.setState({
      track_list: list,
    });
  };

  fetchBySong = (song) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&page=1&page_size=20&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
    );
  };

  fetchByArtist = (artist) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${artist}&page=1&page_size=20&s_track_rating=desc&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
    );
  };

  fetch = null;

  findSongs = (type, input) => {
    //type === "Song" ? this.fetchBySong(input) : this.fetchByArtist(input);
    if (type === "Song") {
      this.fetch = this.fetchBySong(input);
    } else {
      this.fetch = this.fetchByArtist(input);
    }
    this.fetch
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            track_list: result.message.body.track_list,
            heading: "Search Results",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  fetchTopSongs() {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=20&country=fr&f_has_lyrics=1&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            track_list: result.message.body.track_list,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    if (!sessionStorage.getItem("Track List")) {
      this.fetchTopSongs();
    } else {
      console.log("using data from Session storage");
    }
  }

  componentWillMount() {
    if (
      sessionStorage.getItem("Track List") &&
      sessionStorage.getItem("Heading") &&
      sessionStorage.getItem("isLightTheme")
    ) {
      this.setState({
        track_list: JSON.parse(sessionStorage.getItem("Track List")),
        heading: JSON.parse(sessionStorage.getItem("Heading")),
        lightTheme: JSON.parse(sessionStorage.getItem("isLightTheme")),
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    sessionStorage.setItem("Track List", JSON.stringify(nextState.track_list));
    sessionStorage.setItem("Heading", JSON.stringify(nextState.heading));
    sessionStorage.setItem("isLightTheme", nextState.lightTheme);
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          findSongs: this.findSongs,
          handleTheme: this.handleTheme,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
