// src/pages/HomePage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import SearchBar from "../components/SearchBar";
import MapCard from "../components/MapCard";
import CarouselSection from "../components/CarouselSection";

import { LocalService, ApiError } from "../service";
import type { LocalInfoProps } from "../interface/LocalInfo";
import { getImageSrc } from "../utils/verifyImgType";
import IconButton from "../components/IconButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import type { AllLocalsProps } from "../interface/AllLocals";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [allLocalsInfo, setAllLocalsInfo] = useState<AllLocalsProps>();
  // Estado para almacenar la lista de restaurantes (locales)
  const [restaurants, setRestaurants] = useState<LocalInfoProps[]>(
    allLocalsInfo?.local || []
  );

  // Estados para el manejo de carga y errores de la API
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para la funcionalidad de búsqueda y filtrado
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterBy, setFilterBy] = useState<string>("asc"); //Puede ser asc o desc
  const [sortBy, setSortBy] = useState<string>("name"); // Puede ser 'name'...

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isleftArrowDisabled, setIsLeftArrowDisabled] = useState(false);
  const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(false);

  // Efecto para cargar los locales cuando el componente se monta
  useEffect(() => {
    const fetchLocals = async () => {
      try {
        setLoading(true); // Inicia el estado de carga
        setError(null); // Limpia cualquier error previo
        // Llama a tu servicio sin parámetros de paginación
        const data = await LocalService.getAll(currentIndex, filterBy, sortBy); // Ahora llama al servicio sin parámetros
        setAllLocalsInfo(data);
      } catch (err: any) {
        console.error("Error al obtener los locales:", err);
        // Manejo de errores mejorado con ApiError
        if (err instanceof ApiError) {
          setError(err.message);
        } else {
          setError(
            "No se pudieron cargar los restaurantes. Inténtalo de nuevo más tarde."
          );
        }
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchLocals(); // Ejecuta la función al montar el componente
  }, [sortBy, filterBy, currentIndex]); // El array vacío asegura que se ejecute solo una vez al montar

  useEffect(() => {
    setRestaurants(allLocalsInfo?.local || []);

    setIsRightArrowDisabled(allLocalsInfo?.last || false);

    setIsLeftArrowDisabled(allLocalsInfo?.pageNumber === 0);

  }, [allLocalsInfo]);

  // Manejador de clic para las tarjetas de restaurante (navega a la página de detalle)
  const handleRestaurantCardClick = (id: string) => {
    navigate(`/local/${id}`); // Navega a la ruta de detalle del restaurante
  };

  // // Lógica de filtrado y ordenamiento de los restaurantes mostrados
  // const filteredRestaurants = restaurants.filter(restaurant =>
  //   restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //   (filterBy === 'all' || restaurant.type === filterBy) 
  // ).sort((a, b) => {
  //   if (sortBy === 'name') {
  //     return a.name.localeCompare(b.name);
  //   }
  //   // Añade más lógicas de ordenamiento aquí si tienes otras opciones (ej. por rating)
  //   return 0;
  // });

  const mapCenter = {
      lat: 13.67876100040785,
      lng: -89.23717304999441,
  };

    const mapMarkers = restaurants
    .filter((r) => r.direction.lat && r.direction.lng)
    .map((r) => ({
      lat: r.direction.lat!,
      lng: r.direction.lng!,
      name: r.name,
      phone: r.phone,
      description: r.description,
      image: r.image ?? null,   // ✔ AGREGADO
    }));


  // Si no hay marcadores válidos, puedes añadir un marcador por defecto o un mensaje
  if (mapMarkers.length === 0 && restaurants.length > 0) {
    // Añade un marcador en el centro predeterminado si no hay locales con coordenadas
    mapMarkers.push({
      lat: mapCenter.lat,
      lng: mapCenter.lng,
      name: "Ubicación principal",
      phone: "No disponible",
      description: "Este marcador aparece por defecto.",
      image: null,
    });
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="min-h-screen text-white">
      <CarouselSection localInfo={restaurants} />

      {/* Sección de Búsqueda */}
      <section className="mb-8">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar restaurante, platillo..."
          className="max-w-xl mx-auto"
        />
      </section>

      {/* Sección de Filtros y Ordenamiento */}
      <section className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-2">
          <span className="text-black">Filtrar por:</span>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="p-2 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#D19036]"
          >
            <option value="asc">Orden ascendente (a - z) </option>
            <option value="desc">Orden descendente (z - a)</option>
            {/* Asegúrate de que estos valores coincidan con los 'type' que tu backend pueda devolver para Local */}
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-black">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-[#D19036]"
          >
            <option value="name">Nombre</option>
            {/* Opciones de ordenamiento adicionales */}
          </select>
        </div>
      </section>

      {/* Sección de Listado de Locales */}
      <section className="mb-12 px-4">
        <h2 className="text-black text-4xl font-bold text-center mb-8">
          Nuestros Locales
        </h2>
        <div className="flex w-full h-full items-center">
          {loading && (
            <p className="text-center text-gray-400">
              Cargando restaurantes...
            </p>
          )}
        {error && <p className="text-center text-red-500">{error}</p>}
          {!loading && !error && restaurants.length === 0 && (
            <p className="text-center text-gray-400">
              No se encontraron restaurantes que coincidan con tu búsqueda.
            </p>
        )}

          <IconButton
            className={{ icon: "text-primary-yellow text-6xl", button: "z-20" }}
            icon={IoIosArrowBack}
            onClick={prevSlide}
            isDisabled={isleftArrowDisabled}
          />

          {!loading && !error && restaurants.length > 0 && (
            <div className="h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {restaurants.map((restaurant) => (
              <RestaurantCard
                  key={restaurant.id_local}
                  imageSrc={getImageSrc(restaurant.image)}
                name={restaurant.name}
                  onClick={() =>
                    handleRestaurantCardClick(restaurant.id_local || "")
                  }
              />
            ))}
          </div>
        )}
          <IconButton
            className={{ icon: "text-primary-yellow text-6xl", button: "z-20" }}
            icon={IoIosArrowForward}
            onClick={nextSlide}
            isDisabled={isRightArrowDisabled}
          />
        </div>
      </section>

      {/* Sección del Mapa */}
      <section className="mb-8 px-4">
        <h2 className="text-black text-4xl font-bold text-center mb-8">
          Explora en el Mapa
        </h2>
        <div className="flex justify-center">
          <MapCard
            center={mapCenter}
            zoom={14}
            markers={mapMarkers}
            onLocationSelect={(coords) => {
              console.log("Coordenadas seleccionadas:", coords);
        }}
        className="w-full h-80 md:h-96 lg:h-[500px] max-w-4xl rounded-2xl overflow-hidden shadow-lg m-3"
      />
        </div>
      </section>
    </div>
  );
};

export default HomePage;