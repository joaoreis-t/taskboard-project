import { useState } from "react";

interface FilterProps {
  onClose: () => void;
  onApply: (status: "Pendente" | "Concluído" | null) => void;
}

export const Filter = ({ onClose, onApply }: FilterProps) => {
  const [selectedStatus, setSelectedStatus] = useState<"Pendente" | "Concluído" | null>(null);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-md w-full max-w-sm relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>

        <h3 className="text-xl font-medium mb-6 text-[#3D3B3B]">Filtrar Tarefas</h3>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            onApply(selectedStatus);
            onClose();
          }}
        >
          <div className="flex flex-col gap-2">
            <label className="text-[#3D3B3B] font-medium">Status</label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Pendente"
                checked={selectedStatus === "Pendente"}
                onChange={() => setSelectedStatus("Pendente")}
                className="accent-[#3979F7]"
              />
              Pendente
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Concluído"
                checked={selectedStatus === "Concluído"}
                onChange={() => setSelectedStatus("Concluído")}
                className="accent-[#3979F7]"
              />
              Concluído
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Todos"
                checked={selectedStatus === null}
                onChange={() => setSelectedStatus(null)}
                className="accent-[#3979F7]"
              />
              Todos
            </label>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#3979F7] text-white"
            >
              Aplicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
