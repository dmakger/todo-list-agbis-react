import { makeAutoObservable, runInAction } from "mobx";
import { ICreateTask, ITask, ITaskBody } from "../model/task.model";
import { ETaskFilter } from "../data/task.data";
import { fakeApi } from "../api/task.fake.api";

class TaskStore {
	tasks: ITask[] = [];
	filter: ETaskFilter = ETaskFilter.All;
	selectedTask: ITask | null = null; // 🆕 Выбранная задача

	constructor() {
		makeAutoObservable(this);
		this.loadTasks();
	}

	loadTasks() {
		this.tasks = fakeApi.getTasks();
	}

	addTask({ title, description }: ICreateTask) {
		const newTask: ITask = {
			id: Date.now(),
			title,
			description,
			completed: false,
		};
		const updatedTasks = fakeApi.addTask(newTask);
		this.tasks = [...updatedTasks];
	}

	toggleTaskCompletion(id: number, checked?: boolean) {
		this.tasks = fakeApi.updateTask(id, { completed: checked ?? !this.getTask(id)?.completed });
	}

	deleteTask(id: number) {
		this.tasks = fakeApi.deleteTask(id);
	}

	updateTask(id: number, body: Partial<ITaskBody>) {
		const updatedTasks = fakeApi.updateTask(id, body);
		runInAction(() => {
			this.tasks = updatedTasks;
			if (this.selectedTask?.id === id) {
				this.selectedTask = { ...this.selectedTask, ...body };
			}
		});
	}

	setFilter(filter: ETaskFilter) {
		this.filter = filter;
	}

	setSelectedTask(task: ITask | null) {
		this.selectedTask = task;
	}

	getTask(id: number) {
		return this.tasks.find((task) => task.id === id) || null;
	}

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
