import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "@/pages";
import { LayoutWithLanguage } from "@/widgets/Layout/Language/LayoutWithLanguage";
import { LayoutTaskSidebar } from "@/widgets/Layout/SideBar/Task/LayoutTaskSidebar";

export const router = createBrowserRouter([
  {
		path: ROUTES.HOME,
		element: <LayoutWithLanguage />, // Layout with language
		children: [
			{
				path: ROUTES.HOME,
				element: <LayoutTaskSidebar />, // Layout with task sidebar
				children: [
					{ path: ROUTES.HOME, element: <HomePage /> },
				],
			},
		],
  },
]);
