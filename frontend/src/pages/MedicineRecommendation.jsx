import { useState } from "react";
import axios from "axios";

function Medicine() {

  const [medicine, setMedicine] = useState("");
  const [info, setInfo] = useState(null);

  const searchMedicine = async () => {

    try {

      const response = await axios.get(
        `http://127.0.0.1:8000/medicine/${medicine}`
      );

      setInfo(response.data);

    } catch (error) {

      console.log(error);

      setInfo(null);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Medicine Information</h1>

      <input
        type="text"
        placeholder="Enter medicine name"
        value={medicine}
        onChange={(e) =>
          setMedicine(e.target.value)
        }
        style={{
          padding: "10px",
          width: "300px"
        }}
      />

      <button
        onClick={searchMedicine}
        style={{
          marginLeft: "10px",
          padding: "10px"
        }}
      >
        Search
      </button>

      {info && (

        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>{medicine}</h2>

          <h3>Uses</h3>

          <ul>
            {info.uses.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Side Effects</h3>

          <ul>
            {info.side_effects.map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <h3>Precaution</h3>

          <p>{info.precaution}</p>

        </div>

      )}

    </div>
  );
}

export default Medicine;