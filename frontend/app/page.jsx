'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Volume2,
  Eye,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: Eye,
      title: "Simplified Content",
      description:
        "Complex materials transformed into easy-to-understand formats that work for every learner",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Sparkles,
      title: "Visual Learning",
      description:
        "Rich visual aids and graphics that make concepts clear and memorable",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: Volume2,
      title: "Audio Support",
      description:
        "Listen to any content with high-quality text-to-speech technology",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description:
        "Every transformation logged and tracked for accessibility compliance",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  const benefits = [
    "Personalized learning experiences for every student",
    "Reduce teacher workload with AI automation",
    "Meet accessibility requirements effortlessly",
    "Improve student engagement and outcomes",
    "Support diverse learning styles and needs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-blue-600" />
                </motion.div>
                <span className="text-yellow-300 font-semibold text-lg tracking-wide">
                  AI-Powered Accessibility
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Learning Made
                <span className="block text-yellow-300">Simple & Clear</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Transform any classroom material into personalized, accessible content for neurodivergent learners
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl shadow-lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-base">No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-base">Setup in minutes</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating animation */}
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

                {/* Glow effect */}
                <div className="absolute inset-0 bg-yellow-300/30 blur-3xl rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            <span className="text-blue-900 font-semibold">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Every Student Deserves to Learn Their Way
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Dory makes learning accessible for neurodivergent students, especially those with dyslexia.
            We transform complex classroom materials into formats that work for every unique learner.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-white">
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 md:p-16 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for Teachers, Loved by Students
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Dory empowers educators to create inclusive classrooms where every student can thrive,
                while staying compliant with accessibility standards.
              </p>
              <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-6 rounded-xl font-semibold">
                Start Transforming Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                >
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                  </div>
                  <p className="text-lg text-white">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "10x", label: "Faster Content Adaptation" },
              { value: "95%", label: "Teacher Satisfaction" },
              { value: "100%", label: "Compliance Coverage" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-3">
                  {stat.value}
                </div>
                <div className="text-xl text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <div className="mb-6">
            <Users className="w-16 h-16 text-white mx-auto mb-4" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Thousands of Educators Making Learning Accessible
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today and transform how your students learn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6 rounded-xl shadow-lg font-semibold">
              Get Started Now
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 rounded-xl font-semibold"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e6964b760547e2876cd29/11e56123f_image.png"
                alt="Dory"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <div className="font-bold text-2xl">Dory</div>
                <div className="text-sm text-blue-300">AI-Powered Learning Accessibility</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-300">© 2025 Dory. Making learning accessible for everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
