import { IOption } from "@/shared/model/option.model";

export enum ETaskFilter {
    All = 'all',
    Completed = "completed",
    Uncompleted = "uncompleted",
}


// ======{ TASK FILTER }======

/**
 * Список всех фильтров над задачами (`ITask`)
 */
export const TASK_FILTER__DATA: IOption[] = [
    { id: 1, name: 'Все', value: ETaskFilter.All },
    { id: 2, name: 'Завершённые', value: ETaskFilter.Completed },
    { id: 3, name: 'Незавершённые', value: ETaskFilter.Uncompleted },
]

/**
 * Дефолтная фильтрация для списка задач: `TASK_FILTER__DATA`
 */
export const TASK_FILTER__DEFAULT_DATA = TASK_FILTER__DATA[0]