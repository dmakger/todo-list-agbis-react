import { observer } from "mobx-react-lite";
import { ChangeEvent } from "react";

import { taskStore } from "@/entities/Task/store/task.store";
import cl from './_TaskDetail.module.scss'


export const TaskDetail = observer(() => {
	const task = taskStore.selectedTask;
	if (!task) return null; // Если задача не выбрана — ничего не рендерим

	const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		taskStore.updateTask(task.id, { title: e.target.value });
	};

	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		taskStore.updateTask(task.id, { description: e.target.value });
	};

	const handleToggleCompletion = () => {
		taskStore.toggleTaskCompletion(task.id);
	};

	return (
		<div className={cl.wrapper}>
			<h3>Детали задачи</h3>
			<input type="text" value={task.title} onChange={handleTitleChange} style={{ width: "100%", marginBottom: "10px" }} />
			<textarea value={task.description || ""} onChange={handleDescriptionChange} style={{ width: "100%", height: "100px", marginBottom: "10px" }} />
			<label>
				<input type="checkbox" checked={task.completed} onChange={handleToggleCompletion} /> Выполнено
			</label>
			<button onClick={() => taskStore.setSelectedTask(null)} style={{ display: "block", marginTop: "10px" }}>Закрыть</button>
		</div>
	);
});
