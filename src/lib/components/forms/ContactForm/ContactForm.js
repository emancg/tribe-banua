'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import TextField from '../inputs/TextField';
import TextArea from '../inputs/TextArea';
import { contactFormSchema } from '../../../utils/validation';
import Container from '../../utility/Container';

/**
 * ContactForm Component
 *
 * Contact form with validation using React Hook Form and Zod
 *
 * @param {Object} config - Form configuration
 * @param {string} config.title - Form title
 * @param {string} config.description - Form description
 * @param {string} config.submitEndpoint - API endpoint for form submission
 * @param {Function} config.onSubmit - Custom submit handler
 * @param {string} config.successMessage - Success message after submission
 * @param {boolean} config.showSubject - Show subject field (default: false)
 * @param {string} config.variant - Style variant: 'inline', 'section', 'card'
 * @param {Object} sx - Additional MUI sx styling
 */

const FormContainer = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    width: '100%',
  };

  const variantStyles = {
    section: {
      padding: theme.spacing(8, 0),
      backgroundColor: theme.palette.grey[50],
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6, 0),
      },
    },
    card: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3),
      },
    },
    inline: {
      padding: 0,
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.inline),
  };
});

export default function ContactForm({ config, sx = {} }) {
  const {
    title = 'Contact Us',
    description,
    submitEndpoint,
    onSubmit: customOnSubmit,
    successMessage = 'Thank you for your message! We\'ll get back to you soon.',
    showSubject = false,
    variant = 'inline',
  } = config || {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Custom submit handler
      if (customOnSubmit) {
        await customOnSubmit(data);
        setSubmitStatus('success');
        setSubmitMessage(successMessage);
        reset();
        return;
      }

      // Default API submission
      if (submitEndpoint) {
        const response = await fetch(submitEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setSubmitStatus('success');
        setSubmitMessage(successMessage);
        reset();
      } else {
        // No endpoint - just log for demo
        console.log('Form data:', data);
        setSubmitStatus('success');
        setSubmitMessage(successMessage);
        reset();
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {title && variant !== 'inline' && (
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          {title}
        </Typography>
      )}

      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {description}
        </Typography>
      )}

      {submitStatus && (
        <Alert severity={submitStatus} sx={{ mb: 3 }}>
          {submitMessage}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            {...register('name')}
            label="Name"
            placeholder="Your full name"
            required
            error={errors.name?.message}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            {...register('email')}
            label="Email"
            type="email"
            placeholder="your@email.com"
            required
            error={errors.email?.message}
          />
        </Grid>

        <Grid item xs={12} md={showSubject ? 6 : 12}>
          <TextField
            {...register('phone')}
            label="Phone"
            type="tel"
            placeholder="+1 234 567 8900"
            error={errors.phone?.message}
          />
        </Grid>

        {showSubject && (
          <Grid item xs={12} md={6}>
            <TextField
              {...register('subject')}
              label="Subject"
              placeholder="What is this about?"
              error={errors.subject?.message}
            />
          </Grid>
        )}

        <Grid item xs={12}>
          <TextArea
            {...register('message')}
            label="Message"
            placeholder="Tell us more about your inquiry..."
            required
            rows={5}
            error={errors.message?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            endIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  if (variant === 'section') {
    return (
      <FormContainer variant={variant} sx={sx}>
        <Container maxWidth="md">
          <FormContent />
        </Container>
      </FormContainer>
    );
  }

  return (
    <FormContainer variant={variant} sx={sx}>
      <FormContent />
    </FormContainer>
  );
}
