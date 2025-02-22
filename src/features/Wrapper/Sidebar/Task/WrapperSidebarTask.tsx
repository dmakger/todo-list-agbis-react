import { FC, ReactNode } from "react"

import { WrapperSidebar } from "@/shared/ui/Wrapper/SideBar/ui/WrapperSidebar";
import { TaskDetail } from "@/features/Detail/Task/TaskDetail";
import { taskStore } from "@/entities/Task/store/task.store";
import { observer } from "mobx-react-lite";

interface WrapperSidebarTaskProps {
    children: ReactNode
    className?: string,
}

export const WrapperSidebarTask:FC<WrapperSidebarTaskProps> = observer(({
    children, 
    ...rest
}) => {
    const task = taskStore.selectedTask;

    return (
        <WrapperSidebar 
            isOpen={!!task}
            childrenSidebar={(
                <TaskDetail />
            )}
            childrenPage={children}
            {...rest}
        />
    )
})
