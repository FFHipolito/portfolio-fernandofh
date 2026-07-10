'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HeroActionsProps {
  projectsText: string;
  contactText: string;
}

export function HeroActions({ projectsText, contactText }: HeroActionsProps) {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const phoneNumber = '5511953176750';
    // Utilizando a API do WhatsApp com mensagem inicial
    const message = encodeURIComponent('Olá, gostaria de conversar sobre um projeto!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button
        onClick={handleScrollToProjects}
        size="lg"
        className="rounded-full h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-700"
      >
        {projectsText} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button
        onClick={handleContactWhatsApp}
        variant="outline"
        size="lg"
        className="rounded-full h-12 px-8 text-base border-white/10 hover:bg-white/5"
      >
        {contactText}
      </Button>
    </div>
  );
}
