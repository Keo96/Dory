"use client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function Mission() {
  return (
    <div className="py-16 md:py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
          <Lightbulb className="w-5 h-5 text-blue-600" />
          <span className="text-blue-900 font-semibold">Our Mission</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Every Student Deserves to Learn Their Way</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Dory makes learning accessible for neurodivergent students, especially those with dyslexia.
          We transform complex classroom materials into formats that work for every unique learner.
        </p>
      </motion.div>
    </div>
  );
}
