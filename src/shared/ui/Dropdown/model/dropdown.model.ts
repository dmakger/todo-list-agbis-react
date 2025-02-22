import { ChangeEvent } from "react"

import { IOption } from "@/shared/model/option.model"


/**
 * Интерфейс для реализации выпадающего списка: `Dropdown`
 */
export interface IDropdown {
    defaultOption: IOption
    options: IOption[]

    onChange?: (option?: IOption) => void
    onChangeEvent?: (e: ChangeEvent<HTMLSelectElement>) => void

    className?: string,
}
