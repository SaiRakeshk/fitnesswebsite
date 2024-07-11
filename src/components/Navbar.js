import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212' }}>BMI Calculator</Link>
      <Link
        to="/foodnutrition"
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid transparent',
          position: 'relative', // Ensure relative positioning
          zIndex: 1101, // Ensure it is above the hero banner image
        }}
      >
        Food Nutrition
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
