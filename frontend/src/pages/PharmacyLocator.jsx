import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

function PharmacyLocator() {

  const [position, setPosition] = useState({
    lat: 12.9716,
    lng: 77.5946
  });
  const [pharmacies, setPharmacies] = useState([]);
  

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(
      (pos) => {

        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
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
    <div style={{ padding: "20px" }}>
      <h1>Google Maps Pharmacy Locator</h1>

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
          }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
      <div style={{ marginTop: "30px" }}>

  <h2>Buy Medicines Online</h2>

  <div
    style={{
      display: "flex",
      gap: "15px",
      flexWrap: "wrap"
    }}
  >

    <a
      href="https://www.1mg.com"
      target="_blank"
      rel="noreferrer"
    >
      <button>Tata 1mg</button>
    </a>

    <a
      href="https://www.netmeds.com"
      target="_blank"
      rel="noreferrer"
    >
      <button>NetMeds</button>
    </a>

    <a
      href="https://pharmeasy.in"
      target="_blank"
      rel="noreferrer"
    >
      <button>PharmEasy</button>
    </a>

    <a
      href="https://www.apollo247.com"
      target="_blank"
      rel="noreferrer"
    >
      <button>Apollo 24/7</button>
    </a>

  </div>

</div>
    </div>
  );
}

export default PharmacyLocator;