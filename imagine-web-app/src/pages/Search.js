import React from 'react';
import { Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Search() {
  return (
    <div>
      <Header />
      <Typography variant="h4" sx={{ m: 2 }}>Página de Búsqueda</Typography>
      <Footer />
    </div>
  );
}

export default Search;