import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default router;