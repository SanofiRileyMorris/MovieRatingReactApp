import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import { Movie } from "./components/Movie/Movie";


export const getRoutes = () => [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        // loader: homeLoader(),
    },
    {
        path: "/login",
        element: <Login />,
        // loader: loginLoader(),
    }, {
        path: "/error",
        element: <ErrorPage />,
    },
    {
        path: "/movie/:movieId",
        element: <Movie />,
        errorElement: <ErrorPage />,
    },
];
export const getRouter = () => createBrowserRouter(getRoutes());
