import React from 'react';
import { Box, Typography } from '@mui/material';

const Menubar = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'white',
        padding: '20px 0',
      }}
    >
      {/* Menu Items */}
      {['Furniture', 'Outdoor', 'Kitchen', 'Lighting', 'Bedding & Bath', 'Rugs', 'Makeup'].map((menu, index) => (
        <Typography 
          key={index}
          variant="body1"
          sx={{
            margin: '0 30px',  // Increased gap between menu items
            color: '#888',      // Darkened font color
            fontSize: '16px',   // Increased font size
            cursor: 'pointer',
            '&:hover': {
              color: 'black',
            }
          }}
        >
          {menu}
        </Typography>
      ))}
    </Box>
  );
}

export default Menubar;
