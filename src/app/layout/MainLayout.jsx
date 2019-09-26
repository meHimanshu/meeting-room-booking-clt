import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import NavBar from './NavBar';
// import helpers from '../../helpers';

const NavigationBar = (props) => {

  const { classes, children, match: { path }, /*location: { pathname }*/ } = props;
  return (
    <div className={classes.root}>
      <React.Fragment>
        <AppBar position="static" className={classes.appbar}>
          <NavBar path={path} />
          {/* <div className={classes.div}>
            <Typography variant="title" color="inherit">
              <span className={classes.divContent}> <strong>{helpers.getRouteLabel(pathname.split('/notificationService')[1])}</strong></span>
            </Typography>
          </div> */}
        </AppBar>
        {children}
      </React.Fragment>
    </div>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationBar);
