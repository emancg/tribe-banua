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

const PageContainer = styled(Container)(({ theme }) => ({
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    backgroundImage: `url('../../expeditions.jpg')`,
    backgroundBlendMode: 'darken',
    backgroundColor: '#614e72',
    backgroundSize: 'cover',
    paddingTop: 60,
    color: '#F9EA9A'
}));

const PageBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // textAlign: 'justify',
    color: 'white',
    width: '100%',
    marginLeft: '10px',
    marginRight: '10px',
    textShadow: '2px 2px 5px black',
    h3:{
        textAlign: 'left',
    },
    p:{
        textAlign: 'justify',
    }
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
                    <h1>EXPEDITIONS</h1>
                    {/* <Box position={'relative'} height={'100%'} sx={{width: '90%', boxShadow: '10px 10px 10px black'}}>
                            <Image
                                fill
                                src="/expeditions-hero.jpg"
                                alt="expeditions"
                            />
                        </Box> */}

                    <h3>What is the Tribe Banua Expedition?</h3>
                    <p>Embark on a 3-day boat expedition from Linapacan to Culion, Palawan, and be immersed in an array of unforgettable experiences. Snorkel amidst vibrant coral reefs, encountering a kaleidoscope of marine life. Visit remote tribe villages, engaging with locals, witnessing traditional dances, and learning about their customs. Navigate through mangrove forests on kayaks, exploring hidden lagoons and tranquil waterways. Spend nights in native houses, embracing the authentic charm of Palawan&apos;s culture. This expedition promises an extraordinary blend of adventure, cultural immersion, and natural beauty, making it an experience of a lifetime.</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h3>What to expect from this grand tour?</h3>
                    <p>This expedition is packed with adventure and fun experiences! For your reference, see the itinerary below.</p>
                    <Link target='_blank' href="/expedition-activities.png" >
                        <Box maxWidth='sm'>
                            <Image
                                height={900}
                                width={360}
                                src="/expedition-activities.png"
                                alt="expedition activities"
                            />
                        </Box>
                    </Link>
                    <h3>INCLUSIONS AND REMINDERS</h3>
                    <p>Hotel pick-up's between 8:00-8:30 am. Pro tip: grab breakfast at your hotel since we're only dishing out lunch and dinner on day one. We promise our food's better, though!</p>
                    <p>Days two and three? We've got you covered from sunrise to sunset with breakfast, lunch, and dinner. No hungry tummies allowed!</p>
                    <p>When the sun dips below the horizon, it's time for the real party! Enjoy bottomless Rum and Coke under the stars, with a bit of Red Horse Beer to keep things interesting.</p>
                    <p>Bringing your own drinks? Absolutely! Just stash your stash in the boat's cooler and sip at your leisure.</p>
                    <p>As for where you'll rest your weary head, it's all about the Native House vibes. Think cozy, think comfy, think... no room service! But hey, it's all part of the adventure, right? 🌟</p>

                    <h3>What to bring?</h3>
                    <p>
                        Prescribed Medications: Don't forget to inform the crew of any medical conditions and bring enough medication. Better safe than sorry, right?
                    </p>
                    <p>
                        Towels: Pack your own towels for bathing and washing up at the campsites. Plus, we'll throw in an extra one for good measure.
                    </p>
                    <p>
                        Sunscreen and Solar Protection: Palawan's sunny disposition is delightful, but don't forget your sunscreen, hat, and sunglasses to keep those rays at bay.
                    </p>
                    <p>
                        Mosquito Repellent: Stay bug-free with some repellent, especially during dusk and dawn. Those mosquitoes can be pesky!
                    </p>
                    <p>
                        A Dry Bag: Keep your gear dry with a waterproof bag, especially handy when traveling by kayak. Think of it as your trusty sidekick for the journey.
                    </p>
                    <p>
                        Water Shoes: While snorkeling gear is provided, water shoes add an extra layer of comfort for those beach walks. Trust us, your feet will thank you.
                    </p>
                    <h3>What to prepare?</h3>
                    <p>
                        Organize Your Luggage: Travel light by bringing essentials in a backpack or dry bag. Leave the rest in your luggage, safely stowed away on the boat.
                    </p>
                    <p>
                        Protect Your Gadgets and Documents: Even though the odds of a soggy mishap are low, it never hurts to be cautious. Keep your gadgets and documents in a waterproof bag, just in case.
                    </p>
                    <p>
                        With these essentials in tow, you're all set for an unforgettable expedition!
                    </p>


                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h3>Are you ready for the tour of a lifetime?</h3>
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
                    <SimpleStack>
                        {/* <Link href='/pages/services/expeditions'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../expeditions.jpg')` }}>
                                <h2>EXPEDITIONS</h2>
                            </ItemBox>
                        </Link> */}
                        <StyledLink linkRef='/services/island-tours'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../island-tours.jpg')` }}>
                                <h2>ISLAND TOURS</h2>
                            </ItemBox>
                        </StyledLink>
                        <StyledLink linkRef='/services/ferry'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../ferry-transfer.jpg')` }}>
                                <h2>FERRY TRANSFER</h2>
                            </ItemBox>
                        </StyledLink>
                        <StyledLink linkRef='/services/van'>
                            <ItemBox variant='elevation' elevation={16} sx={{ backgroundImage: `url('../../van-transfer.jpg')` }}>
                                <h2>VAN TRANSFER</h2>
                            </ItemBox>
                        </StyledLink>
                    </SimpleStack>
                </PageBox>
            </SimpleContainer>
        </PageContainer>
    );
}