import { useState, useEffect } from "react";
import { Dashboard } from "./components/sections/Dashboard"
import { Header } from "./components/sections/Header"
import { Tasklist } from "./components/sections/Tasklist"
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import { Filter } from "./components/Filter";
import { Footer } from "./components/sections/Footer";

export type TaskType = {
  id: string;
  titulo: string;
  dataEntrega: string;
  categoria: string;
  descricao: string;
  status: "Pendente" | "Concluído";
}

function App() {

  /*
  const mockTasks: TaskType[] = [
    {
      id: "1",
      titulo: "Finalizar relatório semanal",
      dataEntrega: new Date().toISOString().split("T")[0], // hoje
      categoria: "Trabalho",
      descricao: "Preparar relatório com as métricas da semana",
      status: "Pendente",
    },
    {
      id: "2",
      titulo: "Estudar React Hooks",
      dataEntrega: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // daqui 3 dias
      categoria: "Estudo",
      descricao: "Rever useEffect e useContext",
      status: "Pendente",
    },
    {
      id: "3",
      titulo: "Reunião com o time",
      dataEntrega: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 2 dias atrás
      categoria: "Trabalho",
      descricao: "Acompanhar progresso das tarefas",
      status: "Pendente",
    },
    {
      id: "4",
      titulo: "Enviar relatório de bugs",
      dataEntrega: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 5 dias atrás
      categoria: "QA",
      descricao: "Enviar bugs detectados no teste de integração",
      status: "Concluído",
    },
  ];
  */

  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [showNewTask, setShowNewTask] = useState(false);
  const [showTask, setShowTask] = useState<null | TaskType>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState<"Pendente" | "Concluído" | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("tarefas");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  const saveTasksToLocalStorage = (tasks: TaskType[]) => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  };

  const addTask = (task: TaskType) => {
    setTasks(prev => {
      const updated = [...prev, task];
      saveTasksToLocalStorage(updated);
      return updated;
    });
  };

  const completeTask = (id: string) => {
    setTasks(prev => {
      const updated = prev.map(t =>
        t.id === id ? { ...t, status: "Concluído" as "Concluído" } : t
      );
      saveTasksToLocalStorage(updated);
      return updated;
    });
  };

  const deleteTask = (id: string) => {
    setTasks(prev => {
      const updated = prev.filter(t => t.id !== id);
      saveTasksToLocalStorage(updated);
      return updated;
    });
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Header/>
      <Dashboard tasks={tasks}/>

      <Tasklist
        tasks={tasks}
        onOpenNewTask={() => setShowNewTask(true)}
        onOpenTask={(task) => setShowTask(task)}
        onOpenFilter={() => setShowFilter(true)}
        filterStatus={filterStatus}
      />

      {showNewTask && (
        <NewTask
          onClose={() => setShowNewTask(false)}
          onAdd={addTask}
        />
      )}

      {showTask && (
        <Task
          onClose={() => setShowTask(null)}
          task={showTask}
          onComplete={() => completeTask(showTask.id)}
          onDelete={deleteTask}
        />
      )}

      {showFilter && (
        <Filter 
          onClose={() => setShowFilter(false)} 
          onApply={(status) => setFilterStatus(status)}
        />
      )}

      <Footer/>
    </div>
  )
}

export default App
