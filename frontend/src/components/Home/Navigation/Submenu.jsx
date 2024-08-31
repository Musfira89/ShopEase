import React from 'react';
import { Box, Typography } from '@mui/material';

const Submenu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#333', // Assuming the background color is a dark shade similar to the image
        paddingX: '20px',
        paddingY: '10px',
      }}
    >
      {/* Adding some initial space before the first submenu */}
      <Box sx={{ flexGrow: 0.1 }} />

      {/* Submenu Items */}
      {['Furnture', 'Outdoor', 'Furnture', 'Outdoor' ,'Furnture', 'Outdoor',  'Furnture', 'Outdoor',  'Furnture', 'Outdoor',  'Furnture'].map((submenu, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginX: '10px',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {submenu}
        </Typography>
      ))}

      {/* Adding some space after the last submenu */}
      <Box sx={{ flexGrow: 0.1 }} />
    </Box>
  );
}

export default Submenu;
