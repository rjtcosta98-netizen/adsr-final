import type { Metadata } from 'next';
import ClientLayout from './ClientLayout';
import './globals.css';

export const metadata: Metadata = {
  title: 'AD São Romão | Associação Desportiva Oficial desde 1962',
  description: 'Associação Desportiva São Romão - Clube de futebol desde 1962. Sócios, resultados, notícias, loja oficial e muito mais. Juntos e Fortes!',
  keywords: 'AD São Romão, futebol, Guarda, Portugal, resultados, fixtures, notícias, sócios, loja, clube desportivo, ADSR',
  authors: [{ name: 'AD São Romão' }],
  metadataBase: new URL('https://www.adsaoromao.pt'),
  openGraph: {
    type: 'website',
    url: 'https://www.adsaoromao.pt',
    title: 'AD São Romão - Juntos e Fortes',
    description: 'Associação Desportiva São Romão. 60+ anos de história, paixão e dedicação ao futebol português.',
    images: [
      {
        url: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770728605/WhatsApp_Image_2026-02-08_at_15.15.02_t9y9bc.jpg',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'AD São Romão',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AD São Romão - Juntos e Fortes',
    description: 'Associação Desportiva São Romão. Acompanha resultados, notícias e sé sócio!',
    images: ['https://res.cloudinary.com/dc7zy0p4q/image/upload/v1770728605/WhatsApp_Image_2026-02-08_at_15.15.02_t9y9bc.jpg'],
  },
  icons: {
    icon: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1772023420/608195712_1464591145667195_3693066190005632417_n_2_sbcvav.jpg',
    apple: 'https://res.cloudinary.com/dc7zy0p4q/image/upload/v1772023420/608195712_1464591145667195_3693066190005632417_n_2_sbcvav.jpg',
  },
  other: {
    'theme-color': '#032d61',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://www.adsaoromao.pt" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AD São Romão",
              "url": "https://www.adsaoromao.pt",
              "logo": "https://res.cloudinary.com/dc7zy0p4q/image/upload/v1772023420/608195712_1464591145667195_3693066190005632417_n_2_sbcvav.jpg",
              "description": "Associação Desportiva São Romão - Clube de futebol desde 1962",
              "founded": "1962",
              "foundingLocation": "São Romão, Guarda, Portugal",
              "sameAs": [
                "https://www.facebook.com/adsaoromao",
                "https://www.instagram.com/adsaoromao"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PT",
                "addressLocality": "Seia",
                "addressRegion": "Guarda",
                "postalCode": "6270-259",
                "streetAddress": "Estádio N. Sra. Conceição"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+351 968 966 375",
                "contactType": "Customer Service",
                "email": "info@adsaoromao.pt",
                "areaServed": "PT",
                "availableLanguage": ["pt"]
              }
            }),
          }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
