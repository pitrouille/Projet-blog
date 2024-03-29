import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
            <h1>Blog</h1>
            <Outlet/>
        </>
    )
}