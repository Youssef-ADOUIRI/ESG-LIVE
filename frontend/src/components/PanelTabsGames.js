import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import FootballRanking from "./games/FootballRanking";
import VolleyballRanking from "./games/VolleyballRanking";
import BasketballRanking from "./games/BasketballRanking";
import GlobalRanking from "./GlobalRanking";
import { styled } from "@mui/material/styles";

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

const PanelTabsGames = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", m: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Football" {...a11yProps(0)} />
          <StyledTab label="Basketball" {...a11yProps(1)} />
          <StyledTab label="Volleyball" {...a11yProps(2)} />
          <StyledTab label="Global" {...a11yProps(3)} />

        </StyledTabs>
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
      <TabPanel value={value} index={3}>
        <GlobalRanking />
      </TabPanel>
    </Box>
  );
};

export default PanelTabsGames;
