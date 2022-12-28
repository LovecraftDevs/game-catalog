import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { App } from "./App";
import { Home, Login } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            }, {
                path: "login",
                element: <Login />,
            },
        ]
    }
]);

export const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}