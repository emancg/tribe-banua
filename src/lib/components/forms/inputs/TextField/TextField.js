'use client';

import MuiTextField from '@mui/material/TextField';
import { forwardRef } from 'react';

/**
 * TextField Component
 *
 * Wrapper around MUI TextField for consistent form styling
 * Compatible with React Hook Form
 *
 * @param {Object} props - TextField props
 * @param {string} props.label - Input label
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Whether field is required
 * @param {string} props.type - Input type (text, email, tel, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {Object} rest - Additional MUI TextField props
 */

const TextField = forwardRef(function TextField(
  { label, error, required = false, type = 'text', placeholder, ...rest },
  ref
) {
  return (
    <MuiTextField
      ref={ref}
      label={label}
      type={type}
      placeholder={placeholder}
      required={required}
      error={!!error}
      helperText={error}
      fullWidth
      variant="outlined"
      {...rest}
      sx={{
        '& .MuiOutlinedInput-root': {
          '&:hover fieldset': {
            borderColor: 'primary.main',
          },
        },
        ...rest.sx,
      }}
    />
  );
});

export default TextField;
