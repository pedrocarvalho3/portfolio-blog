import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce solution with Next.js, Node.js, and PostgreSQL.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/ecommerce-platform',
    liveLink: 'https://ecommerce-platform-demo.vercel.app',
  },
  {
    title: 'Task Management App',
    description:
      'A React-based task management application with a .NET backend.',
    technologies: ['React', 'C# .NET', 'SQL Server', 'Material-UI'],
    githubLink: 'https://github.com/yourusername/task-management-app',
    liveLink: 'https://task-app-demo.azurewebsites.net',
  },
  {
    title: 'Blog CMS',
    description: 'A custom CMS for bloggers built with Next.js and GraphQL.',
    technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/blog-cms',
    liveLink: 'https://blog-cms-demo.vercel.app',
  },
  {
    title: 'Fitness Tracker',
    description: 'A mobile-first web app for tracking workouts and nutrition.',
    technologies: ['React Native', 'Express', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com/yourusername/fitness-tracker',
    liveLink: 'https://fitness-tracker-demo.netlify.app',
  },
];

export default function ProjectSection() {
  return (
    <section className="bg-teal-700 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-6xl font-bold text-white md:text-4xl">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between bg-white shadow-lg"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
