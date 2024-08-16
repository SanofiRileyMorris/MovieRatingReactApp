import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";


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
    }
];
export const getRouter = () => createBrowserRouter(getRoutes());
