import { makeAutoObservable } from "mobx";
import { ICreateTask, ITask, ITaskBody } from "../model/task.model";
import { ETaskFilter } from "../data/task.data";
import { fakeApi } from "../api/task.fake.api";

class TaskStore {
	tasks: ITask[] = [];
	filter: ETaskFilter = ETaskFilter.All;

	constructor() {
		makeAutoObservable(this);
		this.loadTasks(); // Загружаем задачи при инициализации
	}

	// Загрузить задачи из localStorage
	loadTasks() {
		this.tasks = fakeApi.getTasks();
	}

	// Добавить новую задачу
	addTask({title, description}: ICreateTask) {
		const newTask: ITask = {
			id: Date.now(),
			title,
			description,
			completed: false,
		};
		// this.tasks = fakeApi.addTask(newTask);
		this.tasks.push(newTask);
        fakeApi.addTask(newTask);
		return newTask;
	}

	// Переключить выполнение задачи
	toggleTaskCompletion(id: number, checked?: boolean) {
		const task = this.tasks.find((task) => task.id === id);
		if (task) {
			this.tasks = fakeApi.updateTask(id, { completed: checked ?? !task.completed });
		}
	}

	// Удалить задачу
	deleteTask(id: number) {
		this.tasks = fakeApi.deleteTask(id);
	}

	// Обновить задачу
	updateTask(id: number, body: ITaskBody) {
		this.tasks = fakeApi.updateTask(id, body);
	}

	// Установить фильтр
	setFilter(filter: ETaskFilter) {
		this.filter = filter;
	}

	// Фильтр задач
	get filteredTasks() {
	switch (this.filter) {
		case ETaskFilter.Completed:
			return this.tasks.filter((task) => task.completed);
		case ETaskFilter.Uncompleted:
			return this.tasks.filter((task) => !task.completed);
		default:
			return this.tasks;
	}
	}
}

export const taskStore = new TaskStore();
export type TTaskStore = typeof taskStore;
