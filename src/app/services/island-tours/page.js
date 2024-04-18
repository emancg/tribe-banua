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
    backgroundImage: `url('../../island-tours.jpg')`,
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    // backgroundColor: '#614e72',
    backgroundPositionX: 'center',
    backgroundSize: 'cover',
    paddingTop: 60,
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

export default function IslandToursPage() {
    return (
        <PageContainer maxWidth='xl'>
            {/* <SimpleContainer>
                    <PageBox maxWidth='sm' sx={{ minHeight: '0', alignItems: 'start', paddingTop: '10px' }}>
                        <Link href={'/'}><Button variant='text' color='warning' size='large'>Home</Button></Link>
                    </PageBox>
                </SimpleContainer> */}
            <SimpleContainer>
                <PageBox maxWidth='sm'>
                    <h1>ISLAND TOURS</h1>
                    {/* <Box position={'relative'} height={'100%'} sx={{width: '90%', boxShadow: '10px 10px 10px black'}}>
                            <Image
                                fill
                                src="/expeditions-hero.jpg"
                                alt="expeditions"
                            />
                        </Box> */}

                    <h3>Are you craving an escape into nature's embrace?</h3>
                    <p>Welcome to Tribe Banua's El Nido Island Tours, your gateway to the wonders of this tropical paradise! Our meticulously crafted tours offer an immersive experience, blending adventure with relaxation as you explore the stunning beauty of El Nido's islands. Picture yourself gliding through crystal-clear waters, surrounded by towering limestone cliffs and vibrant marine life. With our expert guides, you'll discover hidden lagoons, pristine beaches, and awe-inspiring snorkeling spots. Let Tribe Banua be your companion as you create cherished memories in one of the world's most enchanting destinations. Join us and unlock the treasures of El Nido's islands today!</p>
                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h3>The kind of tour for you.</h3>
                    <p>Each tour is designed to cater to all preferences, whether you seek adrenaline-pumping activities like cliff jumping or serene moments to bask in the sun's warm embrace. There are four main island tours in El Nido and we are glad to offer them to you. They are called Tours A, B, C & D. Whats the difference between all of them? Lets find out.</p>

                    <h4>Tour A</h4>
                    <p>Embark on the extraordinary journey of Tour A, an unparalleled island-hopping escapade in the heart of El Nido's aquatic paradise. Discover hidden lagoons, secluded beaches, and vibrant snorkeling spots, where you can immerse yourself in the mesmerizing beauty of coral reefs and the diverse marine life they harbor. Dive into crystal-clear waters and witness the enchanting spectacle of countless fish species. For the remarkable price of only P1200, begin your adventure today!</p>
                    <p>Embark on an unforgettable journey through Tour A's captivating destinations, including Big Lagoon, Secret Lagoon, Shimizu Island, and Seven Commando Beach.</p>
                    {/* <p>At midday, we'll make a delightful stop on an island for a satisfying meal. Our crew will serve up a mouthwatering grill, featuring your choice of fish, chicken, or pork, accompanied by rice and fresh fruits for dessert.</p>
                    <p>Feel free to bring along your preferred beverages, whether soft drinks or alcohol. However, rest assured, we'll also provide an ample supply of drinking water for your convenience.</p> */}


                    <h4>Tour B</h4>
                    <p>Tour B promises an enthralling adventure with its array of attractions. From pristine white sand beaches to exhilarating snorkeling spots, and even a fascinating cave exploration, this tour offers something for everyone. Don't miss the chance to discover a remarkable sandbar nestled amidst the sea's embrace.</p>
                    <p>All this excitement comes at an unbeatable price of only 1300PHP.</p>
                    <p>Throughout the excursion, adventurers will make memorable pit stops at Snake Isle (also known as Vigan Isle), Pinagbuyutan Isle, Entalula Shore, Cudugnon Grotto, and a unique snorkeling locale.</p>

                    <h4>Tour C</h4>
                    <p>Tour C is probably the most popular of all El Nido Tours. It will take you on a journey to beautiful islands, beaches and snorkeling spots, and to an uncanny place: Matinloc Shrine.</p>
                    <p>If you were to pick only one tour in El Nido, this probably would be Tour C. Price is of only 1400PHP.</p>
                    <p>On the island journey of Tour C, explorers will uncover hidden treasures at destinations like Chopper Isle, Matinloc Sanctuary, Whispering Cove, Stardust Cove, and Veiled Bay.</p>

                    <h4>Tour D</h4>
                    <p>Embark on an adventure like no other with El Nido's island hopping Tour D, guiding you through some of Palawan's most stunning beaches. Take leisurely moments to unwind on pristine white sands, explore vibrant underwater realms while snorkeling, and marvel at the kaleidoscope of colorful marine life. Immerse yourself in the untamed beauty of nature's wonders. Tour D is priced at an unbeatable P1200.</p>
                    <p>During the course of Tour D, we'll make captivating stops at Ipil Shore, Cadlao Lagoon, Paradise Shore, Pasandigan Shore, Natnat Shore, and Bukal Shore.</p>

                    <p>Please note: Starting from June 2023, due to new municipal regulations, food preparation aboard boats or during the tour is no longer permitted. Therefore, guests are kindly asked to bring their own meals and drinking water. We appreciate your understanding and cooperation in ensuring a pleasant and compliant experience during your excursion.</p>

                    <Divider sx={{ borderColor: 'white', width: '25%' }}></Divider>

                    <h3>Ready to dive in?</h3>
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
                    <ServicesStack hiddenItem={1} />
                </PageBox>
            </SimpleContainer>
        </PageContainer>
    );
}