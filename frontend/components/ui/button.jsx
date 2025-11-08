"use client";
import React from "react";

// Minimal Button component so `@/components/ui/button` resolves during dev.
// Adjust styling/props to match your design system (this is intentionally small).
export function Button({ children, className = "", variant, ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl";
  const size = "px-8 py-4";
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
