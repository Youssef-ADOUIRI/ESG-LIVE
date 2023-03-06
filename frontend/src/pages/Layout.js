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
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <img
        src="/logo/Logo-ESG.png"
        className="layout__nav__logoesg__centered"
        alt="logo"
      ></img>
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <ListItemText primary={"Home"} className="layout__list_item" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"Matches"} disablePadding>
          <ListItemButton>
            <Link to={"/matches"} style={{ textDecoration: "none" }}>
              <ListItemText primary={"Matches"} className="layout__list_item" />
            </Link>
          </ListItemButton>
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
        <img
          src="/logo/Logo-ESG.png"
          className="layout__nav__logoesg"
          alt="logo"
        ></img>
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
