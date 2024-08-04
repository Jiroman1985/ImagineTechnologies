import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ExperienceCard({ name, location, date, rating, price, image }) {
  return (
    <Card sx={{ maxWidth: 345, m: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <AccessTimeIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            {date}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <Rating value={rating} readOnly size="small" />
          <Typography variant="h6" color="primary">
            {price.toFixed(2)} €
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;