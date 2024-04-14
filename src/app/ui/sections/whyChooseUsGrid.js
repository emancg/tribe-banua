import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SailingIcon from '@mui/icons-material/Sailing';
import Groups3Icon from '@mui/icons-material/Groups3';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Divider from '@mui/material/Divider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  height: 300,
  margin: 10
}));

const WhyChooseUsBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  flexGrow: 1,
  justifyContent: 'center',
  textAlign: 'center',
  height: 'auto',
  color: 'white'

}));

export default function WhyChooseUs() {
  return (
    <WhyChooseUsBox maxWidth={'sm'} id="whychooseus-section">
      {/* <Divider /> */}
      <h2>WHY CHOOSE US?</h2>
      <Grid container>
        {itemData.map((item) => (
          <Grid item xs={6} sm={6} key={itemData.indexOf(item)}>
            <Item variant="elevation" elevation={16} key={itemData.indexOf(item)}>
              <h3>{item.title}</h3>
              {itemIcons[itemData.indexOf(item)]}
              <p>{item.subtitle}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </WhyChooseUsBox>
  );
}

const itemIcons = [
  <SailingIcon fontSize='large' color='primary' key={0}/>,
  <Groups3Icon fontSize='large' color='secondary' key={1}/>,
  <VerifiedUserIcon fontSize='large' sx={{ color: 'green' }}  key={2}/>,
  <AutoAwesomeIcon fontSize='large' sx={{ color: 'gold' }} key={3}/>

]

const itemData = [
  {
    title: 'Successful Expeditions',
    img: '',
    subtitle: 'A history of successful and meticulously planned journeys to remote paradises and untamed natural wonders.'
  },
  {
    title: 'Expert Crew',
    img: '',
    subtitle: 'Rest assured with our expert crew, who bring a wealth of knowledge, safety, and enthusiasm to every expedition.'
  },
  {
    title: 'Trustworthy',
    img: '',
    subtitle: 'Built on a foundation of integrity, transparency, and a proven track record of delivering exceptional expedition experiences.'
  },
  {
    title: 'Highly Rated',
    img: '',
    subtitle: 'Backed by high ratings and glowing reviews from satisfied clients who have experienced unforgettable adventures with us.'
  }
]