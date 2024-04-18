'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
// import SimpleStack from '../layout/stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import linkStyles from '../../styles/Link.module.css';

import Link from 'next/link';
import StyledLink from '../layout/link';
import ServicesStack from '../layout/stack';

const SimpleBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: 10,
  minHeight: '50vh',
  // backgroundImage: `url('./services-bg.jpg')`,
  backgroundSize: 'cover',
  // backgroundColor: '#214675',
  backgroundColor: 'transparent',
  // backgroundBlendMode: 'multiply',
  // backgroundAttachment: 'fixed',
  // backgroundColor: 'rgba(0, 0, 0, .8)',
  // backgroundBlendMode: 'darken',
  color: 'white',
  h1: {
    textShadow: '5px 5px 5px black',
  }

}));

export default function ServicesImageList() {
  return (
    <SimpleBox maxWidth={'sm'} id="services-section">
      <h1>OUR SERVICES</h1>
        <ServicesStack hiddenItem={4}/>
    </SimpleBox >
  );
}