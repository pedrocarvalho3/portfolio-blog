/* eslint-disable react/no-unescaped-entities */
"use client"

import { motion, useInView } from "framer-motion"
import { Circle, FileCode, Terminal } from "lucide-react"
import { useRef } from "react"

export default function SkillsEditor() {
  const editorRef = useRef(null)
  const isInView = useInView(editorRef, { once: true })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: isInView ? 1 : 0,
      y: isInView ? 0 : 50,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    },
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-gray-800 shadow-2xl border border-gray-700">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center bg-gray-700 px-6 py-4"
      >
        <div className="flex space-x-2 mr-4">
          <Circle size={12} fill="#ff5f56" stroke="none" />
          <Circle size={12} fill="#ffbd2e" stroke="none" />
          <Circle size={12} fill="#27c93f" stroke="none" />
        </div>
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-teal-600" />
          <span className="text-sm text-gray-300 font-medium">skills.tsx</span>
        </div>
      </motion.div>

      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 bg-gray-750 p-4 flex flex-col items-center"
        >
          <FileCode size={24} className="text-gray-400" />
        </motion.div>

        {/* Code Content */}
        <motion.div
          ref={editorRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-grow p-6 overflow-auto"
          style={{ fontFamily: "'Fira Code', 'Courier New', monospace" }}
        >
          <div className="text-sm leading-relaxed space-y-1">
            <motion.div variants={itemVariants} className="flex">
              <span className="text-blue-400">const</span>
              <span className="text-white ml-2">skills</span>
              <span className="text-white ml-2">=</span>
              <span className="text-yellow-400 ml-2">{"{"}</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4">
              <span className="text-cyan-400">frontEnd:</span>
              <span className="text-yellow-400 ml-2">[</span>
            </motion.div>
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Styled Components",
              "Design Responsivo",
              "Figma",
              "SEO",
            ].map((skill, index) => (
              <motion.div key={skill} variants={itemVariants} className="ml-8">
                <span className="text-green-400">"{skill}"</span>
                {index < 7 && <span className="text-white">,</span>}
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="ml-4">
              <span className="text-yellow-400">],</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4 mt-4">
              <span className="text-cyan-400">backEnd:</span>
              <span className="text-yellow-400 ml-2">[</span>
            </motion.div>
            {["Node.js", "TypeScript", "Fastify", "Express", "Prisma ORM", "TypeORM", "C#", ".NET"].map(
              (skill, index) => (
                <motion.div key={skill} variants={itemVariants} className="ml-8">
                  <span className="text-green-400">"{skill}"</span>
                  {index < 7 && <span className="text-white">,</span>}
                </motion.div>
              ),
            )}
            <motion.div variants={itemVariants} className="ml-4">
              <span className="text-yellow-400">],</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4 mt-4">
              <span className="text-cyan-400">database:</span>
              <span className="text-yellow-400 ml-2">[</span>
            </motion.div>
            {["PostgreSQL", "MySQL", "MongoDB", "SQLite", "SQL Server"].map((skill, index) => (
              <motion.div key={skill} variants={itemVariants} className="ml-8">
                <span className="text-green-400">"{skill}"</span>
                {index < 4 && <span className="text-white">,</span>}
              </motion.div>
            ))}
            <motion.div variants={itemVariants} className="ml-4">
              <span className="text-yellow-400">],</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4 mt-4">
              <span className="text-cyan-400">tools:</span>
              <span className="text-yellow-400 ml-2">[</span>
            </motion.div>
            {["Git & GitHub", "Docker", "AWS (S3, EC2, RDS)", "REST APIs", "GraphQL", "Webhooks"].map(
              (skill, index) => (
                <motion.div key={skill} variants={itemVariants} className="ml-8">
                  <span className="text-green-400">"{skill}"</span>
                  {index < 5 && <span className="text-white">,</span>}
                </motion.div>
              ),
            )}
            <motion.div variants={itemVariants} className="ml-4">
              <span className="text-yellow-400">],</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4 mt-4">
              <span className="text-cyan-400">methodologies:</span>
              <span className="text-green-400 ml-2">"Scrum, Kanban, Práticas Ágeis"</span>
              <span className="text-white">,</span>
            </motion.div>

            <motion.div variants={itemVariants} className="ml-4 mt-4">
              <span className="text-cyan-400">focus:</span>
              <span className="text-green-400 ml-2">"Desenvolvimento Full-Stack com foco em performance e UX"</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-2">
              <span className="text-yellow-400">{"}"}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-700 px-6 py-3 flex justify-between items-center text-xs text-gray-400"
      >
        <div className="flex items-center gap-4">
          <span>✓ Syntax OK</span>
          <span>📦 30+ Technologies</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
          <span>Ready to code</span>
        </div>
      </motion.div>
    </div>
  )
}