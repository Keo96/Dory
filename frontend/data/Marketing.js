// Compatibility shim: some imports use lowercase path '@/data/marketing'.
// The canonical file in this repo is `Marketing.js` (capital M). Re-export
// so both import styles work across environments.
export * from './Marketing';
import { Eye, Sparkles, Volume2, Shield } from "lucide-react";

export const features = [
  { icon: Eye, title: "Simplified Content",
    description: "Complex materials transformed into easy-to-understand formats that work for every learner",
    color: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: Sparkles, title: "Visual Learning",
    description: "Rich visual aids and graphics that make concepts clear and memorable",
    color: "bg-yellow-100", iconColor: "text-yellow-600" },
  { icon: Volume2, title: "Audio Support",
    description: "Listen to any content with high-quality text-to-speech technology",
    color: "bg-orange-100", iconColor: "text-orange-600" },
  { icon: Shield, title: "Compliance Ready",
    description: "Every transformation logged and tracked for accessibility compliance",
    color: "bg-green-100", iconColor: "text-green-600" },
];

export const benefits = [
  "Personalized learning experiences for every student",
  "Reduce teacher workload with AI automation",
  "Meet accessibility requirements effortlessly",
  "Improve student engagement and outcomes",
  "Support diverse learning styles and needs",
];

export const stats = [
  { value: "10x", label: "Faster Content Adaptation" },
  { value: "95%", label: "Teacher Satisfaction" },
  { value: "100%", label: "Compliance Coverage" },
];
