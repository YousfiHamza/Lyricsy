import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { Consumer } from "../../context";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            lyrics: result.message.body.lyrics
          });
          return fetch(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_LYRICSY_MUSIXMATCH_API_KEY}`
          ).then(res => res.json());
        },
        error => {
          console.log(error);
        }
      )
      .then(
        res => {
          console.log(res);
          this.setState({
            track: res.message.body.track
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    const { lyrics, track } = this.state;
    return (
      <Consumer>
        {value => {
          const { lightTheme, light, dark } = value;
          const theme = lightTheme ? light : dark;
          if (
            track === undefined ||
            Object.keys(track).length === 0 ||
            lyrics === undefined ||
            Object.keys(lyrics).length === 0
          ) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <Link
                  to="/"
                  className="btn mb-4"
                  style={{
                    background: theme.Bcolor,
                    color: theme.Bbackground,
                    border: "solid",
                    borderRadius: "5rem"
                  }}
                >
                  Go Back
                </Link>
                <div
                  className="card"
                  style={{
                    color: theme.color,
                    background: theme.background,
                    border: "solid",
                    borderRadius: "1rem"
                  }}
                >
                  <div classname="card-header">
                    <span
                      style={{
                        textTransform: "uppercase",
                        textDecoration: "underline",
                        color: theme.Bcolor,
                        margin: "3rem 3rem"
                      }}
                    >
                      {track.track_name}
                    </span>{" "}
                    BY :{" "}
                    <span
                      style={{
                        textTransform: "uppercase",
                        textDecoration: "underline",
                        color: theme.Bcolor,
                        padding: "3rem 3rem"
                      }}
                    >
                      {track.artist_name}
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{lyrics.lyrics_body}</p>
                  </div>
                </div>
                <ul className="list-group mt-3">
                  <li
                    className="list-group-item"
                    style={{
                      color: theme.color,
                      background: theme.background
                    }}
                  >
                    <strong className="mr-3">Album :</strong>
                    {track.album_name} ( ID : {track.album_id})
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      color: theme.color,
                      background: theme.background
                    }}
                  >
                    <strong className="mr-3">Explicit :</strong>
                    {track.explicit === 0 ? "No" : "Yes"}
                  </li>
                  <li
                    className="list-group-item"
                    style={{
                      color: theme.color,
                      background: theme.background
                    }}
                  >
                    <strong className="mr-3">Release Date :</strong>
                    <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
                  </li>
                </ul>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
