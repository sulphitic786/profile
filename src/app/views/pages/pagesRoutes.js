import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Faq1 = Loadable(lazy(() => import("./faq/Faq1")));
const Faq2 = Loadable(lazy(() => import("./faq/Faq2")));
const OrderList = Loadable(lazy(() => import("./orders/OrderList")));
const UserList1 = Loadable(lazy(() => import("./user-list/UserList1")));
const UserList2 = Loadable(lazy(() => import("./user-list/UserList2")));
const UserList3 = Loadable(lazy(() => import("./user-list/UserList3")));
const UserList4 = Loadable(lazy(() => import("./user-list/UserList4")));
const ProductList = Loadable(lazy(() => import("./products/ProductList")));
const ProductForm = Loadable(lazy(() => import("./products/ProductForm")));
const CustomerList = Loadable(lazy(() => import("./customers/CustomerList")));
const ProductViewer = Loadable(lazy(() => import("./products/ProductViewer")));
const CustomerForm = Loadable(lazy(() => import("./customers/customer-form/CustomerForm")));
const CustomerViewer = Loadable(lazy(() => import("./customers/customer-viewer/CustomerViewer")));

const pagesRoutes = [
  { path: "/pages/user-list-1", element: <UserList1 /> },
  { path: "/pages/user-list-2", element: <UserList2 /> },
  { path: "/pages/user-list-3", element: <UserList3 /> },
  { path: "/pages/user-list-4", element: <UserList4 /> },
  { path: "/pages/faq-1", element: <Faq1 /> },
  { path: "/pages/faq-2", element: <Faq2 /> },
  { path: "/pages/customer-list", element: <CustomerList /> },
  { path: "/pages/new-customer", element: <CustomerForm /> },
  { path: "/pages/view-customer", element: <CustomerViewer /> },
  { path: "/pages/product-list", element: <ProductList /> },
  { path: "/pages/new-product", element: <ProductForm /> },
  { path: "/pages/view-product", element: <ProductViewer /> },
  { path: "/pages/order-list", element: <OrderList /> },
];

export default pagesRoutes;
