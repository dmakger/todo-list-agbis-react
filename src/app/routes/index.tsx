import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "@/pages";
import { LayoutTaskSidebar } from "@/widgets/Layout/SideBar/Task/LayoutTaskSidebar";


export const router = createBrowserRouter([
  { 
    path: ROUTES.HOME,
	element: <LayoutTaskSidebar />,
	children: [
		{ path: ROUTES.HOME, element: <HomePage /> },
	],
  },
]);
