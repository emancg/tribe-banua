'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * FooterSection Component
 *
 * Display contact information and social links in footer
 *
 * @param {Object} config - Footer configuration object
 * @param {string} config.title - Footer section title
 * @param {Array} config.contactInfo - Array of contact/social items
 * @param {string} config.contactInfo[].icon - MUI icon name
 * @param {string} config.contactInfo[].type - Type (social, contact, website)
 * @param {string} config.contactInfo[].label - Display text
 * @param {string} config.contactInfo[].href - Link URL
 */

const FooterContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: 'transparent',
  display: 'flex',
  paddingTop: 10,
  paddingBottom: 20,
  color: 'white',
  verticalAlign: 'middle',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  '& p': {
    marginTop: 7,
    color: 'white',
  },
  textShadow: '5px 5px 5px black',
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

export default function FooterSection({ config }) {
  if (!config) {
    return null;
  }

  return (
    <FooterContainer maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom>
        {config.title}
      </Typography>

      <Stack
        direction="column"
        spacing={2}
        margin={1}
        sx={{ textAlign: 'left' }}
      >
        {config.contactInfo && config.contactInfo.map((item, index) => {
          // Resolve icon from string name
          const IconComponent = MuiIcons[item.icon] || MuiIcons.Info;

          return (
            <Grid container columns={12} columnSpacing={1} key={index}>
              <Grid item xs={2} sm={1}>
                <IconComponent fontSize="large" />
              </Grid>
              <Grid item xs={10}>
                <StyledLink href={item.href} target={item.type === 'social' ? '_blank' : undefined}>
                  <Typography component="p">{item.label}</Typography>
                </StyledLink>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </FooterContainer>
  );
}
