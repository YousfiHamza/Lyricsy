import React, { Component } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

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
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <div classname="card-header">
              {track.track_name} by{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong className="mr-3">Album :</strong>
              {track.album_name} ( ID : {track.album_id})
            </li>
            {/* <li className="list-group-item">
              <strong className="mr-3">Type :</strong>
              {
                track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name
              }
            </li> */}
            <li className="list-group-item">
              <strong className="mr-3">Explicit :</strong>
              {track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong className="mr-3">Release Date :</strong>
              <Moment format="DD/MM/YYYY">{track.updated_time}</Moment>
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}
