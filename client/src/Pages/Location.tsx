import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import Navbar from "@/components/Navbar";
// Styles and initial configurations
const mapContainerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 40.7128, // Default location: New York City
  lng: -74.0060,
};

const Location = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
  });

  const [stores, setStores] = useState([
    // Sample static data
    {
      name: "Elegant Jewelry",
      address: "123 Main St, New York, NY",
      latitude: 40.7128,
      longitude: -74.0060,
      operatingHours: "9 AM - 8 PM",
      status: "Open",
    },
    {
      name: "Luxury Gems",
      address: "456 Broadway, New York, NY",
      latitude: 40.7143,
      longitude: -74.0030,
      operatingHours: "10 AM - 7 PM",
      status: "Closed",
    },
  ]);

  const [selectedStore, setSelectedStore] = useState(null);

  if (loadError) return <div>Error loading Google Maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
        <Navbar/>
        <div className="flex">
      {/* Sidebar for store details */}
      <div className="w-1/3 bg-white p-4 overflow-y-scroll">
        <h2 className="text-2xl font-bold mb-4">Nearby Jewelry Stores</h2>
        {stores.map((store, index) => (
          <div
            key={index}
            className="border-b pb-4 mb-4 cursor-pointer hover:bg-gray-200"
            onClick={() => setSelectedStore(store)}
          >
            <h3 className="text-lg font-bold">{store.name}</h3>
            <p>{store.address}</p>
            <p>{store.operatingHours}</p>
            <p>Status: {store.status}</p>
          </div>
        ))}
      </div>

      {/* Google Map */}
      <div className="w-2/3">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
        >
          {stores.map((store, index) => (
            <Marker
              key={index}
              position={{ lat: store.latitude, lng: store.longitude }}
              onClick={() => setSelectedStore(store)}
            />
          ))}

          {/* InfoWindow for selected store */}
          {selectedStore && (
            <InfoWindow
              position={{
                lat: selectedStore.latitude,
                lng: selectedStore.longitude,
              }}
              onCloseClick={() => setSelectedStore(null)}
            >
              <div>
                <h3 className="text-lg font-bold">{selectedStore.name}</h3>
                <p>{selectedStore.address}</p>
                <p>Operating Hours: {selectedStore.operatingHours}</p>
                <p>Status: {selectedStore.status}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
    </div>
  );
};

export default Location;