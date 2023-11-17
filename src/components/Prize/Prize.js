import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Prize = ({ imageLink, text }) => {
  return (
    <Card sx={{ 
      borderRadius: '8px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      height: '100%',
      backgroundColor: '#e75817', // Background color
      color: '#fff', // Text color
    }}>
      <CardMedia
        component="img"
        height="150px"
        width="150px"
        image={imageLink}
        alt="Prize Image"
        style={{
          borderRadius: '50%',
          margin: '30px auto', // Center the image horizontally
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          maxWidth: '150px',
          maxHeight: '150px'
        }}
      />
      <CardContent style={{ padding: '16px', marginTop: '-16px' }}>
        <Typography variant="h6" gutterBottom>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Prize;