import { FC } from "react";

import { cls } from "@/shared/lib/classes.lib";
import cl from "./_Task.module.scss";

import { ITask } from "../model/task.model";
import { IListItem } from "@/shared/model/list.model";
import Input from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { TRASH_WHITE } from "@/shared/data/icon/trash.data.icon";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/shared/ui/Button/data/button.data";
import { taskStore } from "../store/task.store";

interface TaskProps extends IListItem<ITask> {
    canOpen?: boolean;
}

export const Task: FC<TaskProps> = ({
    item,
    onClick,
    onClickDelete,
    className,
}) => {
    // HANDLE
    const handleOnClickTask = () => {
        onClick?.(item);
    };

    const handleOnChecked = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        event.stopPropagation();
        taskStore.toggleTaskCompletion(item.id, checked);
    };

    const handleOnDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClickDelete?.();
        taskStore.deleteTask(item.id);
    };

    return (
    <div onClick={handleOnClickTask} className={cls(cl.task, className)}>
        <div className={cl.body}>
            <Input.Checkbox
                onClick={(e) => e.stopPropagation()}
                onChange={handleOnChecked}
                checked={item.completed}
            />
            <span className={cl.title}>{item.title}</span>
        </div>
        <Button
            variant={ButtonVariant.Content}
            size={ButtonSize.Medium}
            color={ButtonColor.Negative}
            afterImage={TRASH_WHITE}
            onClick={handleOnDelete}
            className={cl.delete}
        />
    </div>
    );
};
