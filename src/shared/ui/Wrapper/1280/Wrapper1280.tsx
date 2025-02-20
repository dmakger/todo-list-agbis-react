import { forwardRef, ReactNode, Ref } from 'react'
import cl from './_Wrapper1280.module.scss'
import { cls } from '@/shared/lib/classes.lib'

interface Wrapper1280Props {
    children?: ReactNode
    classNameWrapper?: string
    classNameContent?: string
}

const Wrapper1280 = forwardRef<HTMLDivElement, Wrapper1280Props>((
    {
        children, 
        classNameWrapper, 
        classNameContent
    }, refOut: Ref<HTMLDivElement>
) => {
    return (
        <div className={cls(cl.wrapper, classNameWrapper)}>
            <div ref={refOut} className={cls(cl.content, classNameContent)}>
                {children}
            </div>
        </div>
    )
});

export default Wrapper1280;