import type { ExpedienteInterfaz } from "../api/interface";

interface Props {
  expex: ExpedienteInterfaz[];
  onClick: (expediente: ExpedienteInterfaz) => void;
}

export const Buscador = ({ expex, onClick }: Props) => {
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
              onClick={() => onClick(expediente)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Saber Más...
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
