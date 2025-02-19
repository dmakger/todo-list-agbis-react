import { makeAutoObservable } from "mobx";
import { ITask } from "../model/task.model";


class TaskStore {
	tasks: ITask[] = [];
	filter: "all" | "completed" | "uncompleted" = "all";

	constructor() {
		makeAutoObservable(this);
	}

	addTask(title: string, description: string) {
		const newTask: ITask = {
			id: Date.now(),
			title,
			description,
			completed: false,
		};
		this.tasks.push(newTask);
	}

	toggleTaskCompletion(id: number) {
		const task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.completed = !task.completed;
		}
	}

	deleteTask(id: number) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	updateTask(id: number, title: string, description: string) {
		const task = this.tasks.find((task) => task.id === id);
		if (task) {
			task.title = title;
			task.description = description;
		}
	}

	setFilter(filter: "all" | "completed" | "uncompleted") {
		this.filter = filter;
	}

	get filteredTasks() {
		switch (this.filter) {
			case "completed":
			return this.tasks.filter((task) => task.completed);
			case "uncompleted":
			return this.tasks.filter((task) => !task.completed);
			default:
			return this.tasks;
		}
	}
}

export const taskStore = new TaskStore();
export type TTaskStore = typeof taskStore;
