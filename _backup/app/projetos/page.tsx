import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: "E-commerce Next.js",
    description: "Uma plataforma de comércio eletrônico completa com carrinho, checkout integrado e painel administrativo em tempo real.",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "AI Analytics Dashboard",
    description: "Dashboard interativo para visualização de dados processados por inteligência artificial com gráficos dinâmicos.",
    tags: ["React", "Python", "D3.js", "OpenAI API"],
    link: "#",
    github: "#"
  },
  {
    title: "Social Dev Network",
    description: "Rede social focada em desenvolvedores para compartilhamento de snippets, pair programming e networking.",
    tags: ["Vue.js", "Node.js", "GraphQL", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "3D Portfolio Experience",
    description: "Portfólio imersivo utilizando tecnologias WebGL para criar uma experiência de navegação única.",
    tags: ["Three.js", "R3F", "WebGL", "GSAP"],
    link: "#",
    github: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Projetos Selecionados
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Uma coleção de trabalhos que exploram os limites entre design, tecnologia e performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
