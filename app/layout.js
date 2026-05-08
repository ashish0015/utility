import './globals.css';

export const metadata = {
  title: 'TrendTools Hub',
  description: 'Discover trending utilities for productivity, AI, and development.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
