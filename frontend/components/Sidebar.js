"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, LayoutDashboard, Users, BookOpen, FileText, Briefcase, Settings } from "lucide-react";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/students", label: "Students", icon: Users },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/compliance", label: "Compliance", icon: FileText },
  { href: "/teachers", label: "Teachers", icon: Briefcase },
  { href: "/settings", label: "Settings", icon: Settings },
];

// small helper: link styling
function NavLink({ href, label, Icon, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  // desktop sidebar
  return (
    <>
      <aside className="hidden md:block w-60 shrink-0 mr-6">
        <div className="sticky top-6 bg-white border border-gray-200 rounded-xl shadow-sm p-4">
          <nav className="space-y-2">
            {links.map(({ href, label, icon: Icon }) => (
              <NavLink
                key={href}
                href={href}
                label={label}
                Icon={Icon}
                active={pathname === href}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={onClose} />
          <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">Navigation</span>
              <button
                className="inline-flex items-center justify-center rounded-md border px-2 py-1 text-gray-700 hover:bg-gray-50"
                onClick={onClose}
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-2">
              {links.map(({ href, label, icon: Icon }) => (
                <NavLink
                  key={href}
                  href={href}
                  label={label}
                  Icon={Icon}
                  active={pathname === href}
                  onClick={onClose}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
