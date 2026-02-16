import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "O Futuro do React Compiler",
      date: "15 Fev 2026",
      excerpt: "Uma análise profunda sobre como o novo compilador do React está mudando a forma como pensamos sobre renderização e performance.",
      category: "Engenharia"
    },
    {
      id: 2,
      title: "Three.js e a Web Imersiva",
      date: "10 Fev 2026",
      excerpt: "Explorando técnicas avançadas para criar experiências 3D performáticas diretamente no navegador usando React Three Fiber.",
      category: "3D"
    },
    {
      id: 3,
      title: "Design Systems em Escala",
      date: "05 Fev 2026",
      excerpt: "Lições aprendidas ao construir e manter sistemas de design para grandes equipes distribuídas.",
      category: "Design"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-400">Pensamentos sobre código, design e tecnologia.</p>
        </div>
        
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="group relative block p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-black">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-500 font-mono">{post.date}</time>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all">
                Ler Artigo <span className="ml-2">→</span>
              </div>
              
              <Link href={`/blog/${post.id}`} className="absolute inset-0">
                <span className="sr-only">Ler {post.title}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}