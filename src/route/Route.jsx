import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Apps from "../components/AppList/Apps";
import AppDetails from "../components/AppDetails/AppDetails";
import Installed from "../components/Installed/Installed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        { path: '/', element: <Home /> },
        { path: '/apps',
          loader: () => fetch("/AllApps.json"),
          element: <Apps /> },
          {
            path:'/apps/:appsId',
            loader: () => fetch("/AllApps.json"),
            element:<AppDetails></AppDetails>
            
          },
          {
            path:'/installed',
            loader:() => fetch("/AllApps.json"),
            element:<Installed></Installed>
          }

    ]
  },
]);
export default router;