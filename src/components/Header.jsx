import React, { useEffect, useState } from 'react';
import { Drawer } from '../components'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const tabNames = ["HOME", "ABOUT", "PRODUCTS",]
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  // const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    // this function is use to set the focus on persent tab
    //   console.log(window.location.pathname);
    // console.log(window.location.href);
    let link = window.location.pathname;
    link = link.split('/')[1]
    const tab_index = tabNames.indexOf(link.toLocaleUpperCase());
    if (tab_index < 0) { return }
    setValue(tab_index);
  }, [tabNames]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(`/${tabNames[newValue].replace(' ', '')}`)
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Hidden smUp>
          <Toolbar>
            <Drawer side='left' iconEdge="start"
              itemsList={tabNames}
              itemsClickHandler={handleChange}
            />
          </Toolbar>
        </Hidden>

        <Hidden xsDown>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            {tabNames.map((name, id) => (<Tab key={id} label={name} />))}
          </Tabs>
        </Hidden>
      </AppBar>
    </div>
  );
}
