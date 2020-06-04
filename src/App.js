import React, { useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";

import Home from "./components/Home";
import Login from "./components/login";
// import Dashboard from './components/Dashboard';
import Forgotpassword from "./components/Forgotpassword";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ justifyContent: "center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Dashboard" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Forgotpassword />
      </TabPanel>
    </div>
  );
}

export default App;
