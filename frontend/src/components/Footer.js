import React from "react";
import Divider from "@mui/material/Divider";
import "./Footer.css";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer>
      <Divider sx={{ width: "80vw", mx: "auto", mt: "100px" }} />
      <div className="footer__Sponsors">
        <h2 className="footer__Sponsors_our">OUR SPONSORS</h2>
        <div className="footer__Sponsors__group"></div>
      </div>
      <div className="footer__Sponsors__media d-flex flex-row-reverse">
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
