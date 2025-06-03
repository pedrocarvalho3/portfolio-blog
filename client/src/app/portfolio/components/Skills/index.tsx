"use client"

import SkillsEditor from "@/components/commons/SkillsEditor";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Habilidades</h2>
            <Code className="w-10 h-10 md:w-12 md:h-12 text-teal-600" />
          </div>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <SkillsEditor />
        </motion.div>
      </div>
    </section>
  )
}
