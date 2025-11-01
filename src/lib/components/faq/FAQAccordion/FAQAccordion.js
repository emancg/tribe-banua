'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Container from '../../utility/Container';

/**
 * FAQAccordion Component
 *
 * Expandable Q&A accordion with search functionality
 *
 * @param {Object} config - FAQ configuration
 * @param {string} config.title - Section title
 * @param {Array} config.faqs - Array of FAQ objects
 * @param {string} config.faqs[].question - Question text
 * @param {string} config.faqs[].answer - Answer text
 * @param {string} config.faqs[].category - Category (optional)
 * @param {boolean} config.allowMultiple - Allow multiple accordions open (default: false)
 * @param {boolean} config.searchable - Show search bar (default: true)
 * @param {string} config.variant - Style variant: 'outlined', 'filled', 'minimal'
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const StyledAccordion = styled(MuiAccordion)(({ theme, variant }) => {
  const variantStyles = {
    outlined: {
      border: `1px solid ${theme.palette.divider}`,
      '&:before': {
        display: 'none',
      },
      marginBottom: theme.spacing(2),
    },
    filled: {
      backgroundColor: theme.palette.grey[50],
      marginBottom: theme.spacing(2),
      '&:before': {
        display: 'none',
      },
    },
    minimal: {
      boxShadow: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
      '&:before': {
        display: 'none',
      },
      '&:last-of-type': {
        borderBottom: 'none',
      },
    },
  };

  return {
    ...variantStyles[variant],
    '&.Mui-expanded': {
      margin: variant === 'minimal' ? 0 : undefined,
    },
  };
});

export default function FAQAccordion({ config, sx = {} }) {
  if (!config || !config.faqs || config.faqs.length === 0) {
    return null;
  }

  const {
    title = 'Frequently Asked Questions',
    faqs,
    allowMultiple = false,
    searchable = true,
    variant = 'outlined',
  } = config;

  const [expanded, setExpanded] = useState(allowMultiple ? [] : false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    if (allowMultiple) {
      setExpanded(prev =>
        isExpanded
          ? [...prev, panel]
          : prev.filter(p => p !== panel)
      );
    } else {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter FAQs based on search query
  const filteredFaqs = searchQuery
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const isExpanded = (index) => {
    if (allowMultiple) {
      return expanded.includes(`panel${index}`);
    }
    return expanded === `panel${index}`;
  };

  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, marginBottom: 2 }}
        >
          {title}
        </Typography>

        {searchable && (
          <TextField
            fullWidth
            placeholder="Search questions..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mb: 4, mt: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}

        {filteredFaqs.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No questions found matching your search.
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 4 }}>
            {filteredFaqs.map((faq, index) => (
              <StyledAccordion
                key={index}
                expanded={isExpanded(index)}
                onChange={handleAccordionChange(`panel${index}`)}
                variant={variant}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    sx={{ lineHeight: 1.8, color: 'text.secondary' }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
        )}
      </Container>
    </SectionContainer>
  );
}
