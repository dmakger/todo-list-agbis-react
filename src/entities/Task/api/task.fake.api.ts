import { ITask } from "../model/task.model";

const STORAGE_KEY = "tasks";

// Дефолтные задачи при первом запуске
const DEFAULT_TASKS: ITask[] = [
	{ id: 1, title: "Изучить состав Пива", description: "Понять основы хмеля", completed: false },
	{ id: 2, title: "Настроить проект", description: "Настроить Next.js + MobX", completed: true },
	{ id: 3, title: "Создать компоненты", description: "Разбить UI на логические блоки", completed: false },
];

export const fakeApi = {
	// Получить все задачи (инициализация дефолтных)
	getTasks: (): ITask[] => {
		const tasks = localStorage.getItem(STORAGE_KEY);
		if (!tasks) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TASKS));
			return DEFAULT_TASKS;
		}
		return JSON.parse(tasks);
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
