import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_List: [],
    heading: "Top 10 Tracks"
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b298fcc7dcb52f736b2628e316528555`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            track_List: result.message.body.track_list
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
