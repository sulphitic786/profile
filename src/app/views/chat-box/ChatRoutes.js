import Loadable from "app/components/Loadable";
import React, { lazy } from "react";

const AppChat = Loadable(lazy(() => import("./AppChat")));

const chatRoutes = [{ path: "/chat", element: <AppChat /> }];

export default chatRoutes;
