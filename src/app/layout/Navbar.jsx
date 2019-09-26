import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,Link,IconButton,  Typography } from '@material-ui/core';
import {AccountCircle} from "@material-ui/icons";

const useStyles = theme => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#673ab7'

      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
        textAlign:'left',
      },
      link: {
        margin: theme.spacing(1, 1.5),
      },
});


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

export default withStyles(useStyles)(Navbar);
