"use client";
import Image from "next/image";

export default function MarketingFooter() {
  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
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
  );
}
