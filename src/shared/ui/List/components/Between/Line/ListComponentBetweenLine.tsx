import { FC } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_ListComponentBetweenLine.module.scss'

interface ListComponentBetweenLineProps{
    className?: string,
}

export const ListComponentBetweenLine:FC<ListComponentBetweenLineProps> = ({className}) => {
    
    return (
        <div className={cls(cl.line, className)}>
            GOOOL
        </div>
    )
}
