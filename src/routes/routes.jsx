import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { DashboardPage } from "../pages/DashboardPage";
import { BoardPage } from "../pages/BoardPage";
import { HomePage } from "../pages/HomePage";
import { AnalyticsPage } from "../pages/AnalyticsPage";
import { SettingsPage } from "../pages/SettingsPage";

export const ROUTES = createBrowserRouter([
    {path: "/", element:<HomePage/>, children:[
        {path: "/dashboard", element:<DashboardPage/>},
        {path: "/board", element:<BoardPage/>},
        {path: "/analytics", element:<AnalyticsPage/>},
        {path: "/settings", element:<SettingsPage/>},        
    ]},
    {path:"/error", element:<ErrorPage/>}
])