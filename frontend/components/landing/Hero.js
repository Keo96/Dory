"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
              >
                <Heart className="w-6 h-6 text-blue-600" />
              </motion.div>
              <span className="text-yellow-300 font-semibold text-lg tracking-wide">AI-Powered Accessibility</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Learning Made <span className="block text-yellow-300">Simple & Clear</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Transform any classroom material into personalized, accessible content for neurodivergent learners
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-lg">
                Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl">
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/90">
              {["No credit card required", "Setup in minutes"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-base">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e6964b760547e2876cd29/11e56123f_image.png"
                  alt="Dory Logo"
                  width={512}
                  height={512}
                  className="w-full max-w-md mx-auto drop-shadow-2xl h-auto"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-yellow-300/30 blur-3xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </div>
  );
}
