import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import "./PanelTabsGames.css";
import MatchesList from "./MatchesList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="PanelTabsGames__mui_tabpanel"
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#1B91BF",
    borderRadius: 2,
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.7)",
    "&.Mui-selected": {
      color: "#1B91BF",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const PanelTabsGamesMatches = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="PanelTabsGames__mui_Box" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
        >
          <StyledTab label="ALL" {...a11yProps(0)} />
          <StyledTab label="FOOTBALL" {...a11yProps(1)} />
          <StyledTab label="BASKETBALL" {...a11yProps(2)} />
          <StyledTab label="VOLLEYBALL" {...a11yProps(3)} />
          <StyledTab label="TENNIS" {...a11yProps(4)} />
          <StyledTab label="PING-PONG" {...a11yProps(5)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MatchesList sport="" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MatchesList sport="fb" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MatchesList sport="bb" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MatchesList sport="vb" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MatchesList sport="te" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <MatchesList sport="pp" />
      </TabPanel>
    </Box>
  );
};

export default PanelTabsGamesMatches;
