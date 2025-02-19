import { taskStore, TTaskStore } from "@/entities/Task/store/task.store";
import { createContext } from "react";

export const MobxContext = createContext<{ 
    taskStore: TTaskStore 
}>({
    taskStore,
});