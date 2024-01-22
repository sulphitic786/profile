import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Shop = Loadable(lazy(() => import("./Shop")));
const Cart = Loadable(lazy(() => import("./Cart")));
const Checkout = Loadable(lazy(() => import("./Checkout")));

const ecommerceRoutes = [
  { path: "/ecommerce/shop", element: <Shop /> },
  { path: "/ecommerce/cart", element: <Cart /> },
  { path: "/ecommerce/checkout", element: <Checkout /> },
];

export default ecommerceRoutes;
