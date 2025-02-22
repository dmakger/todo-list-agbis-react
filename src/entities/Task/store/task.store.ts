import { makeAutoObservable, runInAction } from "mobx";
import { ICreateTask, ITask, ITaskBody } from "../model/task.model";
import { ETaskFilter } from "../data/task.data";
import { fakeApi } from "../api/task.fake.api";

class TaskStore {
	tasks: ITask[] = [];
	filter: ETaskFilter = ETaskFilter.All;
	selectedTask: ITask | null = null;

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
		const completed = checked ?? !this.getTask(id)?.completed
		this.tasks = fakeApi.updateTask(id, { completed });

		if (this.selectedTask && this.selectedTask.id === id) {
            runInAction(() => {
                taskStore.selectedTask = { ...this.selectedTask!, completed };
            });
        }

	}

	deleteTask(id: number) {
		this.tasks = fakeApi.deleteTask(id);
		if (this.selectedTask?.id === id) {
			this.setSelectedTask(null)
		}
	}

	updateTask(id: number, body: Partial<ITaskBody>) {
		runInAction(() => {
			const updatedTasks = fakeApi.updateTask(id, body);
			this.tasks = updatedTasks;
	
			if (this.selectedTask?.id === id) {
				this.selectedTask = this.getTask(id);
			}
		});
	}

	setFilter(filter: ETaskFilter) {
		this.filter = filter;
	}

	setSelectedTask(id: number | null) {
		this.selectedTask = id ? this.getTask(id) : null;
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
export type TTaskStore = typeof taskStore;
