import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import PerformanceScene from '@/components/3d/PerformanceScene';
import FloatingShapes from '@/components/3d/FloatingShapes';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background 3D */}
      <div className="absolute inset-0 z-0 opacity-60">
        <PerformanceScene>
          <FloatingShapes />
        </PerformanceScene>
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Disponível para novos projetos
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Criando experiências digitais <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              memoráveis e performáticas
            </span>
          </h1>
          
          <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
            Sou Fernando Fontes Hipólito, um desenvolvedor focado em construir interfaces modernas, acessibilidade e performance.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-100">
          <Link 
            href="/projetos" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 h-11 px-8 transition-colors"
          >
            Ver Projetos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          <Link 
            href="/contato" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-gray-700 bg-transparent text-white hover:bg-white/10 h-11 px-8 transition-colors"
          >
            Entrar em Contato
          </Link>
        </div>

        <div className="flex items-center gap-6 text-gray-500 mt-8 animate-fade-in-up delay-200">
          <a href="https://github.com/FFHipolito" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/fernando-hipólito" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </main>
  );
}
