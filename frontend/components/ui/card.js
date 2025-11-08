"use client";
import React from "react";

// Minimal Card wrapper used in landing features and other places.
export function Card({ children, className = "", ...props }) {
  return (
    <div {...props} className={`rounded-2xl p-4 bg-white shadow-sm ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;
