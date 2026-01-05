import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Katapult Africa',
  description: 'Katapult Africa - Empowering African innovation and entrepreneurship',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
