import type { RouteObject } from "react-router-dom";
import { DashboardPage } from "@pages/dashboard";
import { SpendingPage } from "@pages/spending";
import { PlanPage } from "@pages/plan";
import { RouterPaths } from "./router-paths";

export const routes: RouteObject[] = [
    {
        path: RouterPaths.main,
        element: <DashboardPage />
    },
    {
        path: RouterPaths.plan,
        element: <PlanPage />,
    },
    {
        path: RouterPaths.spending,
        element: <SpendingPage />
    }
]