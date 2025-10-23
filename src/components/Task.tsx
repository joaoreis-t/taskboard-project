import type { TaskType } from "../App";

interface TaskProps {
  onClose: () => void;
  task: TaskType;          
  onComplete: () => void;  
  onDelete: (id: string) => void; 
}

export const Task = ({ onClose, task, onComplete, onDelete }: TaskProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-md w-full max-w-md relative">
        {/* Botão fechar */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✖
        </button>

        <h3 className="text-xl font-medium mb-4 text-[#3D3B3B]">{task.titulo}</h3>

        {/* Visualização da tarefa */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-gray-500 font-medium mb-1">Data da Entrega</p>
            <p className="text-[#3D3B3B]">{task.dataEntrega}</p>
          </div>

          <div>
            <p className="text-gray-500 font-medium mb-1">Status</p>
            <p className={`text-[#3D3B3B] ${task.status === "Concluído" ? "font-bold text-green-600" : ""}`}>{task.status}</p>
          </div>

          <div>
            <p className="text-gray-500 font-medium mb-1">Categoria</p>
            <p className="text-[#3D3B3B]">{task.categoria}</p>
          </div>

          <div>
            <p className="text-gray-500 font-medium mb-1">Descrição</p>
            <p className="text-[#3D3B3B]">{task.descricao}</p>
          </div>
          <div className="flex gap-2 justify-center mt-2">
            <button
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 w-[50%]"
              onClick={() => {
                onDelete(task.id);
                onClose();
              }}
            >
              Excluir
            </button>

            <button
              className="bg-[#3979F7] text-white px-4 py-2 rounded-md hover:cursor-pointer  w-[50%]"
              onClick={() => {
                onComplete();
                onClose();    
              }}
            >
              {task.status === "Concluído" ? "Tarefa Concluida!" : "Concluir Tarefa"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
