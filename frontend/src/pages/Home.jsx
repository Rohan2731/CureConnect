function Home() {
  return (
    <div style={{ padding: "40px" }}>

      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "3rem" }}>
          CureConnect
        </h1>

        <p style={{ fontSize: "1.2rem" }}>
          AI Powered Healthcare Assistance Platform
        </p>

        <p>
          Predict diseases, get medicine suggestions,
          locate nearby pharmacies, chat with AI,
          and detect skin conditions.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >

        <div className="card">
          <h2>🩺 Symptom Checker</h2>
          <p>Predict diseases based on symptoms.</p>
        </div>

        <div className="card">
          <h2>💊 Medicine Recommendation</h2>
          <p>Get medicine suggestions.</p>
        </div>

        <div className="card">
          <h2>🤖 AI Chatbot</h2>
          <p>Ask health related questions.</p>
        </div>

        <div className="card">
          <h2>📍 Pharmacy Locator</h2>
          <p>Find nearby pharmacies.</p>
        </div>

        <div className="card">
          <h2>🔬 Skin Disease Detection</h2>
          <p>Upload images for analysis.</p>
        </div>

      </section>

    </div>
  );
}

export default Home;