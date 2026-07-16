import { useState, useEffect } from "react";
import axios from "axios";

function Medicine() {
  const [medicine, setMedicine] = useState("");
  const [info, setInfo] = useState(null);
  const [allMedicines, setAllMedicines] = useState([]);

  useEffect(() => {
    axios
      .get("https://cureconnect-6klv.onrender.com/medicines")
      .then((res) => {
        setAllMedicines(res.data.medicines);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchMedicine = async (
    medicineName = medicine
  ) => {
    try {
      const response = await axios.get(
        `https://cureconnect-6klv.onrender.com/medicine/${medicineName}`
      );

      setMedicine(medicineName);
      setInfo(response.data);
    } catch (error) {
      console.log(error);
      setInfo(null);
    }
  };

  const filteredMedicines =
    medicine.length > 0
      ? allMedicines.filter((med) =>
          med
            .toLowerCase()
            .includes(medicine.toLowerCase())
        )
      : [];

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Header */}

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          💊 Medicine Information Center
        </h1>

        <p className="text-gray-600">
          Search medicines and learn about their
          uses, side effects and precautions.
        </p>

      </div>

      {/* Search */}

      <div className="max-w-xl mx-auto mb-10 relative">

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search Medicine..."
            value={medicine}
            onChange={(e) =>
              setMedicine(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchMedicine();
              }
            }}
            className="
              flex-1
              p-3
              border
              rounded-xl
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />

          <button
            onClick={() => searchMedicine()}
            className="
              bg-blue-600
              text-white
              px-6
              rounded-xl
              hover:bg-blue-700
              transition
            "
          >
            Search
          </button>

        </div>

        {/* Suggestions */}

        {filteredMedicines.length > 0 && medicine && (

          <div
            className="
              absolute
              w-full
              bg-white
              shadow-lg
              rounded-xl
              mt-2
              max-h-60
              overflow-y-auto
              z-50
            "
          >

            {filteredMedicines.map((med) => (

              <div
                key={med}
                onClick={() =>
                  searchMedicine(med)
                }
                className="
                  p-3
                  cursor-pointer
                  hover:bg-blue-100
                  border-b
                "
              >
                💊 {med}
              </div>

            ))}

          </div>

        )}

      </div>

      {/* Popular Medicines */}

      <div className="max-w-5xl mx-auto mb-10">

        <h2 className="text-2xl font-bold mb-5">
          💊 Popular Medicines
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">

          {allMedicines.map((med) => (

            <div
              key={med}
              onClick={() =>
                searchMedicine(med)
              }
              className="
                bg-white
                p-5
                rounded-2xl
                shadow-lg
                cursor-pointer
                hover:shadow-xl
                hover:-translate-y-1
                transition
              "
            >
              <h3 className="font-semibold text-center">
                💊 {med}
              </h3>
            </div>

          ))}

        </div>

      </div>

      {/* Medicine Information */}

      {info && (

        <div
          className="
            max-w-4xl
            mx-auto
            bg-white
            rounded-2xl
            shadow-lg
            p-8
          "
        >

          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            💊 {medicine}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <h3 className="text-xl font-semibold mb-3">
                Uses
              </h3>

              <ul className="list-disc ml-5 space-y-2">

                {info.uses.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

              </ul>

            </div>

            <div>

              <h3 className="text-xl font-semibold mb-3">
                Side Effects
              </h3>

              <ul className="list-disc ml-5 space-y-2">

                {info.side_effects.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

              </ul>

            </div>

          </div>

          <div className="mt-8">

            <h3 className="text-xl font-semibold mb-3">
              Precaution
            </h3>

            <p className="bg-yellow-50 border p-4 rounded-xl">
              {info.precaution}
            </p>

          </div>

          {/* Buy Online */}

          <div className="mt-10">

            <h3 className="text-xl font-semibold mb-5">
              🛒 Buy Online
            </h3>

            <div className="grid md:grid-cols-4 gap-4">

              <a
                href="https://www.1mg.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-blue-50 p-4 rounded-xl text-center hover:shadow-lg transition">
                  Tata 1mg
                </div>
              </a>

              <a
                href="https://www.netmeds.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-blue-50 p-4 rounded-xl text-center hover:shadow-lg transition">
                  NetMeds
                </div>
              </a>

              <a
                href="https://pharmeasy.in"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-blue-50 p-4 rounded-xl text-center hover:shadow-lg transition">
                  PharmEasy
                </div>
              </a>

              <a
                href="https://www.apollo247.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="bg-blue-50 p-4 rounded-xl text-center hover:shadow-lg transition">
                  Apollo 24/7
                </div>
              </a>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Medicine;