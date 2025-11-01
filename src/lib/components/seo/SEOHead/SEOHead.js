'use client';

import Head from 'next/head';

/**
 * SEOHead Component
 *
 * Comprehensive SEO meta tags component
 *
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Page description
 * @param {string} config.keywords - Meta keywords (comma-separated)
 * @param {string} config.ogTitle - Open Graph title (defaults to title)
 * @param {string} config.ogDescription - Open Graph description (defaults to description)
 * @param {string} config.ogImage - Open Graph image URL
 * @param {string} config.ogUrl - Open Graph URL (canonical URL)
 * @param {string} config.ogType - Open Graph type (default: 'website')
 * @param {string} config.twitterCard - Twitter card type (default: 'summary_large_image')
 * @param {string} config.twitterSite - Twitter site handle
 * @param {string} config.twitterCreator - Twitter creator handle
 * @param {string} config.canonical - Canonical URL
 * @param {string} config.robots - Robots meta (default: 'index, follow')
 * @param {Array} config.alternateLanguages - Array of alternate language objects
 */

export default function SEOHead({ config }) {
  if (!config) {
    return null;
  }

  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    twitterSite,
    twitterCreator,
    canonical,
    robots = 'index, follow',
    alternateLanguages = [],
  } = config;

  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph Meta Tags */}
      {finalOgTitle && <meta property="og:title" content={finalOgTitle} />}
      {finalOgDescription && <meta property="og:description" content={finalOgDescription} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogType && <meta property="og:type" content={ogType} />}
      <meta property="og:site_name" content={title} />

      {/* Twitter Card Meta Tags */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {finalOgTitle && <meta name="twitter:title" content={finalOgTitle} />}
      {finalOgDescription && <meta name="twitter:description" content={finalOgDescription} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* Alternate Languages */}
      {alternateLanguages.map((lang, index) => (
        <link
          key={index}
          rel="alternate"
          hrefLang={lang.hrefLang}
          href={lang.href}
        />
      ))}

      {/* Viewport and Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no" />

      {/* Additional Meta */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
}
