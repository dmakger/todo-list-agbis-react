import { RefObject, ReactNode } from "react"

import { IIcon, IIconProps } from "@/shared/model/icon.model"
import { ButtonVariant, ButtonColor, ButtonType, ButtonSize } from "../data/button.data"


export type IButtonWORef = Omit<IButton, 'ref'>


export interface IButton {
    variant?: ButtonVariant
    color?: ButtonColor
    type?: ButtonType
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

    onClick?: Function
    onMouseEnter?: Function
    onMouseLeave?: Function

    children?: ReactNode
    className?: string
    classNameLink?: string
    classNameText?: string
    classNameTextHovered?: string
    classNameTextPressed?: string
    classNameTextDisabled?: string
}