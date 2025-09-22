import type { ExpedienteInterfaz } from "../api/interface";
import { ModalBasico } from "./ModalComponents/ModalBasico"; // versión reutilizable
import { useState } from "react";

interface Props {
  expex: ExpedienteInterfaz[];
}

export const Buscador = ({ expex }: Props) => {
  // Estado para controlar qué modal mostrar
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{title: string; content: string} | null>(null);

  const handleClick = (expediente: ExpedienteInterfaz) => {
    // Cada expediente puede tener contenido distinto
    setModalContent({
      title: `Expediente ${expediente.nro_expediente}`,
      content: `Estado: ${expediente.estado}\nLugar: ${expediente.lugar}`
    });
    setModalOpen(true);
  };

  return (
    <>
      {expex.map((expediente) => (
        <tr key={expediente.nro_expediente} className="border-t">
          <td className="px-4 py-2">{new Date(expediente.fecha).toLocaleDateString()}</td>
          <td className="px-4 py-2">{expediente.estado}</td>
          <td className="px-4 py-2 w-40 max-w-[160px] truncate">
            {expediente.vehiculos.map((v, i) => (
              <span key={i} className="mr-2">{v.marca}</span>
            ))}
          </td>
          <td className="px-4 py-2">{expediente.clase_evento}</td>
          <td className="px-4 py-2">{expediente.lugar}</td>
          <td className="px-4 py-2">{expediente.nro_expediente.split("-").slice(0, 3).join("-")}</td>
          <td className="px-4 py-2 text-center">
            <button
              onClick={() => handleClick(expediente)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Saber Más...
            </button>
          </td>
        </tr>
      ))}

      {/* Renderizamos el modal solo si modalContent no es null */}
      {modalContent && (
        <ModalBasico
          title={modalContent.title}
          content={modalContent.content}
          buttonText="Cerrar" // opcional, no afecta
        />
      )}
    </>
  );
};
