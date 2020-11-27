import React from "react";
import ReactPlayer from "react-player";
import video from "./asserts/Video/Ladu_Lalit.mp4";
function Videos() {
  return (
    <div>
      {/* // Render a YouTube video player */}
      <ReactPlayer url={video} controls={true} width="100%" />
    </div>
  );
}
export default Videos;
