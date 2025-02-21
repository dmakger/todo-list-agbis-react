import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Line.module.scss'

interface LineProps {
    view?: 'horizontal' | 'vertical'
    width?: number
    height?: number
    className?: string,
}

export const Line:FC<LineProps> = ({
    view='horizontal',
    width, height,
    className
}) => {
    
    return (
        <div style={{width, height}} className={cls(cl[view], cl.line, className)} />
    )
}
