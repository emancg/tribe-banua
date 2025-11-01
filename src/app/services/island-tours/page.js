'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
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

const SubSectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
  color: theme.palette.text.primary,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontSize: '1.0625rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2.5),
}));

export default function IslandToursPage() {
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
              ISLAND TOURS
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
              Discover the wonders of El Nido's tropical paradise
            </Typography>
          </Container>
        </PageHeader>

        {/* Main Content */}
        <ContentSection>
          <Container maxWidth="md">
            <SectionTitle variant="h2">
              Are you craving an escape into nature's embrace?
            </SectionTitle>
            <BodyText>
              Welcome to Tribe Banua's El Nido Island Tours, your gateway to the wonders of this tropical paradise! Our meticulously crafted tours offer an immersive experience, blending adventure with relaxation as you explore the stunning beauty of El Nido's islands. Picture yourself gliding through crystal-clear waters, surrounded by towering limestone cliffs and vibrant marine life. With our expert guides, you'll discover hidden lagoons, pristine beaches, and awe-inspiring snorkeling spots. Let Tribe Banua be your companion as you create cherished memories in one of the world's most enchanting destinations. Join us and unlock the treasures of El Nido's islands today!
            </BodyText>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2">
              The kind of tour for you.
            </SectionTitle>
            <BodyText>
              Each tour is designed to cater to all preferences, whether you seek adrenaline-pumping activities like cliff jumping or serene moments to bask in the sun's warm embrace. There are four main island tours in El Nido and we are glad to offer them to you. They are called Tours A, B, C & D. What's the difference between all of them? Let's find out.
            </BodyText>

            <SubSectionTitle variant="h3">
              Tour A
            </SubSectionTitle>
            <BodyText>
              Embark on the extraordinary journey of Tour A, an unparalleled island-hopping escapade in the heart of El Nido's aquatic paradise. Discover hidden lagoons, secluded beaches, and vibrant snorkeling spots, where you can immerse yourself in the mesmerizing beauty of coral reefs and the diverse marine life they harbor. Dive into crystal-clear waters and witness the enchanting spectacle of countless fish species. For the remarkable price of only <strong>P1200</strong>, begin your adventure today!
            </BodyText>
            <BodyText>
              Embark on an unforgettable journey through Tour A's captivating destinations, including <strong>Big Lagoon, Secret Lagoon, Shimizu Island, and Seven Commando Beach</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Tour B
            </SubSectionTitle>
            <BodyText>
              Tour B promises an enthralling adventure with its array of attractions. From pristine white sand beaches to exhilarating snorkeling spots, and even a fascinating cave exploration, this tour offers something for everyone. Don't miss the chance to discover a remarkable sandbar nestled amidst the sea's embrace.
            </BodyText>
            <BodyText>
              All this excitement comes at an unbeatable price of only <strong>1300PHP</strong>.
            </BodyText>
            <BodyText>
              Throughout the excursion, adventurers will make memorable pit stops at <strong>Snake Isle (also known as Vigan Isle), Pinagbuyutan Isle, Entalula Shore, Cudugnon Grotto, and a unique snorkeling locale</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Tour C
            </SubSectionTitle>
            <BodyText>
              Tour C is probably the most popular of all El Nido Tours. It will take you on a journey to beautiful islands, beaches and snorkeling spots, and to an uncanny place: Matinloc Shrine.
            </BodyText>
            <BodyText>
              If you were to pick only one tour in El Nido, this probably would be Tour C. Price is of only <strong>1400PHP</strong>.
            </BodyText>
            <BodyText>
              On the island journey of Tour C, explorers will uncover hidden treasures at destinations like <strong>Chopper Isle, Matinloc Sanctuary, Whispering Cove, Stardust Cove, and Veiled Bay</strong>.
            </BodyText>

            <SubSectionTitle variant="h3">
              Tour D
            </SubSectionTitle>
            <BodyText>
              Embark on an adventure like no other with El Nido's island hopping Tour D, guiding you through some of Palawan's most stunning beaches. Take leisurely moments to unwind on pristine white sands, explore vibrant underwater realms while snorkeling, and marvel at the kaleidoscope of colorful marine life. Immerse yourself in the untamed beauty of nature's wonders. Tour D is priced at an unbeatable <strong>P1200</strong>.
            </BodyText>
            <BodyText>
              During the course of Tour D, we'll make captivating stops at <strong>Ipil Shore, Cadlao Lagoon, Paradise Shore, Pasandigan Shore, Natnat Shore, and Bukal Shore</strong>.
            </BodyText>

            <Box sx={{
              mt: 4,
              p: 3,
              backgroundColor: '#F5F5F5',
              borderRadius: '4px',
              border: '1px solid',
              borderColor: 'divider'
            }}>
              <BodyText sx={{ mb: 0, fontStyle: 'italic' }}>
                <strong>Please note:</strong> Starting from June 2023, due to new municipal regulations, food preparation aboard boats or during the tour is no longer permitted. Therefore, guests are kindly asked to bring their own meals and drinking water. We appreciate your understanding and cooperation in ensuring a pleasant and compliant experience during your excursion.
              </BodyText>
            </Box>

            <Divider sx={{ my: 4, borderColor: 'divider' }} />

            <SectionTitle variant="h2" sx={{ textAlign: 'center' }}>
              Ready to dive in?
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
            <ServicesSection config={servicesConfig} hiddenItem={1} />
          </Container>
        </Box>

        {/* Footer */}
        <FooterSection config={footerConfig} />
      </PageContainer>
    </main>
  );
}
