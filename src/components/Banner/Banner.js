import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const Banner = ({ webImage, mobileImage, maxHeight }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const useStyles = makeStyles({
    banner: {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${isMobile ? mobileImage : webImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      maxHeight: maxHeight || '100vh',
    },
  });

  const classes = useStyles();

  return <div className={classes.banner} />;
};

export default Banner;