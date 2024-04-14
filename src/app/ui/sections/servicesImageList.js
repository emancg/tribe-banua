'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import SimpleStack from '../layout/stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import linkStyles from '../../styles/Link.module.css';

import Link from 'next/link';
import StyledLink from '../layout/link';


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const SimpleBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  justifyContent: 'center',
  textAlign: 'center',
  paddingTop: 10,
  height: '100vh',
  // backgroundImage: `url('./services-bg.jpg')`,
  backgroundSize: 'cover',
  // backgroundColor: '#214675',
  backgroundColor: 'transparent',
  // backgroundBlendMode: 'multiply',
  // backgroundAttachment: 'fixed',
  // backgroundColor: 'rgba(0, 0, 0, .8)',
  // backgroundBlendMode: 'darken',
  color: 'white'
}));

const ItemBox = styled(Paper)(({ theme }) => ({
  width: 'auto',
  height: '19vh',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  backgroundPosition: 'left',
  justifyContent: 'end',
  color: 'white',
  // textShadow: '2px 2px 5px white',
  cursor: 'pointer',
  borderRadius: '25px',
  marginLeft: '25px',
  marginRight: '25px',
  marginBottom: '15px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
  // borderLeft: '6px solid gray',
  boxShadow: '-2px 2px gray',
  textDecoration: 'none',
}));

export default function ServicesImageList() {
  console.log(linkStyles.link);
  return (
    <SimpleBox maxWidth={'sm'} id="services-section">

      <h1>OUR SERVICES</h1>
      <SimpleStack>
        <StyledLink linkRef='/services/expeditions'>
        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./expeditions.jpg')` }}>
          <h2>EXPEDITIONS</h2>
        </ItemBox>
      </StyledLink>

      <StyledLink linkRef='/services/island-tours'>
        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./island-tours.jpg')` }}>
          <h2>ISLAND TOURS</h2>
        </ItemBox>
      </StyledLink>

      <StyledLink linkRef='/services/ferry'>
        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./ferry-transfer.jpg')` }}>
          <h2>FERRY TRANSFER</h2>
        </ItemBox>
      </StyledLink>

      <StyledLink linkRef='/services/van'>
        <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./van-transfer.jpg')` }}>
          <h2>VAN TRANSFER</h2>
        </ItemBox>
      </StyledLink>
    </SimpleStack>
    </SimpleBox >
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Expedition Tour',
    author: '@bkristastucchio',
    rows: 1,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Island Hopping',
    author: '@rollelflex_graphy726',
    rows: 1,
    cols: 2,
    featured: true
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Transportation',
    author: '@helloimnik',
    rows: 1,
    cols: 2
  }
];