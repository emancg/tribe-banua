'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import ServicesLink from './servicesLink';

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
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  backgroundBlendMode: 'darken',
  // borderLeft: '6px solid gray',
  // boxShadow: '-2px 2px white',
  boxShadow: '1px 5px 10px black',
  textDecoration: 'none',
  textShadow: '1px 1px 10px black',
}));

export default function ServicesStack(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={0}>
        <ServicesLink linkRef='/services/expeditions' itemIndex={0} hideValue={props.hiddenItem}>
          <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./expeditions.jpg')`, backgroundPositionY: '65%', }}>
            <h2>EXPEDITIONS</h2>
          </ItemBox>
        </ServicesLink>

        <ServicesLink linkRef='/services/island-tours' itemIndex={1} hideValue={props.hiddenItem}>
          <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./island-tours.jpg')` }}>
            <h2>ISLAND TOURS</h2>
          </ItemBox>
        </ServicesLink>

        <ServicesLink linkRef='/services/ferry' itemIndex={2} hideValue={props.hiddenItem}>
          <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./ferry-transfer.jpg')` }}>
            <h2>FERRY TRANSFER</h2>
          </ItemBox>
        </ServicesLink>

        <ServicesLink linkRef='/services/van' itemIndex={3} hideValue={props.hiddenItem}>
          <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('./van-transfer.jpg')` }}>
            <h2>VAN TRANSFER</h2>
          </ItemBox>
        </ServicesLink>
      </Stack>
    </Box>
  );
}