"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* container matches the global header width/spacing */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* header row inside admin area (search/profile + mobile menu) */}
        <Header onMenuClick={() => setSidebarOpen((s) => !s)} />

        <div className="mt-6 flex">
          {/* sidebar (responsive) */}
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          {/* content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
