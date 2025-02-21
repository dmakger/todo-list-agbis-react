import { observer } from "mobx-react-lite";

import { taskStore } from "@/entities/Task/store/task.store";
import cl from './_TaskDetail.module.scss'
import Input from "@/shared/ui/Input";
import { Line } from "@/shared/ui/Line/Line";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonSize, ButtonColor } from "@/shared/ui/Button/data/button.data";
import { XMARK_WHITE } from "@/shared/data/icon/xmark.data.icon";


export const TaskDetail = observer(() => {
	const task = taskStore.selectedTask;
	if (!task) return null; // Если задача не выбрана — ничего не рендерим

	// HANDLE
	const handleTitleChange = (value: string) => {
		taskStore.updateTask(task.id, { title: value });
	};

	const handleDescriptionChange = (value: string) => {
		taskStore.updateTask(task.id, { description: value });
	};

	const handleToggleCompletion = () => {
		taskStore.toggleTaskCompletion(task.id);
	};

	const handleOnClose = () => {
		taskStore.setSelectedTask(null)
	}


	return (
		<div className={cl.wrapper}>
			<div className={cl.header}>
				<Input.Checkbox checked={task.completed} onChange={handleToggleCompletion} />
				<Line view="vertical" width={3} className={cl.line}/>
				<h2 className={cl.headerTitle}>Детали задачи</h2>
				<div className={cl.right}>
					<Line view="vertical" width={2} className={cl.line}/>
					<Button
						variant={ButtonVariant.Content}
						size={ButtonSize.Medium} 
						color={ButtonColor.Negative}
						afterImage={XMARK_WHITE} 
						onClick={handleOnClose}
						className={cl.headerClose} 
					/>
				</div>
			</div>
			<div className={cl.body}>
				<Input.Text 
					variant={"text"} 
					value={task.title}
					placeholder={"Название"} 
					onChange={handleTitleChange}
					required={true}
					className={cl.title}
				/>
				<Input.Text 
					variant={"textarea"} 
					value={task.description ?? ''} 
					placeholder={"Описание"}
					onChange={handleDescriptionChange}
					className={cl.description} 
				/>
			</div>
		</div>
	);
});
