import { Api1 } from "./datos";

export const geojson = {
  type: "FeatureCollection",
  features: Api1.map((item: any) => ({
    type: "Feature",
    properties: {
      fecha: item.fecha,
      estado: item.estado,
      vehiculos: item.vehiculos,
      clase_evento: item.clase_evento,
      lugar: item.lugar,
      nro_expediente: item.nro_expediente,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(item.longitud), parseFloat(item.latitud)],
    },
  })),
};

console.log("✅ GeoJSON generado:", geojson);
