import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperSidebar.module.scss';

interface WrapperSidebarProps {
    childrenPage: ReactNode
    childrenSidebar: ReactNode
    className?: string,
}

export const WrapperSidebar:FC<WrapperSidebarProps> = ({
    childrenPage,
    childrenSidebar,
    className
}) => {
    return (
        <div className={cls(cl.wrapper, className)}>
            <div className={cl.page}>
                {childrenPage}
            </div>
            <div className={cl.sidebar}>
                {childrenSidebar}
            </div>
        </div>
    )
}
