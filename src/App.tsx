import React from "react";

import "./App.css";
import common from "./common.json";
import { pick } from "./util";
import Game from "./Jeu";

function App() {
  return <>
    <h1>Plamo!</h1>
    <div className="App">
      <Game target={pick(common)} />
    </div>
  </>;
}

export default App;