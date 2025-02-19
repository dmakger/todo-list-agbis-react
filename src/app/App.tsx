import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MobxProvider } from "./providers/mobx/MobXProvider";

const App = () => {
	return (
		<MobxProvider>
			<RouterProvider router={router} />
		</MobxProvider>
	);
};

export default App
