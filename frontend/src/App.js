import React from "react";
import "./App.css";
import Ranking from "./pages/Ranking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Matches from "./pages/Matches";
import Main from "./pages/Main";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/" element={<Layout />}>
          <Route path="matches" element={<Matches />} />
          <Route path="ranking" element={<Ranking />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
