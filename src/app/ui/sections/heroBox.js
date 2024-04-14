'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';

import { styled } from '@mui/material/styles';

const Hero = styled(Box)(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundImage: `url('./heroimg.jpg')`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  backgroundPosition: 'center',
  justifyContent: 'end',
  color: '#F9EA9A',
  textShadow: '2px 2px 5px black',
  paddingBottom: 100,
}));


export default function HeroBox() {
  return (
    <Hero maxWidth={'sm'}>
      <h1>Your Once-in-a-Lifetime Tropical Island Boat Expedition Awaits!</h1>
      <Link href="#services-section"><Button variant='contained' sx={{backgroundColor: '#DE6B48'}}>Start your Journey</Button></Link>
    </Hero>
  );
}


// Embark on an unforgettable journey with our expeditions, navigating through secret treasures between stunning destinations. Immerse yourself in the untouched beauty of hidden paradises, unveiling the untamed allure of unexplored locations. Enriched by our adept guides, every journey promises a singular adventure, be it amid fellow explorers or in exclusive seclusion.