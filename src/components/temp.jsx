import { useState } from "react";
import "./App.css";
import TrackingComponent from "./components/TrackingComponent";
import illustration from "./assets/illustration.png";

function App() {
  const [btn, setBtn] = useState(false);
  return (
    <div className="App">
      {/* {!btn && (
        <div className="hero-section">
          <p className="hero-section-heading">
            HANDTRACKING <br /> CALCULATOR
          </p>
          <img className="threeDimg" src={illustration} alt="illustration" />
        </div>
      )} */}
      {!btn && (
        <button className="start-btn btn" onClick={() => setBtn(!btn)}>
          Start Calculator
        </button>
      )}
      {btn && <TrackingComponent />}
    </div>
  );
}

export default App;
