import { useState, useEffect } from "react";

import setaMenuFiltro from "../../assets/seta-menu.png"
import setaMenuFiltroDark from "../../assets/seta-menu-dark.png"

import type { TaskType } from "../../App";

interface TasklistProps {
  tasks: TaskType[];
  onOpenNewTask: () => void;
  onOpenTask: (task: TaskType) => void;
  onOpenFilter: () => void;
  filterStatus: "Pendente" | "Concluído" | null;
}

export const Tasklist = ({ tasks, onOpenNewTask, onOpenTask, onOpenFilter, filterStatus }: TasklistProps) => {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks
  .filter(t => !filterStatus || t.status === filterStatus)  
  .filter(t => t.titulo.toLowerCase().includes(searchTerm.toLowerCase())); 

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p-6 pt-3 max-w-[900px] mx-auto">
      <h2 className="text-[#3D3B3B] text-xl mb-4 dark:text-white">Lista de Tarefas</h2>
      <div className="relative w-full mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          🔍
        </span>

        <input
          type="search"
          placeholder="Buscar Tarefas..."
          value={searchTerm}  
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="w-full pl-10 pr-4 py-2 rounded-md bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.12)] text-[#3D3B3B] focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none dark:bg-[#212227] dark:placeholder-[#D9D9D9] dark:text-white"
        />
      </div>
      <div className="mb-4 flex justify-between sm:justify-start sm:gap-4">
        <button className="p-3 border border-[rgba(0,0,0,0.25)] rounded-md flex gap-[23px] items-center hover:cursor-pointer dark:border-white" onClick={onOpenFilter}>
          <p className="text-[#3D3B3B] font-medium dark:text-white">Filtrar</p>
          {
            isDark ? (
              <img src={setaMenuFiltroDark} width={20}/>
            ) : (
              <img src={setaMenuFiltro} width={20}/>
            )
          }
        </button>
        <button className="p-3 rounded-md shadow-[2px_2px_4px_rgba(0,0,0,0.12)] bg-[#3979F7] text-white font-medium hover:cursor-pointer" onClick={onOpenNewTask}>Adicionar Tarefa</button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {filteredTasks.map(task => (
          <div
            key={task.id}
            className="bg-white p-3 flex justify-between rounded-md cursor-pointer dark:dark:bg-[#212227]"
            onClick={() => onOpenTask(task)}
          >
            <h3 className="font-medium dark:text-white">{task.titulo}</h3>
            <div className="flex flex-col items-end gap-3">
              <div className={`w-[92px] h-[25px] rounded-md flex items-center justify-center ${ task.status === "Concluído" ? "bg-[#3979F7]" : "bg-[#E8E8E8]" }`} >
                <p className={`text-[14px] font-medium ${task.status === "Concluído" ?     "text-white" : "text-[#3D3B3B]" }`} >
                  {task.status}
                </p>
              </div>
              <p className="text-[14px] font-medium text-[#3D3B3B] dark:text-[#D9D9D9]">{task.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}