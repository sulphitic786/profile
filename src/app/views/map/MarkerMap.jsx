import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MarkerMap = () => {
  const containerStyle = { width: "100%", height: "400px" };
  const center = { lat: -34.397, lng: 150.644 };
  const markerPosition = { lat: -34.397, lng: 150.644 };

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBb6wjKD210p0ORAaFyC1EBxF1yJrpLuzk">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker onLoad={onLoad} position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MarkerMap;
