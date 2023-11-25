import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Backdrop,
  Fade,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#e75817',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    zIndex: '9999999',
    borderRadius: theme.shape.borderRadius,
    width: '80%',

    [theme.breakpoints.up('md')]: {
      width: '45%',
    },
  },
  closeButton: {
    position: 'absolute  !important',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: '#fff !important',
  },
  imageContainer: {
    height: 'auto',
    maxHeight: '300px',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    [theme.breakpoints.up('md')]: {
      maxHeight: '500px',
    }
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '300px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '500px',
    }
  },
  title: {
    marginTop: '20px  !important',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px  !important',
    },
  },
  description: {
    marginTop: '20px  !important',
    [theme.breakpoints.up('md')]: {
      marginTop: '20px !important',
      paddingLeft: '30px',
      paddingRight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '10px',
      paddingRight: '10px',
    },
  }
}));

const ParticipantModal = ({ open, burgerImageLink, onClose, burgerName, burgerDescription }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box className={classes.paper}>
          <IconButton className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
          <Grid container spacing={0} className={classes.container}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <div className={classes.imageContainer}>
                <img
                  src={burgerImageLink}
                  alt='burguer'
                  className={classes.image}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={9}>
              <Typography variant="h6" className={classes.title}>{burgerName}</Typography>
              <Typography variant="body1" className={classes.description}>{burgerDescription}</Typography>
            </Grid>
            
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ParticipantModal;