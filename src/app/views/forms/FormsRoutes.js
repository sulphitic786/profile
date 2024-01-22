import Loadable from "app/components/Loadable";
import { lazy } from "react";

const BasicForm = Loadable(lazy(() => import("./BasicForm")));
const UploadForm = Loadable(lazy(() => import("./UploadForm")));
const WizardForm = Loadable(lazy(() => import("./WizardForm")));
const OrderForm = Loadable(lazy(() => import("./order-form/OrderForm")));
const InvoiceForm = Loadable(lazy(() => import("./invoice-form/InvoiceForm")));
const PropertyListingForm = Loadable(lazy(() => import("./PropertyListingForm")));
const CustomerForm = Loadable(lazy(() => import("../pages/customers/customer-form/CustomerForm")));

const formsRoutes = [
  { path: "/forms/basic", element: <BasicForm /> },
  { path: "/forms/upload", element: <UploadForm /> },
  { path: "/forms/wizard", element: <WizardForm /> },
  { path: "/forms/order-form", element: <OrderForm /> },
  { path: "/forms/property-listing-form", element: <PropertyListingForm /> },
  { path: "/forms/customer-form", element: <CustomerForm /> },
  { path: "/forms/invoice-form", element: <InvoiceForm /> },
];

export default formsRoutes;
