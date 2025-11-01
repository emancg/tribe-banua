'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import * as MuiIcons from '@mui/icons-material';

/**
 * Minimal Clean FooterSection Component
 *
 * Simple footer with clean organization and proper spacing
 */

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderTop: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(8, 2, 4),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2, 3),
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  maxWidth: '1200px !important',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.875rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: '0.9375rem',
  display: 'block',
  marginBottom: theme.spacing(1.5),
  transition: 'color 0.2s ease',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  fontSize: '0.9375rem',

  '& svg': {
    fontSize: '1.25rem',
    color: theme.palette.primary.main,
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease',

  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(3),
  borderTop: `1px solid ${theme.palette.divider}`,
  textAlign: 'center',
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}));

export default function FooterSection({ config }) {
  if (!config) {
    return null;
  }

  // Separate contact info by type
  const socialLinks = config.contactInfo?.filter(item => item.type === 'social') || [];
  const contactLinks = config.contactInfo?.filter(item => item.type === 'contact') || [];

  return (
    <FooterContainer>
      <ContentWrapper>
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: '1.25rem',
                mb: 2,
                color: 'text.primary',
              }}
            >
              TRIBE BANUA
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
                mb: 3,
              }}
            >
              Your gateway to unforgettable island expeditions in Palawan's paradise.
            </Typography>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((item, index) => {
                  const IconComponent = MuiIcons[item.icon] || MuiIcons.Share;
                  return (
                    <Link
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      <SocialIconButton size="small">
                        <IconComponent fontSize="small" />
                      </SocialIconButton>
                    </Link>
                  );
                })}
              </Box>
            )}
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <SectionTitle variant="subtitle2">
              Quick Links
            </SectionTitle>
            <Box>
              {[
                { text: 'About', href: '/about' },
                { text: 'Expeditions', href: '/expeditions' },
                { text: 'Island Tours', href: '/services/island-tours' },
                { text: 'Ferry Service', href: '/services/ferry' },
                { text: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                >
                  {link.text}
                </FooterLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={5}>
            <SectionTitle variant="subtitle2">
              {config.title || 'Contact Us'}
            </SectionTitle>
            <Box>
              {contactLinks.map((item, index) => {
                const IconComponent = MuiIcons[item.icon] || MuiIcons.Info;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    style={{ textDecoration: 'none' }}
                  >
                    <ContactItem>
                      <IconComponent />
                      <Typography variant="body2" sx={{ color: 'inherit' }}>
                        {item.label}
                      </Typography>
                    </ContactItem>
                  </Link>
                );
              })}
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Tribe Banua Expeditions. All rights reserved.
          </Copyright>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              mt: 0.5,
              display: 'block',
            }}
          >
            Palawan, Philippines
          </Typography>
        </FooterBottom>
      </ContentWrapper>
    </FooterContainer>
  );
}
