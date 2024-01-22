import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Pricing1 = Loadable(lazy(() => import("./Pricing1")));
const Pricing2 = Loadable(lazy(() => import("./Pricing2")));
const Pricing3 = Loadable(lazy(() => import("./Pricing3")));
const Pricing4 = Loadable(lazy(() => import("./Pricing4")));

const pricingRoutes = [
  { path: "/others/pricing-1", element: <Pricing1 /> },
  { path: "/others/pricing-2", element: <Pricing2 /> },
  { path: "/others/pricing-3", element: <Pricing3 /> },
  { path: "/others/pricing-4", element: <Pricing4 /> },
];

export default pricingRoutes;
