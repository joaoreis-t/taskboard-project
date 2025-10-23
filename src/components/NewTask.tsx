import { useState } from "react";

import type { TaskType } from "../App";

interface NewTaskProps {
  onClose: () => void;
  onAdd: (task: TaskType) => void;
}

export const NewTask = ({ onClose, onAdd }: NewTaskProps) => {

  const [titulo, setTitulo] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: TaskType = {
      id: crypto.randomUUID(),
      titulo,
      dataEntrega,
      categoria,
      descricao,
      status: "Pendente",
    };

    onAdd(newTask);
    onClose();
  };

  return (
    <div  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>
        <h3 className="text-xl font-medium mb-4 text-[#3D3B3B]">Nova Tarefa</h3>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-[#3D3B3B] font-medium mb-1" htmlFor="titulo">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              maxLength={50}
              placeholder="Título da Tarefa"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full p-2 border rounded-md outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#3D3B3B] font-medium mb-1" htmlFor="data">
              Data da Entrega
            </label>
            <input
              type="date"
              id="data"
              value={dataEntrega}
              onChange={(e) => setDataEntrega(e.target.value)}
              className="w-full p-2 border rounded-md outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#3D3B3B] font-medium mb-1" htmlFor="categoria">
              Categoria
            </label>
            <input
              type="text"
              id="categoria"
              maxLength={20}
              placeholder="Categoria da Tarefa"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="w-full p-2 border rounded-md outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#3D3B3B] font-medium mb-1" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              id="descricao"
              maxLength={200}
              rows={4}
              placeholder="Descrição da Tarefa"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-2 border rounded-md outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 resize-none"
              required
            />
            <p className="text-gray-400 text-sm mt-1">Máx. 200 caracteres</p>
          </div>

          <button
            type="submit"
            className="bg-[#3979F7] text-white px-4 py-2 rounded-md mt-2 hover:cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}