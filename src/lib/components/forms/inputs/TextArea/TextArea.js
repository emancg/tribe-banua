'use client';

import MuiTextField from '@mui/material/TextField';
import { forwardRef } from 'react';

/**
 * TextArea Component
 *
 * Multi-line text input field
 * Compatible with React Hook Form
 *
 * @param {Object} props - TextArea props
 * @param {string} props.label - Input label
 * @param {string} props.error - Error message
 * @param {boolean} props.required - Whether field is required
 * @param {number} props.rows - Number of rows (default: 4)
 * @param {number} props.maxRows - Maximum rows before scrolling
 * @param {string} props.placeholder - Placeholder text
 * @param {Object} rest - Additional MUI TextField props
 */

const TextArea = forwardRef(function TextArea(
  { label, error, required = false, rows = 4, maxRows, placeholder, ...rest },
  ref
) {
  return (
    <MuiTextField
      ref={ref}
      label={label}
      placeholder={placeholder}
      required={required}
      error={!!error}
      helperText={error}
      fullWidth
      multiline
      rows={rows}
      maxRows={maxRows}
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

export default TextArea;
