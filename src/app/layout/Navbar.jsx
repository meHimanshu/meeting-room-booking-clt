import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,Link,IconButton,  Typography } from '@material-ui/core';
import {AccountCircle} from "@material-ui/icons";
import styles from './styles';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggenIn: false,
            email: "",
        }
    }

    render() {
        const { classes } = this.props;
        return (
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Book Room
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Rooms
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              My Bookings
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </nav>
        </Toolbar>
      </AppBar>

        )
    }
}

export default withStyles(styles)(Navbar);
