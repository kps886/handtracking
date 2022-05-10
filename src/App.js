import "./App.css";
import Navabar from "./components/Navabar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Router>
        <Navabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
