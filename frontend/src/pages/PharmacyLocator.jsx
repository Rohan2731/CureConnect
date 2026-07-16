import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

function PharmacyLocator() {
  const [position, setPosition] = useState({
    lat: 12.9716,
    lng: 77.5946,
  });

  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const searchNearbyPharmacies = (map) => {
    const service =
      new window.google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location: position,
        radius: 5000,
        type: "pharmacy",
      },
      (results, status) => {
        if (
          status ===
          window.google.maps.places.PlacesServiceStatus.OK
        ) {
          setPharmacies(results);
        }
      }
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Header */}

      <div className="text-center mb-10">

        <h1 className="text-4xl font-bold text-blue-600 mb-3">
          📍 Pharmacy Locator
        </h1>

        <p className="text-gray-600">
          Find nearby pharmacies and order medicines online.
        </p>

      </div>

      {/* Google Map */}

      <div
        className="
        bg-white
        rounded-2xl
        shadow-lg
        p-4
        mb-10
      "
      >
        <LoadScript
          googleMapsApiKey={
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }
          libraries={["places"]}
        >
          <GoogleMap
            onLoad={(map) => {
              searchNearbyPharmacies(map);
            }}
            mapContainerStyle={{
              width: "100%",
              height: "500px",
              borderRadius: "16px",
            }}
            center={position}
            zoom={15}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Nearby Pharmacies */}

      <h2 className="text-2xl font-bold mb-5">
        🏥 Nearby Pharmacies
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-5
        mb-10
      "
      >
        {pharmacies.slice(0, 6).map(
          (pharmacy, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow-lg
              p-5
              hover:shadow-xl
              transition
              duration-300
            "
            >
              <h3 className="font-bold text-lg text-blue-600">
                {pharmacy.name}
              </h3>

              <p className="text-gray-600 mt-2">
                {pharmacy.vicinity}
              </p>
            </div>
          )
        )}
      </div>

      {/* Online Stores */}

      <h2 className="text-2xl font-bold mb-5">
        🛒 Buy Medicines Online
      </h2>

      <div
        className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-5
      "
      >
        <a
          href="https://www.1mg.com"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            text-center
            hover:shadow-xl
            hover:-translate-y-1
            transition
          "
          >
            <h3 className="font-bold text-lg">
              Tata 1mg
            </h3>
          </div>
        </a>

        <a
          href="https://www.netmeds.com"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            text-center
            hover:shadow-xl
            hover:-translate-y-1
            transition
          "
          >
            <h3 className="font-bold text-lg">
              NetMeds
            </h3>
          </div>
        </a>

        <a
          href="https://pharmeasy.in"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            text-center
            hover:shadow-xl
            hover:-translate-y-1
            transition
          "
          >
            <h3 className="font-bold text-lg">
              PharmEasy
            </h3>
          </div>
        </a>

        <a
          href="https://www.apollo247.com"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            text-center
            hover:shadow-xl
            hover:-translate-y-1
            transition
          "
          >
            <h3 className="font-bold text-lg">
              Apollo 24/7
            </h3>
          </div>
        </a>
      </div>

    </div>
  );
}

export default PharmacyLocator;