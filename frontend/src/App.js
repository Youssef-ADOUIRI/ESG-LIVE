import React from "react";
import "./App.css";
import Ranking from "./pages/Ranking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Matches from "./pages/Matches";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Matches />} />
          <Route path="ranking" element={<Ranking />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
