import { FC } from "react"

import { IListTop } from "@/shared/model/list.model";
import { ITask } from "@/entities/Task/model/task.model";
import { List } from "@/shared/ui/List/ui/List";
import { Task } from "@/entities/Task/ui/Task";
import { ListDirection } from "@/shared/data/list.data";
import { ListComponentBetweenLine } from "@/shared/ui/List/components/Between/Line/ListComponentBetweenLine";

interface TaskListProps extends IListTop<ITask>{
    // componentProps?: IProductRequest
}

export const TaskList:FC<TaskListProps> = ({
    direction,
    gap, 
    ...rest
}) => {    
    return (
        <List {...rest}  
            component={Task} 
            // componentLoading={TaskSkeleton}
            componentBetween={ListComponentBetweenLine}
            loadingProps={{ length: 10 }} 
            direction={direction ?? ListDirection.Column}
            gap={gap ?? 0}
        />
    )
}
