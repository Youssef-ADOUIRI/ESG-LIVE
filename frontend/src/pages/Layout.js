import React, { useState } from "react";
import Headeresg from "../components/Headeresg";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import ListIcon from "@mui/icons-material/List";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";

const Layout = () => {
  const anchor = "left";
  const list = () => (
    <Box
      sx={{
        width: 250,
        fontFamily: "Raleway",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "10px",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="/logo/Logo-ESG.png"
          className="layout__nav__logoesg__centered"
          alt="logo"
        ></img>
      </Link>
      <List>
        <ListItem key={"Ranking"} disablePadding className="layout__list_item">
          <Link
            to={"/ranking"}
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-around"
          >
            <ListIcon className="layout__list_item_icon" />
            <ListItemText
              primary={"Ranking"}
              className="layout__list_item_text"
            />
          </Link>
        </ListItem>
      </List>
      <Divider sx={{ width: "80%", mx: "auto" }} />
      <List>
        <ListItem key={"Matches"} disablePadding className="layout__list_item">
          <Link
            to={"/matches"}
            style={{ textDecoration: "none" }}
            className="d-flex justify-content-around"
          >
            <SportsBaseballOutlinedIcon className="layout__list_item_icon" />
            <ListItemText
              primary={"Matches"}
              className="layout__list_item_text"
            />
          </Link>
        </ListItem>
      </List>
      <SocialMedia />
    </Box>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const [state, setState] = useState(false);
  return (
    <div className="layout_div">
      <nav className="layout__nav d-flex justify-content-between">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="/logo/Logo-ESG.png"
            className="layout__nav__logoesg"
            alt="logo"
          ></img>
        </Link>
        <div />
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(true)}>
            <MenuRoundedIcon className="layout__nav__button" />
          </Button>
          <Drawer open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </nav>
      <div className="App d-flex">
        <Headeresg />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
