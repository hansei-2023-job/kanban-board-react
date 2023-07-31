import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import KanbanBoard from "./kanbanBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/kanban-board",
    element: <KanbanBoard />,
  },
]);

const Pages = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
