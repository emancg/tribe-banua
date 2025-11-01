'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { FooterSection, ServicesSection } from '@/lib/components';
import { footerConfig } from '../../../../content/sections/footer.config';
import { servicesConfig } from '../../../../content/sections/services.config';

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: '100%',
}));

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  padding: theme.spacing(12, 2),
  textAlign: 'center',
  marginTop: theme.spacing(8),
  borderBottom: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(8, 2),
    marginTop: theme.spacing(7),
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(6),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2.5),
}));

export default function ExpeditionsPage() {
  return (
    <main>
      <PageContainer>
        {/* Page Header */}
        <PageHeader>
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                color: 'text.primary',
                marginBottom: 2,
              }}
            >
              EXPEDITIONS
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                color: 'text.secondary',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              Experience the adventure of a lifetime with Tribe Banua
            </Typography>
          </Container>
        </PageHeader>

        {/* Main Content */}
        <ContentSection>
          <Container maxWidth="md">
            <SectionTitle variant="h2">
              What is the Tribe Banua Expedition?
            </SectionTitle>
            <BodyText>
              Embark on a 3-day boat expedition from Linapacan to Culion, Palawan, and be immersed in an array of unforgettable experiences. Snorkel amidst vibrant coral reefs, encountering a kaleidoscope of marine life. Visit remote tribe villages, engaging with locals, witnessing traditional dances, and learning about their customs. Navigate through mangrove forests on kayaks and explore tranquil waterways. Spend nights in native houses, embracing the authentic charm of Palawan's culture. This expedition promises an extraordinary blend of adventure, cultural immersion, and natural beauty, making it an experience of a lifetime.
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2">
              What to expect from this grand tour?
            </SectionTitle>
            <BodyText>
              This expedition is packed with adventure and fun experiences! For your reference, see the itinerary below.
            </BodyText>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <Link target="_blank" href="/expedition-activities.png">
                <Box sx={{
                  maxWidth: '360px',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <Image
                    height={900}
                    width={360}
                    src="/expedition-activities.png"
                    alt="expedition activities"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Box>
              </Link>
            </Box>

            <SectionTitle variant="h2">
              INCLUSIONS AND REMINDERS
            </SectionTitle>
            <BodyText>
              Hotel pick-up's between 8:00-8:30 am. Pro tip: grab breakfast at your hotel since we're only dishing out lunch and dinner on day one. We promise our food's better, though!
            </BodyText>
            <BodyText>
              Days two and three? We've got you covered from sunrise to sunset with breakfast, lunch, and dinner. No hungry tummies allowed!
            </BodyText>
            <BodyText>
              When the sun dips below the horizon, it's time for the real party! Enjoy bottomless Rum and Coke under the stars, with a bit of Red Horse Beer to keep things interesting.
            </BodyText>
            <BodyText>
              Bringing your own drinks? Absolutely! Just stash your stash in the boat's cooler and sip at your leisure.
            </BodyText>
            <BodyText>
              As for where you'll rest your weary head, it's all about the Native House vibes. Think cozy, think comfy, think... no room service! But hey, it's all part of the adventure, right? 🌟
            </BodyText>

            <SectionTitle variant="h2">
              What to bring?
            </SectionTitle>
            <BodyText>
              <strong>Prescribed Medications:</strong> Don't forget to inform the crew of any medical conditions and bring enough medication. Better safe than sorry, right?
            </BodyText>
            <BodyText>
              <strong>Towels:</strong> Pack your own towels for bathing and washing up at the campsites. Plus, we'll throw in an extra one for good measure.
            </BodyText>
            <BodyText>
              <strong>Sunscreen and Solar Protection:</strong> Palawan's sunny disposition is delightful, but don't forget your sunscreen, hat, and sunglasses to keep those rays at bay.
            </BodyText>
            <BodyText>
              <strong>Mosquito Repellent:</strong> Stay bug-free with some repellent, especially during dusk and dawn. Those mosquitoes can be pesky!
            </BodyText>
            <BodyText>
              <strong>A Dry Bag:</strong> Keep your gear dry with a waterproof bag, especially handy when traveling by kayak. Think of it as your trusty sidekick for the journey.
            </BodyText>
            <BodyText>
              <strong>Water Shoes:</strong> While snorkeling gear is provided, water shoes add an extra layer of comfort for those beach walks. Trust us, your feet will thank you.
            </BodyText>

            <SectionTitle variant="h2">
              What to prepare?
            </SectionTitle>
            <BodyText>
              <strong>Organize Your Luggage:</strong> Travel light by bringing essentials in a backpack or dry bag. Leave the rest in your luggage, safely stowed away on the boat.
            </BodyText>
            <BodyText>
              <strong>Protect Your Gadgets and Documents:</strong> Even though the odds of a soggy mishap are low, it never hurts to be cautious. Keep your gadgets and documents in a waterproof bag, just in case.
            </BodyText>
            <BodyText>
              With these essentials in tow, you're all set for an unforgettable expedition!
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2" sx={{ textAlign: 'center' }}>
              Are you ready for the tour of a lifetime?
            </SectionTitle>
            <BodyText sx={{ textAlign: 'center' }}>
              If you are, send us a message or connect with us through our social accounts below.
            </BodyText>
          </Container>
        </ContentSection>

        {/* Other Services */}
        <Box sx={{ backgroundColor: '#F5F5F5', py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                textAlign: 'center',
                mb: 6,
              }}
            >
              SEE MORE OF OUR SERVICES
            </Typography>
            <ServicesSection config={servicesConfig} hiddenItem={0} />
          </Container>
        </Box>

        {/* Footer */}
        <FooterSection config={footerConfig} />
      </PageContainer>
    </main>
  );
}
