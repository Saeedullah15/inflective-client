import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import AddQuery from "../pages/add-query/AddQuery";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyQueries from "../pages/my-queries/MyQueries";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/MyQueries",
                element: <MyQueries></MyQueries>
            },
            {
                path: "/addQuery",
                element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
            }
        ]
    },
]);

export default router;