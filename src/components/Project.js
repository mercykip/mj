import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className="category-tabs"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="React" {...a11yProps(0)} />

          <Tab label="Flutter" {...a11yProps(1)} />
          <Tab label="Angular" {...a11yProps(2)} />
          <Tab label="HTML/CSS/js" {...a11yProps(3)} />

        </Tabs>
      </AppBar>
      {/*  Django*/}



      <TabPanel value={value} index={0}>
        <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
            <CardTitle style={{ color: "#000", height: '176px', background: 'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover' }}>

            </CardTitle>

            <CardText>Issue Tracker</CardText>
            <CardActions border style={{ color: '#fff' }}>
              <Button href="https://github.com/mercykip/Issue-Tracker" colored>GitHub</Button>
              <Button href="https://issues-trackers.herokuapp.com" colored>View</Button>
              {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
              <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
          <br /><br />
          {/* UserProfile with redux*/}
          <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
            <CardTitle style={{ color: "#000", height: '176px', background: 'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover' }}>

            </CardTitle>

            <CardText>UserProfile redux  project</CardText>
            <CardActions border style={{ color: '#fff' }}>
              <Button href="https://github.com/mercykip/UserProfile" colored>GitHub</Button>
              <Button colored href="https://userprofilemercy.herokuapp.com/" >View</Button>
              {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
              <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
          <br /><br />
          {/* MoneyWallet Laravel front-end API*/}
          <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
            <CardTitle style={{ color: "#000", height: '176px', background: 'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover' }}>

            </CardTitle>

            <CardText>MoneyWallet  React front-end(Admin-side) for Laravel API project</CardText>
            <CardActions border style={{ color: '#fff' }}>
              <Button href="https://github.com/mercykip/Money-Wallet-Admin-React-project" colored>GitHub</Button>
              <Button colored>View</Button>
              {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
              <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
          <br /><br />
          {/* My portfolio */}
          <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
            <CardTitle style={{ color: "#000", height: '176px', background: 'url(https://www.import.io/wp-content/uploads/2017/10/React-logo.png) center / cover' }}>
            </CardTitle>
            <CardText>React Portfolio Project</CardText>
            <CardActions border style={{ color: '#fff' }}>
              <Button href="https://mercykip.github.io/portfolio-deploy/" colored>GitHub</Button>
              <Button colored>View</Button>
              {/* <Button colored>MoreProject</Button> */}
            </CardActions>
            <CardMenu style={{}}>
              <IconButton name='share'></IconButton>
            </CardMenu>
          </Card>
          <br /><br />



        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }} className="card">
          <CardTitle style={{ color: "", height: '176px', background: 'url(https://logowik.com/content/uploads/images/flutter5786.jpg) center / cover' }}>

          </CardTitle>
          <CardText>Flutter mini-projects</CardText>
          <CardActions border style={{ color: '#fff' }}>
            <Button href="https://github.com/Learn-Flutter-Development/learn-flutter-development" colored>GitHub</Button>
            <Button colored>View</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name='share'></IconButton>
          </CardMenu>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
          <CardTitle style={{ color: "", height: '176px', background: 'url(https://www.javascript.ba/system/posts/images/000/000/005/original/Agencia-desarrollo-Angular-JS.jpg) center / cover' }}>

          </CardTitle>

          <CardText>MoneyWallet  Angular 2+ front-end(Admin-side) part of springbooot API project</CardText>
          <CardActions border style={{ color: '#fff' }}>
            <Button href="https://github.com/mercykip/Money-wallet" colored>GitHub</Button>
            <Button colored>View</Button>
            {/* <Button colored>MoreProject</Button> */}
          </CardActions>
          <CardMenu style={{}}>
            <IconButton name='share'></IconButton>
          </CardMenu>
        </Card>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>
          <CardTitle style={{ color: "", height: '176px', background: 'url(https://www.croitresoftwares.com/images/dd/front-end.jpg) center / cover' }}>

          </CardTitle>
          <CardText>    HTML/CSS/Bootstrap/js   Dispensary system</CardText>
          <CardActions border style={{ color: '#fff' }}>
            <Button href="https://github.com/mercykip/Dispensary" colored>GitHub</Button>
            <Button colored>View</Button>
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name='share'></IconButton>
          </CardMenu>
        </Card>
      </TabPanel>
    </div>
  );
}
