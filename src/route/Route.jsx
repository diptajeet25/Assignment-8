import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
]);
export default router;