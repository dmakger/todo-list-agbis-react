import { ITask } from "../model/task.model";

const STORAGE_KEY = "tasks";

export const fakeApi = {
  // Получить все задачи
  getTasks: (): ITask[] => {
    const tasks = localStorage.getItem(STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  },

  // Добавить новую задачу
  addTask: (task: ITask): ITask[] => {
    const tasks = fakeApi.getTasks();
    const updatedTasks = [task, ...tasks];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    return updatedTasks;
  },

  // Обновить задачу по ID
  updateTask: (id: number, updatedTask: Partial<ITask>): ITask[] => {
    const tasks = fakeApi.getTasks().map(task =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return tasks;
  },

  // Удалить задачу по ID
  deleteTask: (id: number): ITask[] => {
    const tasks = fakeApi.getTasks().filter(task => task.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return tasks;
  },
};
