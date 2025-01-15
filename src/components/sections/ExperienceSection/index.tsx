import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2 } from 'lucide-react';

// Mock data for professional experiences
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: 'Jan 2021 - Present',
    description:
      'Lead developer for enterprise-level web applications, focusing on scalability and performance optimization.',
    responsibilities: [
      'Architected and implemented microservices using Node.js and TypeScript',
      'Developed responsive front-end interfaces with Next.js and Tailwind CSS',
      'Managed a team of 5 developers, overseeing code reviews and mentoring junior developers',
      'Implemented CI/CD pipelines using GitHub Actions and Docker',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'InnovateSoft',
    period: 'Mar 2018 - Dec 2020',
    description:
      'Worked on various client projects, developing full-stack web applications and e-commerce platforms.',
    responsibilities: [
      'Built and maintained RESTful APIs using Express and TypeORM',
      'Developed front-end applications using React and Redux',
      'Integrated third-party services and APIs, including payment gateways and social media platforms',
      'Optimized database queries and implemented caching strategies for improved performance',
    ],
    technologies: ['React', 'Express', 'TypeORM', 'MySQL', 'Redis', 'Azure'],
  },
  {
    title: 'Junior Web Developer',
    company: 'StartUp Dynamics',
    period: 'Jun 2016 - Feb 2018',
    description:
      'Contributed to the development of a SaaS product for project management and collaboration.',
    responsibilities: [
      'Implemented new features and fixed bugs in the front-end using Angular',
      'Assisted in the development of back-end services using C# and .NET Core',
      'Participated in daily stand-ups and sprint planning meetings',
      'Wrote unit tests and participated in code reviews',
    ],
    technologies: ['Angular', 'C#', '.NET Core', 'SQL Server', 'Git'],
  },
];

export default function ExperienceSection() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-400 md:text-4xl">
          Experiência Profissional
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gray-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="mt-1 flex items-center text-gray-600">
                      <Building2 className="mr-1 h-4 w-4" />
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    <CalendarDays className="mr-1 inline h-4 w-4" />
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{exp.description}</p>
                <h4 className="mb-2 font-semibold text-gray-800">
                  Key Responsibilities:
                </h4>
                <ul className="mb-4 list-disc space-y-1 pl-5 text-gray-700">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
