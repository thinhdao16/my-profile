import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Rubik } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Dao Duc Thinh — Full-stack Developer (.NET 8 & React)',
  description:
    'Portfolio of Dao Duc Thinh. 4+ years of experience architecting and delivering scalable web and mobile applications with .NET 8, React, TypeScript, Next.js, and AWS.',
  keywords: [
    'Dao Duc Thinh',
    'Full-stack Developer',
    '.NET 8',
    'React',
    'Next.js',
    'TypeScript',
    'Software Engineer',
    'Portfolio',
    'Ho Chi Minh City',
  ],
  authors: [{ name: 'Dao Duc Thinh', url: 'https://github.com/thinhdao16' }],
  creator: 'Dao Duc Thinh',
  openGraph: {
    title: 'Dao Duc Thinh — Full-stack Developer',
    description:
      '4+ years of expertise in .NET 8, React, TypeScript, and Scalable Cloud Architectures.',
    url: 'https://github.com/thinhdao16/my-profile',
    siteName: 'Dao Duc Thinh Portfolio',
    locale: 'vi_VN',
    type: 'website',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${instrumentSerif.variable} ${rubik.variable}`}
    >
      <body className="bg-[#1b1b1b] text-[#eaeaea] selection:bg-emerald-500/25 selection:text-emerald-300 font-sans antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
