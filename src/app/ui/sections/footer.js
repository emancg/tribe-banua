'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'

import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';
import StyledLink from '../layout/link';


const FooterBox = styled(Box)(({ theme }) => ({
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
    p: {
        marginTop: 7,
        color: 'white',
    },
    textShadow: '5px 5px 5px black',

}));

export default function Footer() {
    return (
        <FooterBox maxWidth={'sm'}>
            <h2>CONTACT US</h2>
            <Stack direction="column" spacing={2} margin={1} sx={{ textAlign: 'left' }}>

                {/* <Grid container columns={12} columnSpacing={1}>
                    <Grid item xs={2} sm={1}>
                        <LanguageIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={10}>
                        <StyledLink linkRef="https://google.com"><p >www.tribebanuaexpeditions.com</p></StyledLink>
                    </Grid>
                </Grid> */}
                <Grid container columns={12} columnSpacing={1}>
                    <Grid item xs={2} sm={1}>
                        <FacebookIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={10}>
                        <StyledLink linkRef="https://google.com"><p>@facebook_page</p></StyledLink>
                    </Grid>
                </Grid>
                <Grid container columns={12} columnSpacing={1}>
                    <Grid item xs={2} sm={1}>
                        <InstagramIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={10}>
                        <StyledLink linkRef="https://google.com"><p>@instagram_page</p></StyledLink>
                    </Grid>
                </Grid>
                <Grid container columns={12} columnSpacing={1}>
                    <Grid item xs={2} sm={1}>
                        <PhoneIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={10}>
                        <StyledLink linkRef="https://google.com"><p>+63 9XX-XXX-XXXX</p></StyledLink>
                    </Grid>
                </Grid>
                <Grid container columns={12} columnSpacing={1}>
                    <Grid item xs={2} sm={1}>
                        <EmailIcon fontSize='large' />
                    </Grid>
                    <Grid item xs={10}>
                        <StyledLink linkRef="https://google.com"><p>tribebanuaexpeditions@gmail.com</p></StyledLink>
                    </Grid>
                </Grid>
            </Stack>
        </FooterBox>
    );
}