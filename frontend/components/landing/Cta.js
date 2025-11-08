"use client";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Users className="w-16 h-16 text-white mx-auto mb-4" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Join Thousands of Educators Making Learning Accessible</h2>
        <p className="text-lg md:text-xl text-white/90 mb-8">Start your free trial today and transform how your students learn</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-lg font-semibold">Get Started Now</Button>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold">Schedule a Demo</Button>
        </div>
      </div>
    </motion.div>
  );
}
