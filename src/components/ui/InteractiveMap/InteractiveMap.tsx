import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';
import { ContactComponentsProps } from '@/context/withStaticPathsAndProps';

// type Props = {
//   ourLocation: string;
//   buildRoute: string;
// };

const InteractiveMap: React.FC<ContactComponentsProps> = ({ translationsPage }) => {
  const lat = 48.499937;
  const lng = 35.038598;

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
          console.error(error);
        }
      );
    } else {
      alert('Геолокация недоступна.');
    }
  };

  return (
    <div className="hidden relative w-full h-[268px] md:block max-w-[451px]">
      <Image
        className=" w-full h-full absolute"
        src={`/assets/LaptopContacts.webp?v=${new Date().getTime()}`}
        alt="Laptop"
        width={100}
        height={100}
      />

      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{
          height: '85.8%',
          width: '78.9%',
          position: 'absolute',
          left: '10.6%',
          top: '2.2%',
          zIndex: 10,
          borderRadius: '10 10 10 10',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div>
              <p>{translationsPage.ourLocation}</p>
              <button onClick={handleRouteClick} style={{ cursor: 'pointer', padding: '5px 10px' }}>
                {translationsPage.buildRoute}
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
