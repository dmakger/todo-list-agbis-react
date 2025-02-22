import cl from './_HomePage.module.scss';

import { TaskCreateShort } from "@/features/Create/Task/Short/TaskCreateShort";
import { TaskListMobX } from "@/widgets/List/Task/MobX/TaskListMobX";
import { WrapperScroll } from "@/shared/ui/Wrapper/Scroll/WrapperScroll";
import { DropdownTaskFilter } from "@/features/Dropdown/Filter/Task/ui/DropdownTaskFilter";


const HomePage = () => {	
	return (
		<div className={cl.wrapper}>
			<TaskCreateShort />
			<DropdownTaskFilter />
			<WrapperScroll className={cl.taskList}>
				<TaskListMobX />
			</WrapperScroll>
		</div>
	)
};

export default HomePage;
