import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/matches");
  }, [navigate]);
  return <div></div>;
};

export default Main;
