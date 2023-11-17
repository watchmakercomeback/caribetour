import React from 'react';
import { Paper, Typography } from '@mui/material';

const TextBanner = ({ text, bgColor, textColor }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: bgColor,
    margin: '0 auto',
    padding: '20px 0px',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0px'
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    wordWrap: 'break-word',
    maxWidth: '1200px',
    color: textColor,
  };

  return (
    <Paper elevation={3} style={containerStyle}>
      <Typography variant="body1" style={textStyle}>
        {text.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </Typography>
    </Paper>
  );
};

export default TextBanner;