import { useState } from "react";

function App() {
  const [input, setInput] = useState('["1","2","A","B","@"]');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://bajaj-finserv-health-swart.vercel.app/bfhl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: JSON.parse(input) })
      });
      const result = await res.json();
      setResponse(result);
    } catch (err) {
      setResponse({ error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to right, #667eea, #764ba2)", padding: "40px", fontFamily: "Arial, sans-serif", color: "#fff" }}>
      
      {/* 1️⃣ Heading Section */}
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>🚀 Bajaj Finserv Health</h1>
        <p style={{ fontSize: "1rem", opacity: 0.8 }}>Assignment Frontend</p>
      </header>

      {/* 2️⃣ User Input Section */}
      <section style={{ maxWidth: "700px", margin: "0 auto", background: "rgba(255,255,255,0.1)", padding: "20px", borderRadius: "12px", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
        <h2 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>Enter Input</h2>
        <textarea
          rows="5"
          cols="60"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "none", outline: "none", fontSize: "1rem", fontFamily: "monospace", marginBottom: "15px" }}
        />
        <br />
        <button 
          onClick={callApi} 
          disabled={loading}
          style={{ 
            padding: "10px 20px", 
            fontSize: "1rem", 
            fontWeight: "bold", 
            borderRadius: "8px", 
            border: "none", 
            cursor: "pointer", 
            background: loading ? "#999" : "linear-gradient(45deg, #ff6b6b, #f06595)", 
            color: "#fff", 
            transition: "0.3s"
          }}
        >
          {loading ? "⏳ Processing..." : "Send to Backend"}
        </button>
      </section>

      {/* 3️⃣ Backend Output Section */}
      <section style={{ maxWidth: "700px", margin: "30px auto 0", background: "rgba(0,0,0,0.4)", padding: "20px", borderRadius: "12px", backdropFilter: "blur(10px)", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
        <h2 style={{ marginBottom: "10px", fontSize: "1.2rem" }}>📩 Backend Response</h2>
        <pre style={{ background: "rgba(255,255,255,0.1)", padding: "15px", borderRadius: "8px", fontSize: "0.95rem", whiteSpace: "pre-wrap", wordWrap: "break-word", color: "#d4f4dd" }}>
          {response ? JSON.stringify(response, null, 2) : "⚡ No response yet"}
        </pre>
      </section>
    </div>
  );
}

export default App;
