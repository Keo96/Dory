"use client";
import React from "react";

// Minimal Card wrapper used in the page. Replace with your real Card implementation
// if you have one from a UI library.
export function Card({ children, className = "", ...props }) {
  return (
    <div {...props} className={`rounded-2xl p-4 bg-white shadow-sm ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;
