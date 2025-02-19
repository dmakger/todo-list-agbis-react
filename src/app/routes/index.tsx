import { createBrowserRouter } from "react-router-dom";
// import TaskDetails from "../../pages/TaskDetails";
// import NotFound from "../../pages/NotFound";
import { ROUTES } from "../../shared/config/routes";
import HomePage from "@/pages";
// import HomePage from "@/pages";



export const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <HomePage /> },
//   { path: ROUTES.TASK_DETAILS(":id"), element: <TaskDetails /> },
//   { path: ROUTES.NOT_FOUND, element: <NotFound /> },
]);
