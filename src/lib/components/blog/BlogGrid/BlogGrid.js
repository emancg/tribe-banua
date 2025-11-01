'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import BlogCard from '../BlogCard';
import Container from '../../utility/Container';

/**
 * BlogGrid Component
 *
 * Grid display of blog posts with optional category filtering
 *
 * @param {Object} config - Blog grid configuration
 * @param {string} config.title - Section title
 * @param {Array} config.posts - Array of blog post objects
 * @param {number} config.columns - Number of columns (2, 3, or 4)
 * @param {boolean} config.showFilters - Show category filters
 * @param {Array} config.categories - Available categories for filtering
 * @param {string} config.variant - Card variant: 'card', 'list', 'minimal'
 * @param {Object} sx - Additional MUI sx styling
 */

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 0),
  },
}));

const FilterTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function BlogGrid({ config, sx = {} }) {
  if (!config || !config.posts || config.posts.length === 0) {
    return null;
  }

  const {
    title = 'Latest Articles',
    posts,
    columns = 3,
    showFilters = false,
    categories = [],
    variant = 'card',
  } = config;

  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract categories from posts if not provided
  const allCategories = categories.length > 0
    ? categories
    : [...new Set(posts.map(post => post.category).filter(Boolean))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  // Determine grid columns based on config
  const gridColumns = {
    xs: 12,
    sm: columns >= 3 ? 6 : 12,
    md: columns === 4 ? 3 : columns === 3 ? 4 : 6,
  };

  return (
    <SectionContainer sx={sx}>
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 700, marginBottom: 4 }}
          >
            {title}
          </Typography>
        )}

        {showFilters && allCategories.length > 0 && (
          <FilterTabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="blog category filters"
          >
            <Tab label="All" value="all" />
            {allCategories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </FilterTabs>
        )}

        {filteredPosts.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No posts found in this category.
            </Typography>
          </Box>
        ) : variant === 'list' ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.slug || index} post={post} variant="list" />
            ))}
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filteredPosts.map((post, index) => (
              <Grid item {...gridColumns} key={post.slug || index}>
                <BlogCard post={post} variant={variant} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </SectionContainer>
  );
}
