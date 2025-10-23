import type { TaskType } from "../../App";

interface DashboardProps {
  tasks: TaskType[];
}

export const Dashboard = ({ tasks }: DashboardProps) => {

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); 
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const tarefasSemana = tasks.filter((t) => {
    const data = new Date(t.dataEntrega + "T00:00:00");
    return data >= startOfWeek && data <= endOfWeek;
  }).length;

  const tarefasAtrasadas = tasks.filter((t) => {
    const data = new Date(t.dataEntrega + "T00:00:00");
    return data < now && t.status === "Pendente";
  }).length;

  const concluidas = tasks.filter((t) => t.status === "Concluído").length;
  const total = tasks.length;
  const percentual = total > 0 ? Math.round((concluidas / total) * 100) : 0;

  return (
    <div className="-mt-32 relative z-10 p-6 pb-3 lg:mt-0 max-w-[900px] mx-auto">
      <h2 className="text-white text-xl mb-4 lg:text-[#3D3B3B] lg:dark:text-white">Dashboard</h2>
      <div className="md:flex gap-4">
        <div className="flex gap-4 align-center mb-4 md:mb-0">
          <div className="bg-white dark:bg-[#212227] p-4 rounded-[6px] w-[50%]">
            <p className="text-[16px] dark:text-white text-[#3D3B3B] font-medium">Tarefas</p>
            <p className="text-[32px] text-[#3979F7] font-bold my-1">{tarefasSemana}</p>
            <p className="text-[14px] dark:text-[#D9D9D9] text-[#6D6A6A] font-medium">Para esta Semana</p>
          </div>
          <div className="bg-white dark:bg-[#212227] p-4 rounded-[6px] w-[50%]">
            <p className="text-[16px] dark:text-white text-[#3D3B3B] font-medium ">Tarefas Atrasadas</p>
            <p className="text-[32px] text-[#3979F7] font-bold my-1">{tarefasAtrasadas}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-[#212227] p-4 md:flex-1 rounded-[6px]">
          <p className="text-[16px] text-[#3D3B3B] font-medium dark:text-white">Tarefas Concluidas</p>
          <div className="w-full h-8 bg-[#F5F5F5] rounded-[6px] my-4 dark:bg-[#585858]">
            <div className="h-8 bg-[#3979F7] rounded-[6px]" style={{ width: `${percentual}%` }}></div>
          </div>
          <p className="text-[14px] text-[#6D6A6A] dark:text-[#D9D9D9] font-medium">{concluidas}/{total}</p>
        </div>
      </div>
    </div>
  );
}