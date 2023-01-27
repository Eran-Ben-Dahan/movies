import React from "react";
import "./LoaderSpinner.css";
import {
  InfinitySpin,
  Audio,
  BallTriangle,
  Hearts,
  Bars,
  CirclesWithBar,
  ColorRing,
} from "react-loader-spinner";

const LoaderSpinner = ({ width = 200, color = "#ecba25" }) => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 LoaderSpinner ">
      <div className="InfinitySpin">
        <InfinitySpin width={`${width}`} color={color} />
      </div>
      <div className="Audio">
        <Audio width={`${width}`} color={color} />
      </div>
      <div className="Hearts">
        <Hearts width={`${width}`} color={color} />
      </div>
      <div className="BallTriangle">
        <BallTriangle width={`${width}`} color={color} />
      </div>
      <div className="Bars">
        <Bars width={`${width}`} color={color} />
      </div>
      <div className="CirclesWithBar">
        <CirclesWithBar width={`${width}`} color={color} />
      </div>
      <div className="ColorRing">
        <ColorRing width={`${width}`} color={color} />
      </div>
    </div>
  );
};

export default LoaderSpinner;
