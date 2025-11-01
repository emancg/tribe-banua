# Contributing to Tribe Banua Boilerplate

Thank you for considering contributing to the Tribe Banua boilerplate! This document provides guidelines for contributing to the project.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Development Setup](#development-setup)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Component Guidelines](#component-guidelines)
8. [Documentation Guidelines](#documentation-guidelines)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and considerate
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information

---

## How Can I Contribute?

### Reporting Bugs

**Before submitting a bug report:**
- Check existing issues to avoid duplicates
- Test with the latest version
- Collect relevant information (browser, Node version, etc.)

**Submit a bug report:**
```markdown
**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- Node Version: [e.g., 18.17.0]
```

### Suggesting Enhancements

**Before suggesting:**
- Check if the enhancement already exists
- Determine which part of the project it relates to

**Submit an enhancement:**
```markdown
**Enhancement Description**
Clear description of the enhancement.

**Use Case**
Why this enhancement would be useful.

**Proposed Solution**
How you think it should work.

**Alternatives Considered**
Other solutions you've considered.
```

### Contributing Code

1. **Fork the repository**
2. **Create a feature branch**
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

---

## Development Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Git

### Setup Steps

```bash
# 1. Fork and clone
git clone https://github.com/your-username/tribe-banua.git
cd tribe-banua

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Create a new branch
git checkout -b feature/your-feature-name
```

### Project Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier

# Testing (when available)
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

---

## Coding Standards

### JavaScript Style Guide

**General Rules:**
- Use ES6+ features
- Prefer functional components
- Use meaningful variable names
- Keep functions small and focused
- Add JSDoc comments for complex functions

**Example:**
```javascript
/**
 * ComponentName
 *
 * Description of what this component does
 *
 * @param {Object} config - Configuration object
 * @param {string} config.title - Title text
 * @param {string} config.variant - Visual variant
 * @param {Object} sx - MUI sx prop
 */
export default function ComponentName({ config, sx = {} }) {
  if (!config) {
    return null;
  }

  const { title, variant = 'default' } = config;

  return (
    <Box sx={sx}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}
```

### Component Structure

```
ComponentName/
├── ComponentName.js       # Main component
├── ComponentName.test.js  # Tests (future)
└── index.js              # Re-export
```

### File Naming

- Components: `PascalCase.js` (e.g., `HeroSection.js`)
- Hooks: `camelCase.js` (e.g., `useMediaQuery.js`)
- Utils: `camelCase.js` (e.g., `validation.js`)
- Configs: `camelCase.config.js` (e.g., `hero.config.js`)

### Import Order

```javascript
// 1. React/Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. External libraries
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// 3. Internal components
import { Container, Section } from '@/lib/components';

// 4. Hooks
import { useMediaQuery } from '@/lib/hooks';

// 5. Utils
import { validation } from '@/lib/utils';

// 6. Configs
import { heroConfig } from '@/content/sections/hero.config';

// 7. Styles (if separate)
import styles from './styles.module.css';
```

### Styling Guidelines

**Use MUI's styled() API:**
```javascript
const StyledBox = styled(Box)(({ theme, variant }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,

  // Responsive
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },

  // Conditional
  ...(variant === 'special' && {
    border: `2px solid ${theme.palette.primary.main}`,
  }),
}));
```

**Avoid inline styles:**
```javascript
// Bad
<div style={{ padding: '16px' }}>...</div>

// Good
<Box sx={{ p: 2 }}>...</Box>
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding tests
- `chore`: Build process or auxiliary tool changes

### Examples

```bash
feat(hero): add video background variant

Add HeroVideo component with autoplay and controls.
Supports YouTube, Vimeo, and direct MP4 videos.

Closes #123
```

```bash
fix(modal): prevent backdrop click when disabled

Fixed issue where modal would close on backdrop click
even when closeOnBackdropClick was set to false.

Fixes #456
```

```bash
docs(readme): update installation instructions

Added Node.js version requirement and troubleshooting
section for common setup issues.
```

### Commit Best Practices

- Write clear, concise commit messages
- Use present tense ("add feature" not "added feature")
- Reference issues and PRs when applicable
- Keep commits atomic (one logical change per commit)

---

## Pull Request Process

### Before Submitting

1. **Update your branch**
```bash
git checkout main
git pull origin main
git checkout your-branch
git rebase main
```

2. **Test your changes**
```bash
npm run build
npm run lint
```

3. **Update documentation** if needed

### PR Title Format

```
[Type] Brief description
```

Examples:
- `[Feature] Add dark mode toggle component`
- `[Fix] Resolve modal backdrop click issue`
- `[Docs] Update SETUP.md with troubleshooting section`

### PR Description Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe how you tested your changes.

## Screenshots (if applicable)
Add screenshots or GIFs.

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)

## Related Issues
Closes #(issue number)
```

### Review Process

1. **Submit PR** for review
2. **Address feedback** from reviewers
3. **Update PR** based on comments
4. **Wait for approval** from maintainers
5. **Merge** (done by maintainers)

---

## Component Guidelines

### Creating a New Component

1. **Plan the component**
   - What problem does it solve?
   - What variants are needed?
   - What configuration options?

2. **Create the structure**
```bash
mkdir -p src/lib/components/category/ComponentName
touch src/lib/components/category/ComponentName/ComponentName.js
touch src/lib/components/category/ComponentName/index.js
```

3. **Write the component**
```javascript
'use client';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledWrapper = styled(Box)(({ theme }) => ({
  // Styles
}));

export default function ComponentName({ config, sx = {} }) {
  if (!config) return null;

  return (
    <StyledWrapper sx={sx}>
      {/* Component content */}
    </StyledWrapper>
  );
}
```

4. **Add exports**
```javascript
// index.js
export { default } from './ComponentName';

// category/index.js
export { default as ComponentName } from './ComponentName';
```

5. **Create config example**
```javascript
// content/sections/componentName.config.js
export const componentNameConfig = {
  title: "Example Title",
  // ... configuration
};
```

### Component Checklist

- [ ] Follows naming conventions
- [ ] Has JSDoc comments
- [ ] Accepts `config` and `sx` props
- [ ] Has null check for config
- [ ] Uses MUI theme system
- [ ] Is responsive (uses breakpoints)
- [ ] Has proper exports
- [ ] Includes config example

---

## Documentation Guidelines

### Updating Documentation

When adding features, update:
- **README.md** - Add to component list, usage examples
- **SETUP.md** - If setup process changes
- **ARCHITECTURE.md** - If architecture changes
- **IMPLEMENTATION_PROGRESS.md** - Track progress

### Documentation Style

- Use clear, concise language
- Include code examples
- Add visual examples (screenshots/GIFs) when helpful
- Keep formatting consistent
- Update table of contents

---

## Questions?

If you have questions:
1. Check existing documentation
2. Search closed issues
3. Ask in discussions
4. Open a new issue with the "question" label

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
