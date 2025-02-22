import { FC, useState } from "react"

import { cls } from '@/shared/lib/classes.lib';
import cl from './_Dropdown.module.scss'
import { IOption } from "@/shared/model/option.model";
import { IDropdown } from "../model/dropdown.model";


export const Dropdown:FC<IDropdown> = ({
    defaultOption,
    options,
    onChange,
    onChangeEvent,
    className
}) => {
    // STATE
    const [selectedOption, setSelectedOption] = useState<IOption | undefined>(defaultOption);

    // HANDLE
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const foundOption = options.find(it => it.value === event.target.value)
        setSelectedOption(foundOption);
        onChange?.(foundOption);
        onChangeEvent?.(event);
    };
    
    return (
        <select value={selectedOption?.value} onChange={handleChange} className={cls(cl.select, className)}>
            {options.map(it => (
                <option value={it.value} className={cl.option} key={it.value}>{it.name}</option>
            ))}
        </select>
    );
}
