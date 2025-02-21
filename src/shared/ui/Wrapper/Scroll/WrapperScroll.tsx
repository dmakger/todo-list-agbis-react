import { FC, ReactNode } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_WrapperScroll.module.scss'

interface WrapperScrollProps {
    children: ReactNode
    className?: string,
}

export const WrapperScroll:FC<WrapperScrollProps> = ({children, className}) => {
    return (
        <div className={cls(cl.wrapper, className)}>
            {children}
        </div>
    )
}
