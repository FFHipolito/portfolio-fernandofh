'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { i18n } from '@/i18n-config';
import { useTheme } from '@/lib/theme-context';

export function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const { theme } = useTheme();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className={`flex items-center gap-1 rounded-full p-1 border ${
      theme === 'dark' 
        ? 'bg-black/20 backdrop-blur-sm border-white/5' 
        : 'bg-white/20 backdrop-blur-sm border-black/5'
    }`}>
      {i18n.locales.map((locale) => (
        <Button
          key={locale}
          variant="ghost"
          size="sm"
          className={`h-7 px-2 text-xs uppercase transition-all ${
            currentLang === locale
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : theme === 'dark'
              ? 'text-muted-foreground hover:text-white hover:bg-white/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-black/5'
          }`}
          onClick={() => router.push(redirectedPathname(locale))}
        >
          {locale}
        </Button>
      ))}
    </div>
  );
}