import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Offerbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f2f2f2', // Light grey background (dark white)
        padding: '10px 0',
      }}
    >
      {/* Offer Text */}
      <Typography variant="body1" sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>
        Up to 50% off
      </Typography>
      <Link
        href="#"
        underline="hover"
        sx={{
          fontWeight: 'light',
          textDecoration: 'none',
          color: 'inherit',
          marginLeft: '10px', // Add space between text and link
          fontFamily: 'Poppins, sans-serif',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Select Outdoor furniture
      </Link>
      <Typography variant="body1" sx={{ marginLeft: '5px', fontFamily: 'Poppins, sans-serif' }}>
        →
      </Typography>
    </Box>
  );
}

export default Offerbar;
