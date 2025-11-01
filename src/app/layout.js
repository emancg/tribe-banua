import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Import theme instance and components
import theme from './theme-instance';
import { AppBar } from '@/lib/components';

// Import content configurations
import { themeConfig } from '../../content/theme.config';
import { navigationConfig } from '../../content/navigation.config';
import { siteConfig } from '../../content/site.config';

export const metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
              brand={themeConfig.brand}
              menuItems={navigationConfig.mainMenu}
              themeColors={themeConfig.colors}
            />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
