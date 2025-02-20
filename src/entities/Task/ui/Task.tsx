import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Task.module.scss';
import { ITask } from "../model/task.model";
import { IListItem } from "@/shared/model/list.model";
import Input from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { TRASH_WHITE } from "@/shared/data/icon/trash.data.icon";
import { ButtonColor, ButtonSize, ButtonVariant } from "@/shared/ui/Button/data/button.data";
import { taskStore } from "../store/task.store";

interface TaskProps extends IListItem<ITask>{
    canOpen?: boolean;
}

export const Task:FC<TaskProps> = ({
    canOpen=false,

    item,
    onClick,
    className,
}) => {
    // HANDLE
    const handleOnClickTask = () => {
        onClick?.(item.id)
    }
    const handleOnChecked = (checked: boolean) => {
        taskStore.toggleTaskCompletion(item.id, checked)
    }
    const handleOnDelete = () => {
        taskStore.deleteTask(item.id)
    }

    const html = (
        <div className={cls(cl.task, className)}>
            <Input.Checkbox onChange={handleOnChecked} />
            <span className={cl.title}>{item.title}</span>
            <Button
                variant={ButtonVariant.Content}
                size={ButtonSize.Medium} 
                color={ButtonColor.Negative}
                afterImage={TRASH_WHITE} 
                onClick={handleOnDelete}
                className={cl.delete} />
        </div>
    )

    if (canOpen) {
        return (
            <button onClick={handleOnClickTask}>{html}</button>
        )
    }
    return html;
}
