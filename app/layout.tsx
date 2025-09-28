import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Karim Essam | Software Engineer",
  description: "Experienced Software Engineer specializing in backend development with ASP.NET Core, SQL Server, and cloud technologies. View my portfolio to see my latest projects and technical expertise.",
  keywords: ["Software Engineer", "Backend Developer", "ASP.NET Core", "SQL Server", "Full Stack Developer"],
  authors: [{ name: "Karim Essam" }],
  openGraph: {
    title: "Karim Essam | Software Engineer",
    description: "Experienced Software Engineer specializing in backend development with ASP.NET Core, SQL Server, and cloud technologies.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pic.png",
        width: 1200,
        height: 630,
        alt: "Karim Essam - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Karim Essam | Software Engineer",
    description: "Experienced Software Engineer specializing in backend development with ASP.NET Core, SQL Server, and cloud technologies.",
    images: ["/pic.png"]
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
