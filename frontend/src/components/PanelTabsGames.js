import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import FootballRanking from "./games/FootballRanking";
import VolleyballRanking from "./games/VolleyballRanking";
import BasketballRanking from "./games/BasketballRanking";
import { borderRight } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

const PanelTabsGames = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", m: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Football" {...a11yProps(0)} />
          <Tab label="Basketball" {...a11yProps(1)} />
          <Tab label="Volleyball" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FootballRanking />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VolleyballRanking />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BasketballRanking />
      </TabPanel>
    </Box>
  );
};

export default PanelTabsGames;
