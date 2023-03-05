import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { color } from "@mui/system";

const SocialMedia = () => {
  return (
    <div className="d-flex p-3 mt-auto mx-auto">
      <a href="https://www.instagram.com/engineerssportgames/" style={{ textDecoration: "none" }}>
        <InstagramIcon
          sx={{ minWidth: "7px", color: "#1B91BF", margin: "5px" }}
        />
      </a>
      <a style={{ textDecoration: "none" }}>
        <LinkedInIcon
          sx={{ minWidth: "7px", color: "#1B91BF", margin: "5px" }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
