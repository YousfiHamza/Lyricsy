import React from "react";
import { Link } from "react-router-dom";

const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-md">
        <div className="card-body">
          <h5 className="text-center">
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
          >
            <strong>
              <i class="far fa-hand-point-right mr-2"></i> View Lyrics{" "}
            </strong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
