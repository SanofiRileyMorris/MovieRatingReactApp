import path from "node:path/win32";
import { element } from "prop-types";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Error from "./routes/Error/Error";


export const getRoutes = () => [
    {
        path: "/",
        element: <Home />,
        // errorElement: <ErrorPage />,
        // loader: homeLoader(),
    },
    {
        path: "/login",
        element: <Login />,
        // loader: loginLoader(),
    }, {
        path: "/error",
        element: <Error />,
    }
];
export const getRouter = () => createBrowserRouter(getRoutes());
