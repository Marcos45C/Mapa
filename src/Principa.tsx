import { useState } from "react";
import { Buscador } from "./componentes/Buscador";
import { Encabezado } from "./componentes/Encabezado";
import type { ExpedienteInterfaz } from "./api/interface";
import { Api1 } from "./api/datos";
// import {geojson} from "./api/convert-to-geojson";

export const Principa = () => {
  // estado principal con los datos de la tabla
  const [data, setData] = useState<ExpedienteInterfaz[]>(Api1);

  // estado de ordenamiento: que columna y dirección
  const [sortConfig, setSortConfig] = useState<{
    key: keyof ExpedienteInterfaz;
    asc: boolean;
  }>({ key: "fecha", asc: true });

  const ordenarPorColumna = (columna: keyof ExpedienteInterfaz) => {
    // calcular el nuevo sortConfi
    const nuevoConfig =
      sortConfig.key === columna
        ? { key: columna, asc: !sortConfig.asc }
        : { key: columna, asc: true };

    // ordenar usand el nuevoConfig
    const dataOrdenada = [...data].sort((a, b) => {
      if (columna === "fecha") {
        const fechaA = new Date(a.fecha).getTime();
        const fechaB = new Date(b.fecha).getTime();
        return nuevoConfig.asc ? fechaA - fechaB : fechaB - fechaA;
      }

      if (columna === "estado") {
        return nuevoConfig.asc
          ? a.estado.localeCompare(b.estado)
          : b.estado.localeCompare(a.estado);
      }

      if (columna === "vehiculos") {
        return nuevoConfig.asc
          ? a.vehiculos.length - b.vehiculos.length
          : b.vehiculos.length - a.vehiculos.length;
      }

      return 0;
    });

    // guarda cambios
    setData(dataOrdenada);
    setSortConfig(nuevoConfig);
  };

  return (
    <table className="table-auto border border-gray-300 w-full">
      <thead className="bg-gray-200">
        <Encabezado sortConfig={sortConfig} onSort={ordenarPorColumna} />
      </thead>
      <tbody>
        <Buscador expex={data} />
      </tbody>
    </table>
  );
};


