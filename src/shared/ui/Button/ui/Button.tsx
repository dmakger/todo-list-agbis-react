import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'

import cl from './_Button.module.scss'

import { ButtonColor, ButtonSize, ButtonImageSize, ButtonVariant } from '../data/button.data'
import { cls } from '@/shared/lib/classes.lib'
import { getImageSizeBySize } from '../lib/button.lib'
import { ImageSmart } from '../../Image/ui/Smart/ImageSmart'
import { IButton } from '../model/button.model'


interface IButtonProps extends IButton {}

export const Button = ({
    variant = ButtonVariant.Fill, color=ButtonColor.Primary, size=ButtonSize.DefaultSize, 
    type = 'button',
    isRounded=true,
    ref,
    title, href,
    beforeImage, beforeProps, afterImage, afterProps, 
    active=false, success=false, disabled=false, hovered, loading=false,
    onClick=()=>{}, onMouseEnter=()=>{}, onMouseLeave=()=>{},
    children, className, classNameLink, 
    classNameText, classNameTextHovered, classNameTextPressed, classNameTextDisabled,
}: IButtonProps) => {
    // STATE
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [sizeImage, setSizeImage] = useState<ButtonImageSize>(ButtonImageSize.Big)

    // HANDLE
    const handleOnMouseEnter = () => {
        setIsHovered(true)
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        setIsHovered(false)
        setIsPressed(false)
        onMouseLeave()
    }
    
    const handleOnMouseDown = () => {
        setIsPressed(true)
        setIsHovered(true)
    }
    const handleOnMouseUp = () => {
        setIsPressed(false)
        setIsHovered(true)
    }
    
    // EFFECT
    useEffect(() => {
        setSizeImage(getImageSizeBySize(size))
    }, [size])

    useEffect(() => {
        if (hovered !== undefined)
            setIsHovered(hovered)
    }, [hovered])

    const html =  (
        <button type={type} ref={ref} disabled={disabled || loading} 
                onClick={e => onClick(e)} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} 
                onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}
                className={cls(
                    cl.button, 
                    cl[variant], cl[color], cl[size],
                    isRounded ? cl.rounded : '', 
                    active ? cl.active : '', 
                    !title ? cl.noTitle : '',
                    className
                )}>
            {beforeImage &&
                <ImageSmart {...beforeProps} icon={beforeImage} 
                            width={beforeProps && beforeProps.width ? beforeProps.width: sizeImage} 
                            height={beforeProps && beforeProps.height ? beforeProps.height: sizeImage} 
                            isActive={active} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled}/>

            }
            {title && 
                <span className={cls(
                    cl.title, classNameText,
                    isHovered ? classNameTextHovered : '',
                    isPressed ? classNameTextPressed : '',
                    disabled ? classNameTextDisabled : '',
                )}>{title}</span>
            }
            {afterImage &&
                <ImageSmart {...afterProps} icon={afterImage}
                            width={afterProps && afterProps.width ? afterProps.width: sizeImage} 
                            height={afterProps && afterProps.height ? afterProps.height: sizeImage} 
                            isActive={active && !success} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled}/>
            }
            {children}
        </button>
    )

    
    if (!href)
        return html
    return (
        <Link to={href} className={classNameLink}>{html}</Link>
    )
}

Button.Variant = ButtonVariant;
Button.Color = ButtonColor;
Button.Size = ButtonSize;