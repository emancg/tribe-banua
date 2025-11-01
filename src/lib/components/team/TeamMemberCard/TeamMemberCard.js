'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

/**
 * TeamMemberCard Component
 *
 * Individual team member display card
 *
 * @param {Object} member - Team member data
 * @param {string} member.name - Member name
 * @param {string} member.role - Member role/title
 * @param {string} member.bio - Member bio (optional)
 * @param {string} member.photo - Photo URL
 * @param {Object} member.social - Social media links
 * @param {string} member.social.linkedin - LinkedIn URL
 * @param {string} member.social.twitter - Twitter URL
 * @param {string} member.social.github - GitHub URL
 * @param {string} member.social.email - Email address
 * @param {string} variant - Display variant: 'card', 'overlay', 'minimal'
 * @param {Object} sx - Additional MUI sx styling
 */

const CardContainer = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  };

  const variantStyles = {
    card: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
        transform: 'translateY(-4px)',
      },
    },
    overlay: {
      position: 'relative',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      '&:hover .overlay-content': {
        opacity: 1,
      },
    },
    minimal: {
      textAlign: 'center',
      '&:hover': {
        opacity: 0.8,
      },
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.card),
  };
});

const PhotoWrapper = styled(Box)(({ theme, variant }) => ({
  position: 'relative',
  width: '100%',
  height: variant === 'overlay' ? '400px' : '300px',
  overflow: 'hidden',
}));

const OverlayContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(3),
  color: 'white',
  opacity: 0,
  transition: 'opacity 0.3s ease',
}));

const ContentWrapper = styled(Box)(({ theme, variant }) => ({
  padding: variant === 'card' ? theme.spacing(3) : theme.spacing(2, 0),
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));

export default function TeamMemberCard({ member, variant = 'card', sx = {} }) {
  if (!member) {
    return null;
  }

  const { name, role, bio, photo, social } = member;

  const renderSocialLinks = (color = 'inherit') => {
    if (!social) return null;

    return (
      <SocialLinks>
        {social.linkedin && (
          <IconButton
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color }}
          >
            <LinkedInIcon />
          </IconButton>
        )}
        {social.twitter && (
          <IconButton
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color }}
          >
            <TwitterIcon />
          </IconButton>
        )}
        {social.github && (
          <IconButton
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color }}
          >
            <GitHubIcon />
          </IconButton>
        )}
        {social.email && (
          <IconButton
            href={`mailto:${social.email}`}
            size="small"
            sx={{ color }}
          >
            <EmailIcon />
          </IconButton>
        )}
      </SocialLinks>
    );
  };

  if (variant === 'overlay') {
    return (
      <CardContainer variant={variant} sx={sx}>
        <PhotoWrapper variant={variant}>
          {photo && (
            <Image
              src={photo}
              alt={name}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
          <OverlayContent className="overlay-content">
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
              {role}
            </Typography>
            {bio && (
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.85 }}>
                {bio}
              </Typography>
            )}
            {renderSocialLinks('white')}
          </OverlayContent>
        </PhotoWrapper>
      </CardContainer>
    );
  }

  return (
    <CardContainer variant={variant} sx={sx}>
      <PhotoWrapper variant={variant}>
        {photo && (
          <Image
            src={photo}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
          />
        )}
      </PhotoWrapper>

      <ContentWrapper variant={variant}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 0.5,
            textAlign: variant === 'minimal' ? 'center' : 'left',
          }}
        >
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="primary"
          sx={{
            fontWeight: 600,
            mb: bio ? 1.5 : 0,
            textAlign: variant === 'minimal' ? 'center' : 'left',
          }}
        >
          {role}
        </Typography>

        {bio && variant === 'card' && (
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {bio}
          </Typography>
        )}

        <Box sx={{ display: 'flex', justifyContent: variant === 'minimal' ? 'center' : 'flex-start' }}>
          {renderSocialLinks()}
        </Box>
      </ContentWrapper>
    </CardContainer>
  );
}
