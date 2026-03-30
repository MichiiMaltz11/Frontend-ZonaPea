import React, { useRef, useEffect, useState } from "react";

export interface MapCardProps {
  center: { lat: number; lng: number };
  zoom?: number;
  markers: MarkerData[];
  className?: string;
}

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  description: string;
  phone: string;
  image: File | string | null;
}

// Extiende la interfaz global para incluir la función initMap de Google Maps
declare global {
  interface Window {
    initMap: () => void;
  }
}

interface MapCardPropsExtended extends MapCardProps {
  onLocationSelect?: (coords: { lat: number; lng: number }) => void;
}

const MapCard: React.FC<MapCardPropsExtended> = ({
  center,
  zoom = 15,
  markers = [],
  className = "",
  onLocationSelect,
}) => {

  // Referencia al contenedor HTML donde se renderizará el mapa
  const mapRef = useRef<HTMLDivElement>(null);

  // Estado para saber cuándo el script de Google Maps ya fue cargado
  const [mapLoaded, setMapLoaded] = useState(false);

  // Referencia al marcador que aparece cuando el usuario hace click en el mapa
  let clickMarker: google.maps.Marker | null = null;

  // ---------------- CARGAR DINÁMICAMENTE GOOGLE MAPS API ----------------
  const loadGoogleMapsScript = () => {
    return new Promise<void>((resolve) => {
      if (window.google && window.google.maps) {
        resolve();
        return;
      }

      // Crear la etiqueta <script> que carga Google Maps
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDDmqwg3pP4YBTKKLnYAY88Z7dq720HOj8&libraries=places";
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();  // Cuando carga entonces resuelve promesa
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadGoogleMapsScript().then(() => {
      setMapLoaded(true); // Marca que la API está lista
    });
  }, []);

  // ---------------- INICIALIZAR MAPA CUANDO YA CARGÓ GOOGLE MAPS ----------------
  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return;

    // Crear una nueva instancia del mapa
    const map = new google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        // Ocultar puntos de interés (POI)
        { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
        { featureType: "poi.business", stylers: [{ visibility: "off" }] },
        { featureType: "poi.school", stylers: [{ visibility: "off" }] },
        { featureType: "poi.attraction", stylers: [{ visibility: "off" }] },
        { featureType: "poi.medical", stylers: [{ visibility: "off" }] },
      ],
    });

    // ---------------- AGREGAR MARCADORES YA EXISTENTES ----------------
    markers.forEach((m) => {
      let imageUrl: string | null = null;

      if (m.image instanceof File) {
        imageUrl = URL.createObjectURL(m.image);
      } else if (typeof m.image === "string") {
        imageUrl = m.image;
      }

      const marker = new google.maps.Marker({
        position: { lat: m.lat, lng: m.lng },
        map,
      });

      // Crear InfoWindow con la información del local
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-size:14px; color:black; max-width:200px;">
            <strong>${m.name}</strong><br/>

            ${
              imageUrl
                ? `<img src="${imageUrl}" style="width:100%; border-radius:8px; margin:6px 0;" />`
                : ""
            }

            ${m.description}<br/>
            <em>Tel: ${m.phone}</em>
          </div>
        `,
      });

      // Mostrar cuando el cursor pasa encima
      marker.addListener("mouseover", () => {
infoWindow.open(map, marker);
      });

      // Ocultar cuando el cursor sale
      marker.addListener("mouseout", () => {
        infoWindow.close();
      });
    });


    // ---------------- LIMITAR EL MAPA A TU ZONA (RESTRICCIÓN) ----------------
    const bounds = new google.maps.LatLngBounds(
      { lat: 13.677371148938825, lng: -89.23833230828113 },
      { lat: 13.679150109866104, lng: -89.23519582020774 }
    );

    map.setOptions({
      restriction: {
        latLngBounds: bounds,
        strictBounds: true, // Impide salir de la zona
      },
    });

    // ---------------- CLICK PARA SELECCIONAR UBICACIÓN ----------------
    google.maps.event.addListener(map, "click", (event: google.maps.MapMouseEvent) => {
      
      // Convertir click a coordenadas
      const coords = {
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
      };

      // Si ya había un marcador seleccionado, eliminarlo
      if (clickMarker) {
        clickMarker.setMap(null);
      }

      // Crear marcador donde se hizo click
      clickMarker = new google.maps.Marker({
        position: coords,
        map,
      });

      // Notificar al componente para guardar las coordenadas seleccionadas
      if (onLocationSelect) onLocationSelect(coords);
    });

  }, [mapLoaded, center, zoom, markers]);

  // ---------------- RENDER DEL CONTENEDOR DEL MAPA ----------------
  return (
    <div
      className={`
        bg-gray-800 rounded-2xl overflow-hidden shadow-xl
        border-2
        w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px]
        flex items-center justify-center text-gray-400
        ${className}
      `}
    >
      {!mapLoaded && <p>Cargando mapa...</p>}
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapCard;
