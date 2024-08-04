import React from 'react';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Favorites() {
  return (
    <div>
      <Header />
      <Typography variant="h4" sx={{ m: 2 }}>Página de Favoritos</Typography>
      <Footer />
    </div>
  );
}

export default Favorites;