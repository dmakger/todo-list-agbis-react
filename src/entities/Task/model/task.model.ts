/**
 * Интерфейс сущности `Task`.  
 * - `Task` - это задача
 */
export interface ITask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}