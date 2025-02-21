import { FC, ReactNode } from "react"

import { WrapperSidebar } from "@/shared/ui/Wrapper/SideBar/ui/WrapperSidebar";
import { TaskDetail } from "@/features/Detail/Task/TaskDetail";

interface WrapperSidebarTaskProps {
    children: ReactNode
    className?: string,
}

export const WrapperSidebarTask:FC<WrapperSidebarTaskProps> = ({
    children, 
    ...rest
}) => {
    return (
        <WrapperSidebar 
            childrenSidebar={(
                <TaskDetail />
            )}
            childrenPage={children}
            {...rest}
        />
    )
}
