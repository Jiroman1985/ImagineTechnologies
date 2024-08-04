import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <LocationOnIcon color="primary" />
          <Typography variant="body1" color="textSecondary" sx={{ ml: 1 }}>
            Girón, Málaga
          </Typography>
          <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
            en 1 km
          </Typography>
        </Box>
        <Button color="primary" variant="outlined">
          Iniciar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;