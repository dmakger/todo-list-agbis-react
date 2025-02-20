import { FC, useState } from "react"

import cl from './_InputCheckbox.module.scss';
// import { IListItem } from "@/shared/model/list.model";

interface InputCheckboxProps{
    title?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const InputCheckbox:FC<InputCheckboxProps> = ({
    title,
    checked,
    onChange,
}) => {
    // STATE
    const [isChecked, setIsChecked] = useState(checked)

    // HANDLE
    const handleChange = () => {
        setIsChecked(prev => {
            onChange?.(!prev)
            return !prev
        });
        
    };

    return (
        <label className={cl.wrapper}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                className={cl.checkbox}
            />
            <span className={cl.checkmark} />
            {title && (
                <span className={cl.title}>{title}</span>
            )}
        </label>
    );
}
