import { observer } from "mobx-react-lite";

import { taskStore } from "@/entities/Task/store/task.store";
import { TaskList } from "@/features/List/Task/TaskList";


export const TaskListMobX = observer(() => {
    return (
        <TaskList items={taskStore.filteredTasks} />
    );
});