import React, { Component } from "react";
import { Consumer } from "../context";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { findSongs, lightTheme, light, dark } = value;
          const theme = lightTheme ? light : dark;
          return (
            <div
              className="card card-body mb-4 p-4"
              style={{ color: theme.Bcolor, background: theme.background }}
            >
              <h1 className="display-4 text-center">
                <i className="fas fa-music" /> Search For Songs
              </h1>
              <p className="lead text-center">Get The Lyrics For Any Song</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="--> Song Title / Artist ..."
                  name="trackTitle"
                  value={this.state.trackTitle}
                  onChange={this.handleChange}
                  style={{ textAlign: "center" }}
                />
              </div>
              <div className="d-flex justify-content-around flex-wrap">
                <button
                  style={{
                    background: theme.Bcolor,
                    color: theme.Bbackground,
                    border: "solid",
                    borderRadius: "5rem",
                  }}
                  className="btn btn-lg mt-3 display-flex justify-content-around "
                  name="Artist"
                  onClick={(e) =>
                    findSongs(e.target.name, this.state.trackTitle)
                  }
                >
                  <i class="fas fa-user-circle mr-1" /> Search By Artist{" "}
                </button>
                <button
                  style={{
                    background: theme.Bcolor,
                    color: theme.Bbackground,
                    border: "solid",
                    borderRadius: "5rem",
                  }}
                  className="btn  btn-lg mt-3"
                  name="Song"
                  onClick={(e) =>
                    findSongs(e.target.name, this.state.trackTitle)
                  }
                >
                  <i className="fas fa-music" /> Search By Song{" "}
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
