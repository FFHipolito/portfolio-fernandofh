import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fernando Fontes Hipólito',
  description: 'Portfólio profissional de Fernando Fontes Hipólito',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    children
  );
}
