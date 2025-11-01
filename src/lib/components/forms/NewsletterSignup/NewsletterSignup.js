'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '../inputs/TextField';
import { newsletterSchema } from '../../../utils/validation';

/**
 * NewsletterSignup Component
 *
 * Email subscription form with validation
 *
 * @param {Object} config - Newsletter configuration
 * @param {string} config.title - Form title
 * @param {string} config.description - Form description
 * @param {string} config.placeholder - Email input placeholder
 * @param {string} config.buttonText - Submit button text
 * @param {string} config.submitEndpoint - API endpoint for subscription
 * @param {Function} config.onSubmit - Custom submit handler
 * @param {string} config.variant - Style variant: 'inline', 'centered', 'card'
 * @param {Object} sx - Additional MUI sx styling
 */

const NewsletterContainer = styled(Box)(({ theme, variant }) => {
  const baseStyles = {
    width: '100%',
  };

  const variantStyles = {
    inline: {
      display: 'flex',
      gap: theme.spacing(2),
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    centered: {
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      maxWidth: '500px',
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3),
      },
    },
  };

  return {
    ...baseStyles,
    ...(variantStyles[variant] || variantStyles.inline),
  };
});

const FormWrapper = styled(Box)(({ theme, variant }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: variant !== 'inline' ? theme.spacing(3) : 0,
  ...(variant === 'inline' && {
    flex: 1,
  }),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export default function NewsletterSignup({ config, sx = {} }) {
  const {
    title = 'Subscribe to Our Newsletter',
    description = 'Get the latest updates and special offers delivered to your inbox.',
    placeholder = 'Enter your email',
    buttonText = 'Subscribe',
    submitEndpoint,
    onSubmit: customOnSubmit,
    variant = 'inline',
  } = config || {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (customOnSubmit) {
        await customOnSubmit(data);
        setSubmitStatus('success');
        setSubmitMessage('Successfully subscribed!');
        reset();
        return;
      }

      if (submitEndpoint) {
        const response = await fetch(submitEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Subscription failed');
        }

        setSubmitStatus('success');
        setSubmitMessage('Successfully subscribed! Check your email.');
        reset();
      } else {
        console.log('Newsletter signup:', data);
        setSubmitStatus('success');
        setSubmitMessage('Successfully subscribed!');
        reset();
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Subscription failed. Please try again.');
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NewsletterContainer variant={variant} sx={sx}>
      {title && variant !== 'inline' && (
        <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
          {title}
        </Typography>
      )}

      {description && variant !== 'inline' && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}

      {submitStatus && (
        <Alert
          severity={submitStatus}
          sx={{ mb: 2, ...(variant === 'inline' && { flex: 1 }) }}
        >
          {submitMessage}
        </Alert>
      )}

      {!submitStatus && (
        <FormWrapper
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          variant={variant}
        >
          <TextField
            {...register('email')}
            type="email"
            placeholder={placeholder}
            error={errors.email?.message}
            sx={{ flex: 1 }}
            InputProps={{
              startAdornment: variant === 'card' && (
                <EmailIcon sx={{ mr: 1, color: 'action.active' }} />
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              paddingX: 3,
              paddingY: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              ...(variant === 'inline' && {
                [theme => theme.breakpoints.down('sm')]: {
                  width: '100%',
                },
              }),
            }}
          >
            {isSubmitting ? <CircularProgress size={24} /> : buttonText}
          </Button>
        </FormWrapper>
      )}
    </NewsletterContainer>
  );
}
