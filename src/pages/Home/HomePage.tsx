import { taskStore } from "@/entities/Task/store/task.store";
import Wrapper1280 from "@/shared/ui/Wrapper/1280/Wrapper1280";
import { TaskListMobX } from "@/widgets/List/Task/MobX/TaskListMobX";

const HomePage = () => {
	const handleOnClick = () => {
		taskStore.addTask({
			title: `Task ${Math.floor(Math.random() * 100)}`,
			description: `Description ${Math.floor(Math.random() * 100)}`,
		})
	}

	return (
		<Wrapper1280>
			<button onClick={handleOnClick}>Add Task</button>
			<TaskListMobX />
		</Wrapper1280>
	)
};

export default HomePage;
