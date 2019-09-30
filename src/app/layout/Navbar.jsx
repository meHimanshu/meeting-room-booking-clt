import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Menu,
  MenuItem
} from "@material-ui/core";
import styles from "./styles";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggenIn: false,
      email: "",
      openDropdown: false,
      anchorEl: null
    };
  }

  logout = () => {
    localStorage.removeItem("isAuthenticated");
    this.setState({
      openDropdown: false
    });
    this.props.history.push("/");
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
      openDropdown: true
    });
  };

  handleClose = () => {
    this.setState({
      openDropdown: false
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              Book Room
            </Typography>
            <nav>
              <Link
                variant="button"
                color="inherit"
                href={`/rooms`}
                className={classes.link}
              >
                Rooms
              </Link>
              <Link
                variant="button"
                color="inherit"
                href={`/my-booking`}
                className={classes.link}
              >
                My Bookings
              </Link>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleClick}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={this.state.openDropdown}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 40 * 4.5,
                    width: 200
                  }
                }}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                <MenuItem onClick={this.logout}>Logout</MenuItem>
              </Menu>
            </nav>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));
