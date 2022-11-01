import React from "react";
import { useRoutes, Navigate } from "react-router-dom";

import { Home, Technology, Schedule, Guaranty, About, Contacts } from "../../pages";

export default function Router() {
    const routes = [
        {
            path: "/",
            element: <Navigate to="/home" replace />,
        },
        {
            path: "/home",
            element: <Home />,
        },
        {
          path: "/technology",
          element: <Technology/>,
        },
        {
          path: "/schedule",
          element: <Schedule />,
        },
        {
          path: "/guaranty",
          element: <Guaranty />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
    ];

    return useRoutes(routes);
}
