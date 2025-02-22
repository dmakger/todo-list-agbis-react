import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { taskStore } from "@/entities/Task/store/task.store";
import cl from './_TaskDetail.module.scss';
import Input from "@/shared/ui/Input";
import { Line } from "@/shared/ui/Line/Line";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import { ButtonSize, ButtonColor } from "@/shared/ui/Button/data/button.data";
import { XMARK_WHITE } from "@/shared/data/icon/xmark.data.icon";
import { InputCheckboxProps } from "@/shared/ui/Input/ui/Checkbox/ui/InputCheckbox";


export const TaskDetail = observer(() => {
	// TRANSLATE
	const { t } = useTranslation();
	
	// RTK
	const task = taskStore.selectedTask;

	// STATE
	const [isEmpty, setIsEmpty] = useState(false);

	// EFFECT
	useEffect(() => {
		setIsEmpty(task?.title.trim() === '')
	}, [task?.id])
	
	if (!task) return null;

	// HANDLE
	const handleTitleChange = (value: string) => {
		const _title = value.trim()
		setIsEmpty(_title === '')
		taskStore.updateTask(task.id, { title: _title ? _title : `Task #${task.id}` });
	};

	const handleDescriptionChange = (value: string) => {
		taskStore.updateTask(task.id, { description: value });
	};

	const handleToggleCompletion: InputCheckboxProps['onChange'] = (_, checked) => {
		taskStore.toggleTaskCompletion(task.id, checked);
	};

	const handleOnClose = () => {
		taskStore.setSelectedTask(null);
	};

	return (
		<div className={cl.wrapper}>
			<div className={cl.header}>
				<Input.Checkbox checked={task.completed} onChange={handleToggleCompletion} />
				<Line view="vertical" width={3} className={cl.line} />
				<h2 className={cl.headerTitle}>{t("task.detail.title")}</h2>
				<div className={cl.right}>
					<Line view="vertical" width={2} className={cl.line} />
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
					value={isEmpty ? '' : task.title}
					placeholder={t("task.detail.form.titlePlaceholder")}
					onChange={handleTitleChange}
					required={true}
					className={cl.title}
				/>
				<Input.Text
					variant={"textarea"}
					value={task.description ?? ''}
					placeholder={t("task.detail.form.descriptionPlaceholder")}
					onChange={handleDescriptionChange}
					className={cl.description}
				/>
			</div>
		</div>
	);
});