import { TaskCreateShort } from "@/features/Create/Task/Short/TaskCreateShort";
import { TaskListMobX } from "@/widgets/List/Task/MobX/TaskListMobX";

const HomePage = () => {
	return (
		<div className="">
			<TaskCreateShort />
			<TaskListMobX />
		</div>
	)
};

export default HomePage;
