// Default to a local backend URL in dev so API_BASE isn't strictly required.
// In production set API_BASE and optionally AI_PATH in `frontend/.env.local`.
const BASE = process.env.API_BASE || "http://localhost:8000";
const PATH = process.env.AI_PATH || "/api/summarize";

// small helper: safe join of base + path
function joinUrl(base, path) {
  return `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;
}

// minimal default profile in case client doesn't send one
const DEFAULT_PROFILE = {
  learningNeed: "dyslexia", // tweak if your backend expects other fields
};

export async function POST(req) {
  // If BASE is not configured, we default to localhost:8000 above. This
  // allows local development without creating .env.local. For production,
  // set API_BASE to your deployed backend URL.

  try {
    const incoming = await req.json(); // { text, profile? }

    // Debug: print what we'll call upstream (helps track misconfig / env issues)
    console.log("[visualize route] forwarding to:", joinUrl(BASE, PATH));

    // Build the backend payload the dispatcher expects
    const payload = {
      mode: "visualize",
      text: incoming?.text ?? "",
      profile: incoming?.profile || DEFAULT_PROFILE,
    };

    const upstream = await fetch(joinUrl(BASE, PATH), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Always attempt to return JSON to the client
    const raw = await upstream.text();
  // Debug: log upstream status and a short preview of the response
  console.log("[visualize route] upstream status:", upstream.status);
  console.log("[visualize route] upstream raw (first 1000 chars):", raw.slice(0, 1000));
    let data;
    try { data = JSON.parse(raw); } catch { data = { raw }; }

    return Response.json(data, { status: upstream.status });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
