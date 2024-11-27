import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Props = {
  companyLocation: { lat: number; lng: number };
};

const InteractiveMap: React.FC<Props> = ({ companyLocation }) => {
  const { lat, lng } = companyLocation;

  // Кастомная иконка для маркера
  const customIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // URL иконки
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const handleRouteClick = () => {
    const userLocation = navigator.geolocation;
    if (userLocation) {
      userLocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const directionUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${lat},${lng}`;
          window.open(directionUrl, '_blank'); // Открыть маршрут в Google Maps
        },
        (error) => {
          alert('Не удалось определить ваше местоположение.');
        }
      );
    } else {
      alert('Геолокация недоступна.');
    }
  };

  return (
    <div style={{ height: '225px', width: '350px' }}>
      <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div>
              <p>Мы здесь!</p>
              <button onClick={handleRouteClick} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                Построить маршрут
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
