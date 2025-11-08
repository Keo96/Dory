"use client";

import { useState } from "react";
import Link from "next/link";

export default function VisualizePage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState(null);

  async function onGenerate(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setResult(null);
    try {
      const res = await fetch("/api/visualize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setResult(data);
    } catch (e) {
      setErr(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function RenderOutput({ data }) {
    if (!data) return null;
    if (data.image_base64) {
      const mime = data.mime || "image/png";
      return (
        <img
          src={`data:${mime};base64,${data.image_base64}`}
          alt="Visualization"
          className="mx-auto max-w-full rounded-xl border shadow-sm"
        />
      );
    }
    if (data.url) {
      return (
        <img
          src={data.url}
          alt="Visualization"
          className="mx-auto max-w-full rounded-xl border shadow-sm"
        />
      );
    }
    return (
      <pre className="text-sm bg-gray-50 p-4 rounded-xl border overflow-x-auto text-gray-900">
        {JSON.stringify(data, null, 2)}
      </pre>
    );
  }

  return (
    // Full-width white background to kill the black gutters
    <div className="min-h-screen w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-800">
          Visualize Learning
        </h1>
        <p className="mt-1 text-blue-900/70">
          Generate clear, visual representations of your study content.
        </p>

        {/* Input card */}
        <form
          onSubmit={onGenerate}
          className="mt-6 bg-white border border-blue-100 rounded-2xl shadow-sm p-6 space-y-3"
        >
          <label htmlFor="viz-input" className="text-sm font-semibold text-blue-800">
            Enter topic or text to visualize
          </label>

          {/* High-contrast textarea for readability */}
          <textarea
            id="viz-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Explain the water cycle..."
            className="
              w-full min-h-[120px] rounded-lg p-3
              border border-blue-300 bg-white
              text-blue-950 placeholder:text-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600
              text-base leading-relaxed
            "
          />

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading || !text.trim()}
              className="rounded-lg bg-blue-600 text-white px-5 py-2 font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Generating…" : "Generate Visual"}
            </button>

            <Link
              href="/selfcheck"
              className="rounded-lg border border-blue-300 text-blue-700 px-4 py-2 hover:bg-blue-50"
            >
              Self Check
            </Link>
          </div>

          {err && <p className="text-sm text-red-600">{err}</p>}
        </form>

        {/* Output area */}
        <section
          aria-live="polite"
          className="mt-10 bg-white border border-blue-100 rounded-3xl p-8 text-center shadow-sm"
        >
          <div className="w-full max-w-2xl mx-auto min-h-[250px] flex items-center justify-center">
            {loading ? (
              <div className="animate-pulse w-full h-48 bg-blue-50 rounded-xl" />
            ) : result ? (
              <RenderOutput data={result} />
            ) : (
              // Safe placeholder (plain <img>, not Next <Image>)
              <img
                src="/placeholders/diagram.png"
                alt="diagram placeholder"
                width="640"
                height="360"
                className="opacity-70 mx-auto"
              />
            )}
          </div>

          <Link
            href="/selfcheck"
            className="mt-6 inline-flex items-center rounded-xl bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Self Check
          </Link>
        </section>
      </div>
    </div>
  );
}
