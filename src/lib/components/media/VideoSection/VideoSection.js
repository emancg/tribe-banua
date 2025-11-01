'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '../../utility/Container';

/**
 * VideoSection Component
 *
 * Responsive video embed (YouTube, Vimeo, or direct video)
 *
 * @param {Object} config - Video configuration
 * @param {string} config.title - Section title (optional)
 * @param {string} config.description - Video description (optional)
 * @param {string} config.videoUrl - Video URL (YouTube, Vimeo, or direct MP4)
 * @param {string} config.videoType - Type: 'youtube', 'vimeo', 'direct' (auto-detected if not specified)
 * @param {string} config.thumbnail - Thumbnail image URL (optional, for direct videos)
 * @param {boolean} config.autoplay - Autoplay video (default: false)
 * @param {boolean} config.controls - Show video controls (default: true)
 * @param {string} config.aspectRatio - Aspect ratio: '16/9', '4/3', '1/1' (default: '16/9')
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const VideoWrapper = styled(Box)(({ theme, aspectRatio }) => {
  const ratios = {
    '16/9': '56.25%',
    '4/3': '75%',
    '1/1': '100%',
  };

  return {
    position: 'relative',
    width: '100%',
    paddingBottom: ratios[aspectRatio] || ratios['16/9'],
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  };
});

const VideoEmbed = styled('iframe')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  border: 'none',
});

const DirectVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

function getVideoType(url) {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  }
  if (url.includes('vimeo.com')) {
    return 'vimeo';
  }
  return 'direct';
}

function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getVimeoId(url) {
  const regExp = /vimeo.*\/(\d+)/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export default function VideoSection({ config, sx = {} }) {
  if (!config || !config.videoUrl) {
    return null;
  }

  const {
    title,
    description,
    videoUrl,
    videoType: specifiedType,
    thumbnail,
    autoplay = false,
    controls = true,
    aspectRatio = '16/9',
  } = config;

  const videoType = specifiedType || getVideoType(videoUrl);

  let embedUrl = videoUrl;

  if (videoType === 'youtube') {
    const videoId = getYouTubeId(videoUrl);
    if (videoId) {
      embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`;
    }
  } else if (videoType === 'vimeo') {
    const videoId = getVimeoId(videoUrl);
    if (videoId) {
      embedUrl = `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&controls=${controls ? 1 : 0}`;
    }
  }

  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{ fontWeight: 700, marginBottom: 2 }}
          >
            {title}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ marginBottom: 4, maxWidth: '800px', margin: '0 auto 2rem' }}
          >
            {description}
          </Typography>
        )}

        <VideoWrapper aspectRatio={aspectRatio}>
          {videoType === 'direct' ? (
            <DirectVideo
              controls={controls}
              autoPlay={autoplay}
              poster={thumbnail}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </DirectVideo>
          ) : (
            <VideoEmbed
              src={embedUrl}
              title={title || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </VideoWrapper>
      </Container>
    </SectionContainer>
  );
}
