import { ReactNode } from "react"
import { InputText } from "./Text"
import { InputCheckbox } from "./Checkbox"

interface InputProps {
    children: ReactNode
}

export default function Input({children}: InputProps) {
    return (
        {children}
    )
}

Input.Text = InputText
Input.Checkbox = InputCheckbox

