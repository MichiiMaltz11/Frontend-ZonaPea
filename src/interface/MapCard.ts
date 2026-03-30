// Define una interfaz para las coordenadas de latitud y longitud.
// Esto es útil si vas a pasar ubicaciones como objetos.
export interface LatLng {
    lat: number;
    lng: number;
  }
  
  // Define la interfaz para las props del componente MapCard.
export interface MapCardProps {
    // Las coordenadas del centro del mapa son obligatorias.
    center: LatLng;
    // El nivel de zoom del mapa, opcional con un valor por defecto.
    zoom?: number;
    // Un array de marcadores para mostrar en el mapa, opcional.
    markers?: LatLng[];
    // Clases adicionales para el div contenedor del mapa, opcional.
    className?: string;
  }