import { FC, useEffect, useState } from "react";

import cl from './_InputCheckbox.module.scss';

export interface InputCheckboxProps {
    title?: string;
    checked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const InputCheckbox: FC<InputCheckboxProps> = ({
    title,
    checked = false,
    onClick,
    onChange,
}) => {
    // STATE
    const [isChecked, setIsChecked] = useState(checked);

    // EFFECT
    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    // HANDLE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        onChange?.(e, newChecked);
    };

    return (
        <label onClick={e => onClick?.(e)} className={cl.wrapper}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => handleChange(e)}
                className={cl.checkbox}
            />
            <span className={cl.checkmark} />
            {title && <span className={cl.title}>{title}</span>}
        </label>
    );
};
