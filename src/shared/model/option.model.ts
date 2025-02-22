import { TParams } from "./params.model"


export interface IOption extends IOptionWOId {
    id: number
}

export interface IOptionWOId {
    id?: number
    name: string
    value?: string | number
    option?: IOption
    params?: TParams
    options?: IOption[]
    caption?: string,
}
