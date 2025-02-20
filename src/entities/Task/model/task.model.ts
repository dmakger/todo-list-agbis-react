/**
 * Интерфейс сущности `Task`.  
 * - `Task` - это задача
 */
export interface ITask extends ITaskBody {
    id: number;
}


/**
 * Интерфейс сущности для реализации `Task`.  
 * - `Task` - это задача
 */
export interface ITaskBody {
    title: string;
    description?: string;
    completed?: boolean;
}


/**
 * Интерфейс запроса на создание `Task`.
 * - `title` — обязательное поле.
 * - `description` — необязательное поле.
 */
export interface ICreateTask {
    title: string;
    description?: string;
}