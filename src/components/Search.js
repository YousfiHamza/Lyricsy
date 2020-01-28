import React, { Component } from "react";
import { Consumer } from "../context";

export default class Search extends Component {
  state = {
    trackTitle: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { findSongs } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For A Song
              </h1>
              <p className="lead text-center">Get The Lyrics For Any Song</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song Title / Artist ..."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.handleChange}
                />
              </div>
              <div className="d-flex justify-content-around">
                <button
                  className="btn btn-primary btn-lg  mt-3"
                  name="Artist"
                  onClick={e => findSongs(e.target.name, this.state.trackTitle)}
                >
                  <i class="fas fa-user-circle mr-1" /> Search By Artist{" "}
                  <i class="fas fa-user-circle mr-1" />
                </button>
                <button
                  className="btn btn-primary btn-lg mt-3"
                  name="Song"
                  onClick={e => findSongs(e.target.name, this.state.trackTitle)}
                >
                  <i className="fas fa-music" /> Search By Song{" "}
                  <i className="fas fa-music" />
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
