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
      .get("https://cureconnect-6klv.onrender.com/symptoms")
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
        "https://cureconnect-6klv.onrender.com/predict",
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
      symptom
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Header */}

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          🩺 AI Symptom Checker
        </h1>

        <p className="text-gray-600">
          Select your symptoms and get an AI-powered prediction.
        </p>

      </div>

      {/* Search */}

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">

        <input
          type="text"
          placeholder="Search symptoms..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="
          w-full
          p-3
          border
          rounded-xl
          mb-5
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "
        />

        <div
          className="
          max-h-64
          overflow-y-auto
          border
          rounded-xl
          p-3
        "
        >
          <div className="flex flex-wrap gap-2">

            {filteredSymptoms.map((symptom) => (
              <button
                key={symptom}
                onClick={() =>
                  handleSymptomSelect(symptom)
                }
                className="
                bg-blue-100
                text-blue-700
                px-3
                py-2
                rounded-full
                hover:bg-blue-200
              "
              >
                {symptom}
              </button>
            ))}

          </div>
        </div>

      </div>

      {/* Selected Symptoms */}

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-4">
          Selected Symptoms
        </h2>

        {selectedSymptoms.length === 0 ? (
          <p className="text-gray-500">
            No symptoms selected
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">

            {selectedSymptoms.map((symptom) => (
              <div
                key={symptom}
                className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-full
                flex
                items-center
                gap-2
              "
              >
                {symptom}

                <button
                  onClick={() =>
                    removeSymptom(symptom)
                  }
                  className="text-white"
                >
                  ✕
                </button>

              </div>
            ))}

          </div>
        )}

        <button
          onClick={handleSubmit}
          className="
          mt-6
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-700
          transition
        "
        >
          Predict Disease
        </button>

      </div>

      {/* Results */}

      {result && (

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Prediction Result
          </h2>

          <div className="mb-6">
            <h3 className="font-bold text-xl">
              Disease
            </h3>

            <p>{result}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-xl">
              Description
            </h3>

            <p>{description}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-xl">
              Precautions
            </h3>

            <ul className="list-disc ml-5">
              {precautions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl">
              Recommended Medicines
            </h3>

            <ul className="list-disc ml-5">
              {medicines.map((medicine, index) => (
                <li key={index}>{medicine}</li>
              ))}
            </ul>

            <p className="text-red-500 mt-4">
              Disclaimer: Consult a doctor before taking any medication.
            </p>
          </div>

        </div>

      )}

    </div>
  );
}

export default SymptomChecker;