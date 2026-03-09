import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom"
import { routes } from "./routes"

export const RouterProvider = () => {
    const router = createBrowserRouter(routes)
    return <Provider router={router}/>
}