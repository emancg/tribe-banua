'use client';

import Head from 'next/head';

/**
 * StructuredData Component
 *
 * Generates JSON-LD structured data for rich snippets in search results
 *
 * @param {Object} config - Structured data configuration
 * @param {string} config.type - Schema type (e.g., 'Organization', 'LocalBusiness', 'Product', 'Article', 'Event')
 * @param {Object} config.data - Schema data object
 */

export default function StructuredData({ config }) {
  if (!config || !config.type || !config.data) {
    return null;
  }

  const { type, data } = config;

  // Helper function to generate schema based on type
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };

    return baseSchema;
  };

  const schema = generateSchema();

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

/**
 * Common Schema Generators
 * Helper functions to generate common schema types
 */

export const generateOrganizationSchema = ({
  name,
  url,
  logo,
  description,
  contactPoint,
  sameAs = [],
  address,
}) => ({
  type: 'Organization',
  data: {
    name,
    url,
    logo,
    description,
    ...(contactPoint && { contactPoint }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(address && { address }),
  },
});

export const generateLocalBusinessSchema = ({
  name,
  image,
  telephone,
  email,
  address,
  geo,
  url,
  priceRange,
  openingHours = [],
  description,
}) => ({
  type: 'LocalBusiness',
  data: {
    name,
    image,
    '@id': url,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...geo,
      },
    }),
    ...(priceRange && { priceRange }),
    ...(openingHours.length > 0 && { openingHoursSpecification: openingHours }),
    ...(description && { description }),
  },
});

export const generateProductSchema = ({
  name,
  image,
  description,
  sku,
  brand,
  offers,
  aggregateRating,
  review = [],
}) => ({
  type: 'Product',
  data: {
    name,
    image,
    description,
    sku,
    ...(brand && {
      brand: {
        '@type': 'Brand',
        name: brand,
      },
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers,
      },
    }),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ...aggregateRating,
      },
    }),
    ...(review.length > 0 && { review }),
  },
});

export const generateArticleSchema = ({
  headline,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  description,
  url,
}) => ({
  type: 'Article',
  data: {
    headline,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      ...publisher,
    },
    description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  },
});

export const generateEventSchema = ({
  name,
  startDate,
  endDate,
  location,
  image,
  description,
  offers,
  performer,
  organizer,
}) => ({
  type: 'Event',
  data: {
    name,
    startDate,
    ...(endDate && { endDate }),
    ...(location && {
      location: {
        '@type': 'Place',
        ...location,
      },
    }),
    image,
    description,
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers,
      },
    }),
    ...(performer && {
      performer: {
        '@type': 'PerformingGroup',
        name: performer,
      },
    }),
    ...(organizer && {
      organizer: {
        '@type': 'Organization',
        name: organizer,
      },
    }),
  },
});

export const generateBreadcrumbSchema = (items) => ({
  type: 'BreadcrumbList',
  data: {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  },
});

export const generateFAQSchema = (faqs) => ({
  type: 'FAQPage',
  data: {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
});
