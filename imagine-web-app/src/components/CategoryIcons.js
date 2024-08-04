import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NatureIcon from '@mui/icons-material/Nature';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SportsIcon from '@mui/icons-material/Sports';
import SpaIcon from '@mui/icons-material/Spa';

const categories = [
  { icon: <HotelIcon />, name: 'Alojamiento' },
  { icon: <RestaurantIcon />, name: 'Hostelería' },
  { icon: <LocalBarIcon />, name: 'Gastronomía' },
  { icon: <NatureIcon />, name: 'Naturaleza' },
  { icon: <FamilyRestroomIcon />, name: 'Familia' },
  { icon: <TheaterComedyIcon />, name: 'Cultura' },
  { icon: <SelfImprovementIcon />, name: 'Personal' },
  { icon: <SportsIcon />, name: 'Deportes' },
  { icon: <SpaIcon />, name: 'Bienestar' },
];

function CategoryIcons() {
  return (
    <Grid container spacing={2} sx={{ my: 2 }}>
      {categories.map((category, index) => (
        <Grid item xs={4} sm={3} md={2} key={index}>
          <Paper elevation={0} sx={{ p: 1, textAlign: 'center', cursor: 'pointer' }}>
            {category.icon}
            <Typography variant="caption" display="block">
              {category.name}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryIcons;