'use client';

import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import * as MuiIcons from '@mui/icons-material';

/**
 * AppBar Component
 *
 * Responsive navigation bar with logo and menu
 *
 * @param {Object} brand - Brand configuration
 * @param {string} brand.name - Brand name
 * @param {Object} brand.logo - Logo configuration
 * @param {string} brand.logo.icon - MUI icon name
 * @param {string} brand.logo.text - Logo text
 * @param {Array} menuItems - Navigation menu items
 * @param {string} menuItems[].label - Menu item label
 * @param {string} menuItems[].href - Menu item link
 * @param {string} menuItems[].type - Menu item type (page, section)
 * @param {Object} themeColors - Theme color palette
 * @param {Object} themeColors.primary - Primary color object
 * @param {string} themeColors.primary.main - Primary color
 */

export default function AppBar({ brand, menuItems = [], themeColors }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // Resolve logo icon
  const LogoIcon = brand?.logo?.icon && MuiIcons[brand.logo.icon]
    ? MuiIcons[brand.logo.icon]
    : MuiIcons.Business;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        backgroundColor: themeColors?.primary?.main || '#1976d2',
        color: 'white'
      }}
    >
      <Toolbar>
        {/* Logo - Desktop */}
        <LogoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {brand?.logo?.text || brand?.name || 'LOGO'}
        </Typography>

        {/* Mobile Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Link
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo - Mobile */}
        <LogoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {brand?.logo?.text || brand?.name || 'LOGO'}
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} style={{ textDecoration: 'none' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}
