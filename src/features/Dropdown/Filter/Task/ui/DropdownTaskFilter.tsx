import { FC } from "react"
import { observer } from "mobx-react-lite";

import { ETaskFilter, TASK_FILTER__DATA, TASK_FILTER__DEFAULT_DATA } from "@/entities/Task/data/task.data";
import { taskStore } from "@/entities/Task/store/task.store";
import { Dropdown } from "@/shared/ui/Dropdown/ui/Dropdown";
import { IDropdown } from "@/shared/ui/Dropdown/model/dropdown.model";

interface DropdownTaskFilterProps{
    className?: string,
}

export const DropdownTaskFilter:FC<DropdownTaskFilterProps> = observer(() => {
    // HANDLE
    const handleChange: IDropdown['onChangeEvent'] = (event) => {
        taskStore.setFilter(event.target.value as ETaskFilter);
    };

    return (
        <Dropdown 
            defaultOption={TASK_FILTER__DEFAULT_DATA} 
            options={TASK_FILTER__DATA} 
            onChangeEvent={handleChange}
        />
    );
});