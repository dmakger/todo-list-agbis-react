'use client'
import { ChangeEvent, useEffect, useState } from 'react';

import { cls } from '@/shared/lib/classes.lib';
import cl from './_InputText.module.scss';
import { IInput } from '@/shared/ui/Input/model/input.model';
import { TFunc } from '@/shared/model/function.model';


interface InputTextProps extends IInput {
    defaultValue?: string | number,
    value?: string
    setValue?: TFunc

    variant?: 'text' | 'textarea'
    maxLength?: number,
    rows?: number
}

export function InputText({
    variant = 'text',

    defaultValue,
    value,
    setValue,

    maxLength,
    rows,

    name,
    placeholder,
    required,
    disabled,

    onChange,
    onChangeEvent,
    className,
    ...rest 
}: InputTextProps) {

    //STATE
    const [localValue, setLocalValue] = useState<string | number>('');

    //EFFECT
    useEffect(() => {
        if (defaultValue) {
            setLocalValue(defaultValue);
        }
    }, [defaultValue]);

    useEffect(() => {
        if (value) {
            setLocalValue(value);
        }
    }, [value]);

    // HANDLE
    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setLocalValue(value);
        setValue?.(value);
        onChange?.(value);
        onChangeEvent?.(e)
    }


    return (
        <>
            {variant === 'text' ? (
                <input
                    name={name}
                    type={'text'}
                    value={localValue ?? ''}
                    required={required}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    disabled={disabled}
                    maxLength={maxLength}
                    className={cls(cl.item, cl.input, className)}
                    {...rest}
                />
            ) : (
                <textarea
                    name={name}
                    value={localValue ?? ''}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    rows={rows}
                    onChange={handleOnChange}
                    className={cls(cl.item, cl.textarea, className)}
                    {...rest}
                />
            )}
        </>
    )
}
