import { TaskCreateShort } from "@/features/Create/Task/Short/TaskCreateShort";
import { TaskListMobX } from "@/widgets/List/Task/MobX/TaskListMobX";
import cl from './_HomePage.module.scss'
import { WrapperScroll } from "@/shared/ui/Wrapper/Scroll/WrapperScroll";


const HomePage = () => {
	return (
		<div className={cl.wrapper}>
			<TaskCreateShort />
			<WrapperScroll className={cl.taskList}>
				<TaskListMobX />
			</WrapperScroll>
		</div>
	)
};

export default HomePage;
