"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Folder } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Won Games",
    description:
      "E-commerce completo criado no curso de React Avançado, com funcionalidades como listagem de produtos, carrinho, sistema de pagamentos e painel administrativo, seguindo boas práticas de acessibilidade e performance.",
    technologies: [
      "React",
      "Next.js",
      "GraphQL",
      "Apollo Client",
      "Stripe",
      "TypeScript",
      "Jest",
      "Testing Library",
      "Storybook",
    ],
    githubLink: "https://github.com/pedrocarvalho3/nextshop-frontend",
    liveLink: "",
  },
  {
    title: "Painel Externo Integração Shopify",
    description:
      "Painel desenvolvido para empresas gerenciarem assinaturas, sincronizarem produtos e anunciarem itens em lojas Shopify, com integração de pagamentos via Mercado Pago.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "ShadCN UI",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "NextAuth.js",
      "MercadoPago",
    ],
    githubLink: "",
    liveLink: "https://external-panel-expogesso.vercel.app/",
  },
  {
    title: "Desenvolvimento de E-commerce",
    description:
      "Plataforma de e-commerce construída com Next.js e WordPress, apresentando um design responsivo e otimizado, com integração de sistemas de pagamento e APIs do Google.",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN UI", "GraphQL", "WordPress", "Figma", "Google APIs"],
    githubLink: "",
    liveLink: "https://www.rggesso.com/",
  },
  {
    title: "Daily Diet API Rocketseat Challenge",
    description:
      "API completa para controle de dieta diária, desenvolvida para reforçar conceitos de back-end e expandir conhecimentos em tecnologias modernas.",
    technologies: ["Node.js", "TypeScript", "Fastify", "Knex"],
    githubLink: "https://github.com/pedrocarvalho3/02-daily-diet-challenge",
    liveLink: "https://github.com/pedrocarvalho3/02-daily-diet-challenge",
  },
  {
    title: "Natours",
    description:
      "Site responsivo para uma agência fictícia de turismo, desenvolvido no curso de HTML e CSS Avançado, focado em boas práticas e uso de técnicas modernas de CSS.",
    technologies: ["HTML", "CSS", "SCSS"],
    githubLink: "https://github.com/pedrocarvalho3/natours-interface",
    liveLink: "https://natuors-interface.netlify.app/",
  },
  {
    title: "Gerenciador de Games",
    description:
      "Sistema para gestão de games, incluindo categorias e plataformas, desenvolvido na matéria de POO, com foco em modularidade e reutilização de código.",
    technologies: ["Java", "JavaFX", "Swing"],
    githubLink: "https://github.com/pedrocarvalho3/games-java-project",
    liveLink: "",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  }

  return (
    <section id="projects" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Meus Projetos</h2>
            <Folder className="w-10 h-10 md:w-12 md:h-12 text-teal-600" />
          </div>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} whileHover="hover">
              <Card className="h-full flex flex-col bg-gray-800 border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <CardHeader className="border-b border-gray-700 bg-gray-750 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <Code className="text-teal-600 h-5 w-5" />
                  </div>
                  <CardDescription className="text-gray-300 line-clamp-3">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="py-6 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-700 hover:bg-gray-600 text-gray-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between pt-4 border-t border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border-gray-600 text-gray-200 hover:bg-gray-700 ${
                      !project.githubLink && "opacity-50 cursor-not-allowed"
                    }`}
                    asChild={!!project.githubLink}
                    disabled={!project.githubLink}
                  >
                    {project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    ) : (
                      <span className="flex items-center">
                        <Github className="mr-2 h-4 w-4" />
                        Privado
                      </span>
                    )}
                  </Button>

                  <Button
                    variant="default"
                    size="sm"
                    className={`bg-teal-600 hover:bg-teal-700 text-white ${
                      !project.liveLink && "opacity-50 cursor-not-allowed"
                    }`}
                    asChild={!!project.liveLink}
                    disabled={!project.liveLink}
                  >
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Indisponível
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
