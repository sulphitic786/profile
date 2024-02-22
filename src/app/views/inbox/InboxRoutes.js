import Loadable from "../../components/Loadable";
import { lazy } from "react";

const AppInbox = Loadable(lazy(() => import("./AppInbox")));

const inboxRoute = [{ path: "/inbox", element: <AppInbox /> }];

export default inboxRoute;
