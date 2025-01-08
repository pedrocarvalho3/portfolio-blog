'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Intro() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-[90vh] text-white p-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Olá! Sou Pedro Carvalho
        </motion.h1>
        <h2 className="text-2xl md:text-3xl mb-6">
          <TypeAnimation
            sequence={[
              'Desenvolvedor Web Fullstack',
              2000,
              'Especialista em React & Next.js',
              2000,
              'Criador de Soluções Inovadoras',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <motion.p 
          className="text-lg mb-6 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Sou um desenvolvedor web fullstack com experiência em criar soluções inovadoras e escaláveis. 
          Minha paixão é combinar as necessidades do cliente com as melhores práticas de desenvolvimento.
        </motion.p>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden text-justify"
        >
          <p className="text-lg mb-6">
            Ao longo da minha carreira, trabalhei com uma variedade de tecnologias, incluindo React, Next.js, Node.js, e SQL. 
            Tenho um forte foco em oferecer experiências intuitivas e funcionais para os usuários, além de garantir um desempenho de alto nível para os sistemas que desenvolvo.
          </p>
          <p className="text-lg mb-6">
            Além disso, tenho experiência em gestão de banco de dados, integrações de API, e desenvolvimento de sistemas personalizados, 
            com um olhar atento para a otimização de processos e a experiência do usuário.
          </p>
          <p className="text-lg mb-6">
            Se você está procurando um profissional apaixonado por desenvolvimento web, com habilidades tanto no front-end quanto no back-end, 
            estou aqui para ajudar a transformar suas ideias em realidade.
          </p>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-teal-600 font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:bg-teal-100 transition duration-300"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Ler Menos' : 'Ler Mais'}
        </motion.button>
      </div>
    </motion.div>
  )
}

