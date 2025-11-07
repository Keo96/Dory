"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Fetch data from your FastAPI backend (make sure it's running!)
    fetch("https://dory-nuem.onrender.com")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to fetch from backend. Is it running on port 8000?");
      });
  }, []); // The empty array means this runs once on page load

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Next.js Frontend (JavaScript)</h1>
      <p>Message from backend: <strong>{message}</strong></p>
    </main>
  );
}