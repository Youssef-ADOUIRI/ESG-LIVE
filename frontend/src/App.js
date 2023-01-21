import React from "react";
import "./App.css";
import Headeresg from "./components/Headeresg";
import PanelTabsGames from "./components/PanelTabsGames";

const App = () => {
  return (
    <div className="App d-flex">
      {/* <nav>
        <img
          className="nav__esglogo"
          src="/logo/Logo-ESG.png"
          alt="nav__esglogo"
        ></img>
      </nav> */}
      <Headeresg />
      <PanelTabsGames />
    </div>
  );
};

export default App;
