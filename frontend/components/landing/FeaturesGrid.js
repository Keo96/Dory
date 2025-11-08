"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { features } from "@/data/Marketing";

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      {features.map((feature, i) => (
        <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
          <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-white">
            <div className="p-8">
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
