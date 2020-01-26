import React, { Component } from "react";
import { movies$ } from "./movies";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks"
  };

  componentDidMount() {
    /*fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
    )
      .then(res => res.json())*/
    movies$.then(
      result => {
        console.log(result);
        this.setState({
          track_list: result
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
