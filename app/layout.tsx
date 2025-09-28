import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Karema Hamdy | Software Engineer",
  description: "Experienced Software Engineer specializing in Frontend development with React | Next | Vue View my portfolio to see my latest projects and technical expertise.",
  keywords: ["Software Engineer", "Frontend Developer", "React | Next | Vue", "Full Stack Developer"],
  authors: [{ name: "Karema Hamdy" }],
  openGraph: {
    title: "Karema Hamdy | Software Engineer",
    description: "Experienced Software Engineer specializing in Frontend development with React | Next | Vue",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/karema.jpg",
        width: 1200,
        height: 630,
        alt: "Karema Hamdy - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Karema Hamdy | Software Engineer",
    description: "Experienced Software Engineer specializing in Frontend development with ASP.NET Core",
    images: ["/karema.jpg"]
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
