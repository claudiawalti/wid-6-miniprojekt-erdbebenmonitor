import { useState } from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { Map } from "./Map";

import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [button,setButton] = useState({});
  const [slider,setSlider] = useState(1);
  return (
    <div className="app">
      <Header />
      <Sidebar button= {button} setButton={setButton} slider = {slider} setSlider = {setSlider} />
      <div className="mainArea">
        <Map button= {button} setButton={setButton} slider = {slider}/>
      </div>
    </div>
  );
}

export default App;
