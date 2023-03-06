import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {
  return (
    <div className="d-flex p-3 mt-auto mx-auto">
      <a href="https://www.instagram.com/engineerssportgames/" style={{ textDecoration: "none" }}>
        <InstagramIcon
          sx={{ minWidth: "7px", color: "#1B91BF", margin: "5px" }}
        />
      </a>
      <a href="https://www.facebook.com/EngineersSportGames/" style={{ textDecoration: "none" }}>
        <FacebookIcon
          sx={{ minWidth: "7px", color: "#1B91BF", margin: "5px" }}
        />
      </a>
      <a href="https://www.linkedin.com/company/engineers-sport-games/" style={{ textDecoration: "none" }}>
        <LinkedInIcon
          sx={{ minWidth: "7px", color: "#1B91BF", margin: "5px" }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
