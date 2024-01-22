import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AppDragAndDrop = Loadable(lazy(() => import("./AppDragAndDrop")));

const dragAndDropRoute = [{ path: "/others/drag-and-drop", element: <AppDragAndDrop /> }];

export default dragAndDropRoute;
