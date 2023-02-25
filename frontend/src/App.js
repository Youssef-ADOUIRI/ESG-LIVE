import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Matches from "./pages/Matches";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="matches" element={<Matches />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
