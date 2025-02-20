import { TaskCreateShort } from "@/features/Create/Task/Short/TaskCreateShort";
import { TaskDetail } from "@/features/Detail/Task/TaskDetail";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { TaskListMobX } from "@/widgets/List/Task/MobX/TaskListMobX";

const HomePage = () => {
	return (
		<Wrapper1280>
			<div className="">
				<TaskCreateShort />
				<TaskListMobX />
			</div>
			<TaskDetail />
		</Wrapper1280>
	)
};

export default HomePage;
