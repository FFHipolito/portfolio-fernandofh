import { Inter } from 'next/font/google';
import '../globals.css';
import { i18n } from '@/i18n-config';
import { ThemeProvider } from '@/lib/theme-context';
import { ChatWidget } from '@/components/FezinhoChat/ChatWidget';

import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

const inter = Inter({ subsets: ['latin'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ChatWidget dict={dictionary.chat} />
        </ThemeProvider>
      </body>
    </html>
  );
}