'use client';

import { ExternalLink, Github, Code2 } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50 flex flex-col h-full">
      <div className="p-6 space-y-4 flex-1">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <div className="p-2 bg-secondary rounded-full text-secondary-foreground">
            <Code2 size={20} />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center p-6 pt-0 gap-4 mt-auto">
        {link && (
          <Link 
            href={link}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Link>
        )}
        {github && (
          <Link 
            href={github}
            target="_blank"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
          >
            <Github className="mr-2 h-4 w-4" />
            Código
          </Link>
        )}
      </div>
    </div>
  );
}
