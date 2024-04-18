'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { styled } from '@mui/material/styles';

import SimpleContainer from "./ui/layout/container";
import HeroBox from "./ui/sections/heroBox";
import ServicesImageList from "./ui/sections/servicesImageList";
import WhyChooseUs from "./ui/sections/whyChooseUsGrid";
import ContactUs from "./ui/sections/contactUs";
import Footer from "./ui/sections/footer";
import Container from '@mui/material/Container';

const PageContainer = styled(Container)(({ theme }) => ({
  padding: 0,
  width: '100%',
  justifyContent: 'center',
  backgroundImage: `url('./app-bg.jpg')`,
  // backgroundBlendMode:'darken',
  // backgroundColor: '#214675',
  backgroundSize: 'cover',
  padding: 0,
}));


export default function Home() {
  return (
    <main>
      <PageContainer maxWidth='xl'>
        <SimpleContainer id="hero-container">
          <HeroBox />
        </SimpleContainer>
        <SimpleContainer>
          <ServicesImageList />
        </SimpleContainer>

        <SimpleContainer sx={{ height: '100vh' }}>
          <WhyChooseUs/>
        </SimpleContainer>

        {/* <SimpleContainer sx={{ height: '100vh' }}>
          <ContactUs />
        </SimpleContainer> */}

        <SimpleContainer sx={{ height: '100vh' }}>
          <Footer />
        </SimpleContainer>
      </PageContainer>

      {/* <SimpleContainer><Footer /></SimpleContainer> */}
    </main>
  );
}
