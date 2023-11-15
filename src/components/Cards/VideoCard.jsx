import React from "react";
import { Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ImageComponent from "../utility/ImageComponent";

function VideoCard({  title, posterPath }) {
  return (
    <>
      <div className="w-[300px] scaleComponent">
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "185px",
              borderRadius: "12px",
            }}
          >
            <ImageComponent posterPath={posterPath} />
          </div>

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              translate: "-50% -50%",
            }}
          >
            <PlayArrowRoundedIcon
              className="text-white scaleComponent"
              sx={{ fontSize: "5rem" }}
            />
          </div>
        </div>
      </div>
      <div className="text-center text-white mt-2">
        <Typography variant="h4" fontSize={17} fontWeight={"bold"}>
          {title} trailer
        </Typography>
        <Typography variant="h6" fontSize={15}>
          Final Trailer
        </Typography>
      </div>
    </>
  );
}

export default VideoCard;
