import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";

const BasicMap = () => {
  const containerStyle = { width: "100%", height: "400px" };

  const center = { lat: -34.397, lng: 150.644 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBb6wjKD210p0ORAaFyC1EBxF1yJrpLuzk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
    </LoadScript>
  );
};

export default React.memo(BasicMap);
