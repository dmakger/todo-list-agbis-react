'use client'
import { ChangeEvent, useEffect, useState } from 'react';

import { cls } from '@/shared/lib/classes.lib';
import cl from './_InputText.module.scss';
import { IInput } from '@/shared/ui/Input/model/input.model';
import { TFunc } from '@/shared/model/function.model';

interface InputTextProps extends IInput {
    defaultValue?: string | number;
    value?: string;
    setValue?: TFunc;

    variant?: 'text' | 'textarea';
    maxLength?: number;
    rows?: number;
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

    // STATE
    const [localValue, setLocalValue] = useState<string | number>(defaultValue ?? '');

    // EFFECT
    useEffect(() => {
        if (value !== undefined) {
            setLocalValue(value ?? '');
        }
    }, [value]);

    useEffect(() => {
        const inputElement = document.querySelector<HTMLInputElement>(`form input[name="${name}"]`);
        const form = inputElement?.form;
        if (!form) return;

        const handleReset = () => {
            setLocalValue(prev => typeof prev === "number" ? 0 : '');
        };

        form.addEventListener("reset", handleReset);
        return () => form.removeEventListener("reset", handleReset);
    }, [name]);

    // HANDLE
    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        setValue?.(newValue);
        onChange?.(newValue);
        onChangeEvent?.(e);
    };

    return (
        <>
            {variant === 'text' ? (
                <input
                    name={name}
                    type="text"
                    value={localValue}
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
                    value={localValue}
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
    );
}
