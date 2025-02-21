import { FC } from "react"

import { IListTop } from "@/shared/model/list.model";
import { ITask } from "@/entities/Task/model/task.model";
import { List } from "@/shared/ui/List/ui/List";
import { Task } from "@/entities/Task/ui/Task";
import { ListDirection } from "@/shared/data/list.data";
import { Line } from "@/shared/ui/Line/Line";

interface TaskListProps extends IListTop<ITask>{}

export const TaskList:FC<TaskListProps> = ({
    direction,
    gap, 
    ...rest
}) => {    
    return (
        <List {...rest}  
            component={Task} 
            componentBetween={Line}
            loadingProps={{ length: 10 }} 
            direction={direction ?? ListDirection.Column}
            gap={gap ?? 0}
        />
    )
}
