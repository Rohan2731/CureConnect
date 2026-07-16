import { useEffect, useState } from "react";
import axios from "axios";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    axios
      .get("https://cureconnect-6klv.onrender.com/history")
      .then((res) => {

        setHistory(
          res.data.history
        );

      });

  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>
        Prediction History
      </h1>

      {history.map((item) => (

        <div
          key={item[0]}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>
            {item[2]}
          </h3>

          <p>
            Symptoms:
            {" "}
            {item[1]}
          </p>

        </div>

      ))}

    </div>
  );
}

export default History;