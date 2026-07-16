import { useState, useEffect } from "react";
import axios from "axios";

function SymptomChecker() {

  const [availableSymptoms, setAvailableSymptoms] = useState([]);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [description, setDescription] = useState("");
const [precautions, setPrecautions] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/symptoms")
      .then((res) => {
        setAvailableSymptoms(res.data.symptoms);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSymptomSelect = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const removeSymptom = (symptomToRemove) => {
    setSelectedSymptoms(
      selectedSymptoms.filter(
        (symptom) => symptom !== symptomToRemove
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        {
          symptoms: selectedSymptoms.join(","),
        }
      );

      setResult(response.data.disease);
      setMedicines(response.data.medicines);
      setDescription(response.data.description);
setPrecautions(response.data.precautions);

    } catch (error) {
      console.error(error);
    }
  };

  const filteredSymptoms = availableSymptoms.filter(
  (symptom) =>
    symptom.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
);

  return (
    <div style={{ padding: "40px" }}>

      <h1>Symptom Checker</h1>

      <h2>Select Symptoms</h2>
      <input
        type="text"
        placeholder="Search symptoms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "15px",
        }}
        />

      <div
        style={{
          maxHeight: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {filteredSymptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => handleSymptomSelect(symptom)}
            style={{
              margin: "5px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            {symptom}
          </button>
        ))}
      </div>

      <h2 style={{ marginTop: "20px" }}>
        Selected Symptoms
      </h2>

      {selectedSymptoms.length === 0 ? (
        <p>No symptoms selected</p>
      ) : (
        <ul>
          {selectedSymptoms.map((symptom) => (
            <li key={symptom}>
              {symptom}

              <button
                onClick={() => removeSymptom(symptom)}
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Predict Disease
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Prediction</h2>
          <p>{result}</p>
        </div>
      )}

      {description && (
        <div style={{ marginTop: "20px" }}>
          <h2>Description</h2>
          <p>{description}</p>
        </div>
      )}

      {precautions.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Precautions</h2>

          <ul>
            {precautions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {medicines.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Recommended Medicines</h2>

          <ul>
            {medicines.map((medicine, index) => (
              <li key={index}>{medicine}</li>
            ))}
          </ul>

          <p style={{ color: "red" }}>
            Disclaimer: Consult a doctor before taking any medication.
          </p>
        </div>
      )}

    </div>
  );
}

export default SymptomChecker;