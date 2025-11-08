"use client";
import React from "react";

// Minimal Button component used across the app. Keep it small so the project builds.
export function Button({ children, className = "", variant, ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl";
  const size = "px-6 py-3";
  const variantClass =
    variant === "outline"
      ? "bg-transparent border-2 border-current text-inherit"
      : "bg-white text-blue-600";

  return (
    <button {...props} className={`${base} ${size} ${variantClass} ${className}`.trim()}>
      {children}
    </button>
  );
}

export default Button;
