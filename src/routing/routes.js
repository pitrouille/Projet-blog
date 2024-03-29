import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "",
                element: <HomePage/>,
            },
            {
                path: ":id",
                element: <BlogPage/>

            }
        ]
    }
])