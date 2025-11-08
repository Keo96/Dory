"use client";
import { motion } from "framer-motion";
import { stats } from "@/data/Marketing";

export default function StatsStrip() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-3">{s.value}</div>
              <div className="text-xl text-gray-700 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
