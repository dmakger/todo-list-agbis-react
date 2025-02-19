import { ReactNode } from "react";
import { taskStore } from "@/entities/Task/store/task.store";
import { MobxContext } from "./MobXContext";



interface MobxProviderProps {
  children: ReactNode;
}

export const MobxProvider = ({ children }: MobxProviderProps) => {
    return (
        <MobxContext.Provider value={{ 
            taskStore 
        }}>
            {children}
        </MobxContext.Provider>
    );
};