import React from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Backdrop,
  Fade,
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
    maxWidth: '80%',
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    zIndex: '9999999',
    borderRadius: theme.shape.borderRadius,
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
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    height: 'auto',
    maxHeight: '300px',
  }
}));

const ParticipantModal = ({ open, onClose, participantName, participantHorario }) => {
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
          <div className={classes.imageContainer}>
              <img
                src='/assets/hamburguesa.jpg'
                alt='burguer'
                className={classes.image}
              />
            </div>
          <Typography variant="h6">{participantName}</Typography>
          <Typography variant="body1">Horario:</Typography>
          {participantHorario?.map((day) => (
            <Typography variant="body2" key={day}>
              {day}
            </Typography>
          ))}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ParticipantModal;