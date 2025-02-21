import { FC, FormEvent, useRef } from "react"
import { observer } from "mobx-react-lite";

import { cls } from '@/shared/lib/classes.lib';
import cl from './_TaskCreateShort.module.scss';

import { taskStore } from "@/entities/Task/store/task.store";
import { Button, ButtonVariant } from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";
import { PLUS_WHITE } from "@/shared/data/icon/plus.data.icon";
import { ButtonColor, ButtonSize } from "@/shared/ui/Button/data/button.data";
import { getFormDataFromForm } from "@/shared/lib/formData.lib";


interface TaskCreateShortProps{
    className?: string
}

export const TaskCreateShort:FC<TaskCreateShortProps> = observer(({className}) => {
    // REF
    const formRef = useRef<HTMLFormElement>(null);

    // HANDLE
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!formRef.current) return;
        
        const { titleTask } = getFormDataFromForm(formRef.current)
        if (!titleTask) return;

        taskStore.addTask({ title: titleTask })
        formRef.current.reset()
    }

    return (
        <form ref={formRef} onSubmit={handleOnSubmit} className={cls(cl.wrapper, className)}>
            <Input.Text name={'titleTask'} placeholder="Добавить задачу" />
            <Button
                variant={ButtonVariant.ToFill}
                size={ButtonSize.Small}
                color={ButtonColor.Negative}
                type="submit"
                beforeImage={PLUS_WHITE}
                className={cl.button}
            />
        </form>
    )
})
