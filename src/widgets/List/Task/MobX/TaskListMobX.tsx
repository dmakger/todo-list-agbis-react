import { observer } from "mobx-react-lite";

import { taskStore } from "@/entities/Task/store/task.store";
import { TaskList } from "@/features/List/Task/TaskList";
import { ITask } from "@/entities/Task/model/task.model";


export const TaskListMobX = observer(() => {
    // HANDLE
    const handleOnClickTask = (it: ITask) => {
        taskStore.setSelectedTask(it.id)
    }
    
    return (
        <TaskList 
            items={taskStore.filteredTasks} 
            onClickItem={handleOnClickTask}
            componentProps={{
                canOpen: true,
            }}
        />
    );
});