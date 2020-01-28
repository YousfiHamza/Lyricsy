import React from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../../context";
const Track = props => {
  const { track } = props;
  return (
    <Consumer>
      {value => {
        const { lightTheme, light, dark } = value;
        const theme = lightTheme ? light : dark;
        return (
          <div className="col-md-6">
            <div
              className="card mb-4 shadow-md"
              style={{ color: theme.color, background: theme.background }}
            >
              <div className="card-body">
                <h5
                  className="text-center"
                  style={{
                    color: theme.Bcolor
                  }}
                >
                  <i class="far fa-play-circle mr-1"></i>
                  {track.track_name}
                </h5>
                <p className="card-text">
                  <strong>
                    <i className="fas fa-user-circle mr-1"></i> Artist :
                  </strong>
                  {track.artist_name}
                  <br />
                  <strong>
                    <i className="fas fa-compact-disc mr-1"></i> Album :
                  </strong>
                  {track.album_name}
                </p>
                <Link
                  to={`lyrics/track/${track.track_id}`}
                  className="btn btn-dark btn-block"
                  style={{
                    background: theme.Bcolor,
                    color: theme.Bbackground,
                    border: "solid",
                    borderRadius: "5rem"
                  }}
                >
                  <strong>
                    <i class="far fa-hand-point-right mr-2"></i> View Lyrics{" "}
                  </strong>
                </Link>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Track;
