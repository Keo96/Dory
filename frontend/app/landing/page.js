"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/landing/Hero";
import Mission from "@/components/landing/Mission";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import BenefitsPanel from "@/components/landing/BenefitsPanel";
import StatsStrip from "@/components/landing/StatsStrip";
import Cta from "@/components/landing/Cta";
import MarketingFooter from "@/components/landing/MarketingFooter";

export default function LandingPage() {
  // StatusBar and backend check removed (it was used for a quick integration test).

  return (
    <div className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-6">{/* StatusBar removed */}</div>

      <Hero />

      <div className="max-w-6xl mx-auto px-6">
        <Mission />
        <FeaturesGrid />
      </div>

      <BenefitsPanel />
      <StatsStrip />
      <Cta />
      <MarketingFooter />
    </div>
  );
}
