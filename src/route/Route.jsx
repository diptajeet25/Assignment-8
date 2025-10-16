import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Apps from "../components/AppList/Apps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/apps',
          loader: () => fetch("/AllApps.json"),
          element: <Apps /> }

    ]
  },
]);
export default router;