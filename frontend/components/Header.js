"use client";

import { Menu, Search, Bell, UserCircle, ChevronDown } from "lucide-react";

export default function Header({ onMenuClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* left: mobile menu + search */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-gray-700 hover:bg-gray-50"
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="relative w-56 sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students or resources..."
            className="w-full pl-10 pr-3 py-2 text-sm rounded-full border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* right: notifications + profile */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-gray-700" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle className="h-8 w-8 text-gray-400" />
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900 leading-tight">Admin User</p>
            <p className="text-xs text-gray-500 -mt-0.5">School Administrator</p>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
