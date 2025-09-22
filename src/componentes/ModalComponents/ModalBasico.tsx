interface ModalBasicoProps {
  title: string;
  content: string;
  buttonText?: string;
  onClose: () => void;
}

export const ModalBasico = ({ title, content, buttonText = "Cerrar", onClose }: ModalBasicoProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="whitespace-pre-line mb-4">{content}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
