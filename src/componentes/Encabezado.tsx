import React from "react";
import type { ExpedienteInterfaz } from "../api/interface";

//recibe props para ir alternando
interface Props {
  onSort: (columna: keyof ExpedienteInterfaz) => void;
  sortConfig: { key: keyof ExpedienteInterfaz; asc: boolean };
}

export const Encabezado: React.FC<Props> = ({ onSort, sortConfig }) => {
  return (
    <tr>
      <th
        className="px-24 py-2 text-left cursor-pointer select-none"
        onClick={() => onSort("fecha")}
      >
        {/* para alternar de estado de la flecha  */}
        Fecha {sortConfig.key === "fecha" ? (sortConfig.asc ? "⬆️" : "⬇️") : ""}
      </th>
      
      <th
        className="px-24 py-2 text-left cursor-pointer select-none"
        onClick={() => onSort("estado")}
      >
        Estado{" "}
        {sortConfig.key === "estado" ? (sortConfig.asc ? "⬆️" : "⬇️") : ""}
      </th>

      <th className="px-24 py-2 text-left cursor-pointer select-none"
      >
        Vehículos 
      </th>

      <th className="px-24 py-2 text-left cursor-pointer select-none"
      >
        Investigacion
      </th>

      <th className="px-24 py-2 text-left cursor-pointer select-none"
      >
        Lugar
      </th>

      <th className="px-24 py-2 text-left cursor-pointer select-none"
      >
        Num Expediente
      </th>
    </tr>
  );
};
