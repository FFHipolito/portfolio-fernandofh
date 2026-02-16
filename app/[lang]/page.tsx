import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getRepos, getProfile } from '@/lib/github';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const repos = await getRepos();
  const profile = await getProfile();
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-indigo-500/30">
      
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="font-bold text-lg tracking-tighter">
            FFH<span className="text-indigo-500">.</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
             <div>
               <LanguageSwitcher currentLang={lang} />
             </div>

            <div className="flex items-center gap-2 sm:gap-4 border-l border-white/10 pl-2 sm:pl-4">
              <Link href="https://github.com/FFHipolito" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/in/fernando-hipólito" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:fernandofhipolito@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl opacity-30 animate-pulse" />
             <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30" />
        </div>
        
        <div className="container mx-auto relative z-10 text-center max-w-4xl flex flex-col items-center">
          <div className="mb-8 relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-70 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background">
                <Image 
                  src={profile?.avatar_url || "https://github.com/FFHipolito.png"} 
                  alt={profile?.name || "Fernando Hipólito"}
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </div>



          <Badge variant="default" className="mb-6 px-4 py-1 text-sm border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
            {dict.hero.status}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60" dangerouslySetInnerHTML={{ __html: dict.hero.title }} />
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {dict.hero.bio_part1} <span className="text-indigo-400 font-medium">{profile?.name || 'Fernando Fontes Hipólito'}</span>. 
            <br />
            <strong>{dict.hero.bio_role}</strong> {dict.hero.bio_since}
            <br />
            {dict.hero.bio_part2}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#projetos">
              <Button size="lg" className="rounded-full h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-700">
                {dict.hero.cta_projects} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contato">
              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-white/10 hover:bg-white/5">
                {dict.hero.cta_contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{dict.stack.title}</h2>
              <p className="text-muted-foreground">{dict.stack.subtitle}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <Code2 className="h-8 w-8 text-indigo-500 mb-2" />
                  <CardTitle>{dict.stack.frontend_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.stack.frontend_desc}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-zinc-900/50 border-zinc-800">
                 <CardHeader>
                  <Terminal className="h-8 w-8 text-indigo-500 mb-2" />
                  <CardTitle>{dict.stack.backend_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.stack.backend_desc}</p>
                 </CardContent>
              </Card>

               <Card className="bg-zinc-900/50 border-zinc-800">
                 <CardHeader>
                  <Cpu className="h-8 w-8 text-indigo-500 mb-2" />
                  <CardTitle>{dict.stack.eng_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{dict.stack.eng_desc}</p>
                 </CardContent>
              </Card>
           </div>
        </div>
      </section>

      <section className="py-20 px-4" id="projetos">
        <div className="container mx-auto max-w-6xl">
           <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">{dict.projects.title}</h2>
                <p className="text-muted-foreground">{dict.projects.subtitle}</p>
              </div>
              <Link href="https://github.com/FFHipolito" target="_blank" className="hidden sm:inline-flex text-sm text-indigo-400 hover:text-indigo-300 items-center gap-1 transition-colors">
                {dict.projects.view_all} <ExternalLink className="h-3 w-3" />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full bg-zinc-900/30 hover:bg-zinc-900/60 border-indigo-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10">{dict.projects.featured}</div>
          
                <div className="relative w-full h-48 overflow-hidden bg-zinc-900/50">
                   <Image 
                     src="/images/TaskManager.png" 
                     alt="Task Manager"
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                   />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="truncate pr-2 group-hover:text-indigo-400 transition-colors">Task Manager</CardTitle>
                    <Badge variant="default" className="text-[10px] uppercase bg-indigo-500/20 text-indigo-300">Next.js</Badge>
                  </div>
                  <CardDescription className="line-clamp-2 min-h-[40px]">
                    Aplicação completa de gerenciamento de tarefas com interface moderna.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-0">
                   <p className="text-xs text-muted-foreground/80 mt-2">
                     React • TypeScript • Tailwind
                   </p>
                </CardContent>
                <CardFooter>
                  <Link href="https://task-manager-frontend-eight-rose.vercel.app/" target="_blank" className="w-full">
                    <Button variant="default" className="w-full bg-indigo-600 hover:bg-indigo-700">
                      {dict.projects.view_demo} <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {repos.length > 0 ? (
                repos.map((repo) => (
                  <Card key={repo.id} className="flex flex-col h-full bg-zinc-900/30 hover:bg-zinc-900/60 border-zinc-800 transition-colors group overflow-hidden">
                    
                    <div className="relative w-full h-48 overflow-hidden bg-zinc-900/50 border-b border-white/5">
                       <Image 
                         src={`https://opengraph.githubassets.com/1/FFHipolito/${repo.name}`} 
                         alt={repo.name}
                         fill
                         className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                       />
                    </div>

                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="truncate pr-2 group-hover:text-indigo-400 transition-colors">{repo.name}</CardTitle>
                        <Badge variant="secondary" className="text-[10px] uppercase">{repo.language || 'Code'}</Badge>
                      </div>
                      <CardDescription className="line-clamp-2 min-h-[40px]">
                        {repo.description || dict.projects.no_desc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                    </CardContent>
                    <CardFooter>
                      <Link href={repo.html_url} target="_blank" className="w-full">
                        <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 hover:text-white group-hover:border-indigo-500/30">
                          {dict.projects.view_code} <Github className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  <p>{dict.projects.error}</p>
                </div>
              )}
           </div>
           
           <div className="mt-8 text-center sm:hidden">
              <Link href="https://github.com/FFHipolito" target="_blank">
                <Button variant="link">{dict.projects.view_all}</Button>
              </Link>
           </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 bg-black" id="contato">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-6">{dict.footer.title}</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              {dict.footer.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 mb-12">
               <Link href="mailto:fernandofhipolito@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Mail className="h-6 w-6" />
               </Link>
               <Link href="https://linkedin.com/in/fernando-hipólito" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Linkedin className="h-6 w-6" />
               </Link>
               <Link href="https://github.com/FFHipolito" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <Github className="h-6 w-6" />
               </Link>
            </div>
            <p className="text-xs text-zinc-600">
              {dict.footer.rights.replace('{year}', new Date().getFullYear().toString())}
            </p>
        </div>
      </footer>
    </main>
  );
}
