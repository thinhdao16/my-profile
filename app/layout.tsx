import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Rubik } from 'next/font/google';
import { Providers } from '@/components/providers';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const rubik = Rubik({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

const siteUrl = 'https://github.com/thinhdao16/my-profile';

export const metadata: Metadata = {
  metadataBase: new URL('https://thinhdao16.github.io'),
  title: {
    default: 'Dao Duc Thinh — Full-stack Developer (.NET 8 & React)',
    template: '%s | Dao Duc Thinh',
  },
  description:
    'Portfolio của Đào Đức Thịnh (Dao Duc Thinh) — Kỹ sư Full-stack hơn 4 năm kinh nghiệm thiết kế kiến trúc hệ thống .NET 8, React, Next.js 15, TypeScript, AWS, Docker và vi dịch vụ Clean Architecture.',
  keywords: [
    'Đào Đức Thịnh',
    'Dao Duc Thinh',
    'Full-stack Developer',
    'Kỹ sư Lập trình',
    '.NET 8',
    'C#',
    'React',
    'React 19',
    'Next.js',
    'Next.js 15',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Clean Architecture',
    'CQRS',
    'SignalR',
    'WebSockets',
    'Software Engineer Vietnam',
    'Ho Chi Minh City Developer',
  ],
  authors: [{ name: 'Đào Đức Thịnh', url: siteUrl }],
  creator: 'Đào Đức Thịnh',
  publisher: 'Đào Đức Thịnh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/?lang=vi',
      'en-US': '/?lang=en',
    },
  },
  openGraph: {
    title: 'Đào Đức Thịnh — Kỹ sư Full-stack (.NET 8 & React 19)',
    description:
      'Hơn 4 năm kinh nghiệm chuyên sâu về vi dịch vụ .NET 8, Clean Architecture, CQRS, React, Next.js và hạ tầng đám mây AWS.',
    url: siteUrl,
    siteName: 'Đào Đức Thịnh Portfolio',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    type: 'profile',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Đào Đức Thịnh — Full-stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đào Đức Thịnh — Full-stack Developer (.NET 8 & React)',
    description:
      '4+ years architecting scalable web and mobile applications with .NET 8, React, Next.js, TypeScript, and AWS.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: '#1b1b1b',
  width: 'device-width',
  initialScale: 1,
};

// JSON-LD Structured Data Schema for Google Rich Results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Đào Đức Thịnh',
  alternateName: 'Dao Duc Thinh',
  jobTitle: 'Full-stack Developer',
  url: siteUrl,
  image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  sameAs: [
    'https://github.com/thinhdao16',
    'https://www.linkedin.com/in/daoducthinh1105',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ho Chi Minh City',
    addressCountry: 'VN',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'FPT University',
  },
  knowsAbout: [
    '.NET 8',
    'C#',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'Amazon Web Services (AWS)',
    'Clean Architecture',
    'Domain-Driven Design (DDD)',
    'Command Query Responsibility Segregation (CQRS)',
    'Real-time WebSockets',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${instrumentSerif.variable} ${rubik.variable}`}
    >
      <head>
        {/* Schema.org Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#1b1b1b] text-[#eaeaea] selection:bg-emerald-500/25 selection:text-emerald-300 font-sans antialiased overflow-x-hidden min-h-screen"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
