import { FC } from "react"
import { observer } from "mobx-react-lite";

import { ETaskFilter } from "@/entities/Task/data/task.data";
import { taskStore } from "@/entities/Task/store/task.store";
import { Dropdown } from "@/shared/ui/Dropdown/ui/Dropdown";
import { IDropdown } from "@/shared/ui/Dropdown/model/dropdown.model";
import { useTranslation } from "react-i18next";
import { IOption } from "@/shared/model/option.model";

interface DropdownTaskFilterProps{
    className?: string,
}

export const DropdownTaskFilter:FC<DropdownTaskFilterProps> = observer(() => {
    // TRANSLATE
    const { t } = useTranslation();

    // Генерируем список фильтров с локализацией
    const TASK_FILTER__DATA: IOption[] = [
      { id: 1, name: t("task.filter.all"), value: ETaskFilter.All },
      { id: 2, name: t("task.filter.completed"), value: ETaskFilter.Completed },
      { id: 3, name: t("task.filter.uncompleted"), value: ETaskFilter.Uncompleted },
    ];
  
    // Дефолтный фильтр
    const TASK_FILTER__DEFAULT_DATA = TASK_FILTER__DATA[0];
  
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