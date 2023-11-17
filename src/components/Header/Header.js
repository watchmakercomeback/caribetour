import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#cea637 !important',
  },
  title: {
    flexGrow: 1,
    color: '#224e67',
    fontWeight: '600 !important',
    fontSize: '1.75rem !important'
  },
  instagramIcon: {
    color: '#224e67',
    fontSize: '40px !important', // Set the size of the Instagram icon
    marginLeft: '5px', // Add some margin for better spacing
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img src="/assets/logo-caribe.png" alt="Caribe Tour Logo" height="60" width="60" />
        <Typography variant="h6" className={classes.title}>
          Caribe Tour
        </Typography>
        <IconButton
          edge="end"
          color="#224e67"
          href="https://instagram.com/caribeburgertour?igshid=NGVhN2U2NjQ0Yg=="
          target="_blank"
          rel="noopener noreferrer"
          className={classes.iconButton}
        >
          <span style={{ fontSize: '1.3rem', marginRight: '5px' }}>@caribeburgertour</span>
          <InstagramIcon className={classes.instagramIcon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;