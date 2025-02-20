import { RefObject, ReactNode } from "react"

import { ButtonVariant, ButtonColor, ButtonSize } from "../data/button.data"
import { IIcon, IIconProps } from "@/shared/model/icon.model"
import { TFunc } from "@/shared/model/function.model"


export type IButtonWORef = Omit<IButton, 'ref'>


export interface IButton {
    variant?: ButtonVariant
    color?: ButtonColor
    type?: 'button' | 'submit'
    size?: ButtonSize
    isRounded?: boolean

    ref?: RefObject<HTMLButtonElement>

    title?: string,
    href?: string

    beforeImage?: IIcon
    beforeProps?: IIconProps
    afterImage?: IIcon
    afterProps?: IIconProps
    
    active?: boolean
    success?: boolean,
    disabled?: boolean
    hovered?: boolean
    loading?: boolean
    noTranslation?: boolean

    onClick?: TFunc
    onMouseEnter?: TFunc
    onMouseLeave?: TFunc

    children?: ReactNode
    className?: string
    classNameLink?: string
    classNameText?: string
    classNameTextHovered?: string
    classNameTextPressed?: string
    classNameTextDisabled?: string
}