"use client";
import { motion } from "framer-motion";
import { benefits } from "@/data/Marketing";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BenefitsPanel() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-blue-600 to-blue-700">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Teachers, Loved by Students</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Dory empowers educators to create inclusive classrooms where every student can thrive, while staying compliant with accessibility standards.
            </p>
            <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-6 rounded-xl font-semibold">
              Start Transforming Content
            </Button>
          </div>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div key={b} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-blue-900" />
                </div>
                <p className="text-lg text-white">{b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
