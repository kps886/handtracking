import React from "react";
import { useState } from "react";
import TrackingComponent from "./TrackingComponent";
import illustration from "../assets/illustration.png";

const Home = () => {
  const [btn, setBtn] = useState(false);
  let utterance = new SpeechSynthesisUtterance("Hello world!");
  return (
    <>
      {!btn && (
        <div className="hero-section">
          <p className="hero-section-heading">
            HANDTRACKING <br /> CALCULATOR
          </p>
          <img className="threeDimg" src={illustration} alt="illustration" />
        </div>
      )}
      {!btn && (
        <button className="start-btn btn" onClick={() => setBtn(!btn)}>
          Start Calculator
        </button>
      )}
      {btn && <TrackingComponent />}
    </>
  );
};

export default Home;
