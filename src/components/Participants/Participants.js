import React, { useState } from 'react';
import participants from './info';
import { makeStyles } from '@mui/styles';
import { Grid, Box, Typography, Paper, Link } from '@mui/material';
import ParticipantModal from './ParticipantModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    '&:hover $overlay': {
      opacity: 0.95,
    },
  },
  imageContainer: {
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 'auto',
    maxWidth: '100%',
    height: '100%',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom, #224e67, #224e80)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    opacity: 0,
    transition: 'opacity 0.6s ease',
  },
  typography: {
    color: '#fff',
    fontSize: '1.3rem !important',
  },
  link: {
    textDecoration: 'none  !important',
    color: '#cea637 !important',
    fontWeight: 'bold !important',
    fontSize: '1.3rem !important',
  },
  container: {
    width: '100% !important',
    padding: '10px !important'
  },
  desktopMargin: {
    marginRight: '0px',
    marginLeft: '0px !important',
    padding: '40px 5px !important'
  }
}));

const Participants = () => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleBoxClick = (participant) => {
    setSelectedParticipant(participant);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <Grid container spacing={2} className={`${classes.container} ${isDesktop ? classes.desktopMargin : ''}`}>
      {participants.map((participant, index) => (
        <Grid item key={index} xs={12} sm={4} md={4} lg={3}>
          <Box
            className={classes.root}
            onClick={() => handleBoxClick(participant)} 
          >
            <div className={classes.imageContainer}>
              <img
                src={participant.imageLink}
                alt={participant.instagram}
                className={classes.image}
              />
            </div>
            <Paper elevation={0} className={classes.overlay}>
              <Typography variant="h6" className={classes.typography}>
                {participant.instagram}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                {participant.direccion}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                {participant.telefono}
              </Typography>
              <Typography variant="body1" className={classes.typography}>
                Horario:
              </Typography>
              {participant.horario.map((day) => (
                <Typography variant="body2" className={classes.typography} key={day}>
                  {day}
                </Typography>
              ))}
              <Link
                href={participant.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                View on Google Maps
              </Link>
            </Paper>
          </Box>
        </Grid>
      ))}
       <ParticipantModal
        open={modalOpen}
        onClose={handleCloseModal}
        participantName={selectedParticipant?.instagram} 
        participantHorario={selectedParticipant?.horario}
      />
    </Grid>
  );
};

export default Participants;