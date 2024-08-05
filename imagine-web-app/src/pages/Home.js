import React from 'react';
import Header from '../components/Header';
import CategoryIcons from '../components/CategoryIcons';
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';
import { TextField, Typography, Grid } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="¿Buscas algo personalizado? Pregúntale a AMALia"
          sx={{ mb: 2, bgcolor: 'background.paper' }}
        />
        <CategoryIcons />
        <Grid container spacing={2}>
          {/* Aquí irían las experiencias, usando el componente ExperienceCard */}
          <Grid item xs={12} sm={6} md={4}>
            <ExperienceCard
              name="Visita la Alcazaba"
              location="Málaga"
              date="Recogida hoy 20:00 - 21:00"
              rating={4.4}
              price={3.99}
              image="/path-to-image.jpg"
            />
          </Grid>
          {/* Repite para más experiencias */}
        </Grid>
      </main>
      <Footer />
    </div>
  );
}

export default Home;