import { FC } from "react"
import { Outlet } from "react-router-dom";

import { WrapperSidebarTask } from "@/features/Wrapper/Sidebar/Task/WrapperSidebarTask";

interface LayoutTaskSidebarProps{
    className?: string,
}

export const LayoutTaskSidebar:FC<LayoutTaskSidebarProps> = (rest) => {
    return (
        <WrapperSidebarTask {...rest}>
            <Outlet />
        </WrapperSidebarTask>
    )
}
