import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    background: "#ffffff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: { width: 70, padding: "13px" },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function TopBar() {
  const classes = useStyles();
  const handlePostJob = () => alert("Coming soon!");

  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <ElevationScroll>
      <AppBar className={classes.bar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton}
          color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
          <Link to="/">
            <img src="/logo.png" alt="logo" className={classes.logo} />
          </Link>
          <Typography variant="h6" className={classes.title} />
          <Button color="secondary" href="https://www.prevent.ai" target="_blank" disableRipple>
            About
          </Button>
          <Button color="primary" onClick={handlePostJob} disableRipple>
            Post a Job
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
