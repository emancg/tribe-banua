'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SimpleContainer from '@/app/ui/layout/container';
import Divider from '@mui/material/Divider';
import ContactUs from '@/app/ui/sections/contactUs';
import Footer from '@/app/ui/sections/footer';
import FeaturedItems from '@/app/ui/layout/featured';
import Paper from '@mui/material/Paper';
import SimpleStack from '@/app/ui/layout/stack';
import Link from 'next/link';
import StyledLink from '@/app/ui/layout/link';
import Button from '@mui/material/Button';
import ServicesStack from '@/app/ui/layout/stack';

const PageContainer = styled(Container)(({ theme }) => ({
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundImage: `url('../../van-transfer.jpg')`,
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundPositionX: 'center',
    backgroundSize: 'cover',
    paddingTop: 60,
}));

const PageBox = styled(Box)(({ theme }) => ({
    // minHeight: '50vh',
    height: 'auto',
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'justify',
    color: 'white',
    width: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    textShadow: '2px 2px 5px black',
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
    boxShadow: '-2px 2px gray'
}));

export default function ExpeditionsPage() {
    return (
        <PageContainer maxWidth='xl'>
            {/* <SimpleContainer>
                    <PageBox maxWidth='sm' sx={{ minHeight: '0', alignItems: 'start', paddingTop: '10px' }}>
                        <Link href={'/'}><Button variant='text' color='warning' size='large'>Home</Button></Link>
                    </PageBox>
                </SimpleContainer> */}
            <SimpleContainer>
                <PageBox maxWidth='sm'>
                    <h1>VAN TRANSFER</h1>
                    {/* <Box position={'relative'} height={'100%'} sx={{width: '90%', boxShadow: '10px 10px 10px black'}}>
                            <Image
                                fill
                                src="/expeditions-hero.jpg"
                                alt="expeditions"
                            />
                        </Box> */}

                    <p><strong>Route:</strong> Seamless transit between Puerto Princesa City and El Nido (vice versa) at a rate of 650 PHP per person</p>
                    <p><strong>Availability:</strong> From 4 am to 7 pm for pickup and dropoff, with airport pickup available</p>
                    <p><strong>Travel Time:</strong> Anticipate a travel duration of 5 to 6 hours</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h2>Ready for the trip?</h2>
                    <p>If you are, send us a message or connect with us thru our social accounts below.</p>
                    {/* <Divider sx={{borderColor:'white', width: '25%'}}></Divider> */}

                </PageBox>


            </SimpleContainer>
            <SimpleContainer><ContactUs></ContactUs></SimpleContainer>
            <SimpleContainer><Footer></Footer></SimpleContainer>
            <SimpleContainer><FeaturedItems ></FeaturedItems></SimpleContainer>

            <SimpleContainer>
                <PageBox maxWidth='sm' sx={{ textAlign: 'center', paddingTop: '0', justifyContent: 'start' }}>
                    <h2>SEE MORE OF OUR SERVICES</h2>
                    <ServicesStack hiddenItem={3} />
                </PageBox>
            </SimpleContainer>
        </PageContainer>
    );
}