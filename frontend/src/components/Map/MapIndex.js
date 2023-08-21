import { useMemo } from "react";
import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MapIndex = () => {
  const businesses = useSelector((state) => state.businesses);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>...Loading</div>;
  }

  if (loadError) {
    return <div>Error loading maps, check your API key</div>
  }

  return (
    <div>
      <Map businesses={businesses} />
    </div>
  );
};

const Map = ({ businesses }) => {
    const center = useMemo(() => ({ lat: 40.67145, lng: -73.963673 }), []);

    const markerPositions = useMemo(
        () =>
        Array.isArray(businesses)
            ? businesses.map((business) => ({
                lat: parseFloat(business.latitude),
                lng: parseFloat(business.longitude),
                id: business.id,
            }))
            : [],
        [businesses]
    )

    return (
        <div>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                {markerPositions.map((position, i) => (
                    <Marker
                        key={i}
                        position={position}
                    />
                ))}
            </GoogleMap>
        </div>
    )

};

export default MapIndex;