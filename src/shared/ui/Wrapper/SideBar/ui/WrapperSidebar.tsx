import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperSidebar.module.scss';

interface WrapperSidebarProps {
    isOpen?: boolean
    childrenPage: ReactNode
    childrenSidebar: ReactNode
    className?: string,
}

export const WrapperSidebar:FC<WrapperSidebarProps> = ({
    isOpen = false,
    childrenPage,
    childrenSidebar,
    className
}) => {
    return (
        <div className={cls(cl.wrapper, className)}>
            <div className={cl.page}>
                {childrenPage}
            </div>
            <div className={cls(isOpen ? cl.open : '', cl.sidebar)}>
                {childrenSidebar}
            </div>
        </div>
    )
}
