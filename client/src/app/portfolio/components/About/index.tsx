"use client"

import { motion, useInView } from "framer-motion"
import { Brain, Code, Heart } from "lucide-react"
import Image from "next/image"
import { useRef } from "react";

export default function About() {
  const imgRef = useRef(null);
  const imgInView = useInView(imgRef, { once: true });
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={imgRef}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: imgInView ? 1 : 0, x: imgInView ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="relative inline-block mb-8">
                <div className="h-80 w-80 mx-auto overflow-hidden rounded-full border-4 border-teal-600 shadow-2xl">
                  <Image
                    src="/photo-profile.jpeg"
                    alt="Minha foto"
                    width={320}
                    height={320}
                    className="rounded-full object-cover object-bottom hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <motion.div whileHover={{ scale: 1.1 }} className="bg-teal-600 rounded-full p-3 shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="bg-teal-600 rounded-full p-3 shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="bg-teal-600 rounded-full p-3 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-white">Desenvolvedor Full-Stack</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Sou um desenvolvedor web apaixonado, com uma jornada profissional focada em criar soluções digitais
                  inovadoras e eficientes. Minha especialização abrange tanto o desenvolvimento front-end quanto
                  back-end, permitindo-me construir aplicações web completas e robustas.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-teal-600" />
                  <h3 className="text-xl font-semibold text-white">Foco no Usuário</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Minha abordagem ao desenvolvimento web é centrada no usuário, priorizando a criação de interfaces
                  intuitivas e experiências fluidas. Acredito na importância de combinar design atraente com
                  funcionalidade sólida, sempre buscando as melhores práticas e tecnologias mais recentes para entregar
                  projetos de alta qualidade.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gray-800 rounded-full px-8 py-4 shadow-lg">
            <Brain className="w-6 h-6 text-teal-600" />
            <span className="text-white font-medium text-lg">
              Sempre em busca de novos desafios e oportunidades de aprendizado!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
