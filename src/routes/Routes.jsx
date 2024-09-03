import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import AddQuery from "../pages/add-query/AddQuery";
import AllQueries from "../pages/all-queries/AllQueries";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MyQueries from "../pages/my-queries/MyQueries";
import MyRecommendations from "../pages/my-recommendations/MyRecommendations";
import QueryDetails from "../pages/query-details/QueryDetails";
import Register from "../pages/register/Register";
import UpdateMyQuery from "../pages/update-my-query/UpdateMyQuery";
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
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: "/addQuery",
                element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
            },
            {
                path: "/allQueries",
                element: <AllQueries></AllQueries>,
                loader: () => fetch("http://localhost:5000/allQueries")
            },
            {
                path: "/queryDetails/:id",
                element: <QueryDetails></QueryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/queryDetails/${params.id}`)
            },
            {
                path: "/updateMyQuery/:id",
                element: <UpdateMyQuery></UpdateMyQuery>,
                loader: ({ params }) => fetch(`http://localhost:5000/queryDetails/${params.id}`)
            },
            {
                path: "/MyRecommendations",
                element: <MyRecommendations></MyRecommendations>
            }
        ]
    },
]);

export default router;