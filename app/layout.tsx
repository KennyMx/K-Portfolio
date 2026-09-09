import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Kenny Mustapha — Software Engineer',
  description:
    'Software engineer and Computer Science student at Simon Fraser University. Building thoughtful backend systems, intelligent tools, and software with real-world impact.',
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
