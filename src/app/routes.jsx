import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Redirect from "./auth/Redirect";
import { authRoles } from "./auth/authRoles";
import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import materialRoutes from "./views/material-kit/MaterialRoutes";

// dashboard page
const Analytics = Loadable(lazy(() => import("./views/dashboard/Analytics")));
const Analytics2 = Loadable(lazy(() => import("./views/dashboard/Analytics2")));
const Analytics3 = Loadable(lazy(() => import("./views/dashboard/Analytics3")));
const InventoryManagement = Loadable(lazy(() => import("./views/dashboard/InventoryManagement")));

// Management pages
const ContactUsRequestList = Loadable(
  lazy(() => import("./views/pages/management/contactus/ContactUsRequests"))
);
const UsersList = Loadable(lazy(() => import("./views/pages/management/users/Users")));
const ProjectsList = Loadable(lazy(() => import("./views/pages/management/projects/Projects")));
const ProjectForm = Loadable(lazy(() => import("./views/pages/management/projects/ProjectForm")));
const ProjectViewer = Loadable(
  lazy(() => import("./views/pages/management/projects/ProjectViewer"))
);

// customer pages
const CustomerList = Loadable(lazy(() => import("./views/pages/customers/CustomerList")));
const CustomerForm = Loadable(
  lazy(() => import("./views/pages/customers/customer-form/CustomerForm"))
);
const CustomerViewer = Loadable(
  lazy(() => import("./views/pages/customers/customer-viewer/CustomerViewer"))
);

// product pages
const ProductList = Loadable(lazy(() => import("./views/pages/products/ProductList")));
const ProductForm = Loadable(lazy(() => import("./views/pages/products/ProductForm")));
const ProductViewer = Loadable(
  lazy(() => import("./views/pages/management/projects/ProjectViewer"))
);

// orders pages
const OrderList = Loadable(lazy(() => import("./views/pages/orders/OrderList")));

// FAQ pages
const Faq1 = Loadable(lazy(() => import("./views/pages/faq/Faq1")));
const Faq2 = Loadable(lazy(() => import("./views/pages/faq/Faq2")));

// Pricing pages
const Pricing1 = Loadable(lazy(() => import("./views/pricing/Pricing1")));
const Pricing2 = Loadable(lazy(() => import("./views/pricing/Pricing2")));
const Pricing3 = Loadable(lazy(() => import("./views/pricing/Pricing3")));
const Pricing4 = Loadable(lazy(() => import("./views/pricing/SimplePricing4")));

// User pages
const UserList1 = Loadable(lazy(() => import("./views/pages/user-list/UserList1")));
const UserList2 = Loadable(lazy(() => import("./views/pages/user-list/UserList2")));
const UserList3 = Loadable(lazy(() => import("./views/pages/user-list/UserList3")));
const UserList4 = Loadable(lazy(() => import("./views/pages/user-list/UserList4")));

// session pages
const NotFound = Loadable(lazy(() => import("./views/sessions/NotFound")));
const JwtLogin = Loadable(lazy(() => import("./views/sessions/JwtLogin")));
const JwtRegister = Loadable(lazy(() => import("./views/sessions/JwtRegister")));
const ForgotPassword = Loadable(lazy(() => import("./views/sessions/ForgotPassword")));

// forms page
const BasicForm = Loadable(lazy(() => import("./views/forms/BasicForm")));
const UploadForm = Loadable(lazy(() => import("./views/forms/UploadForm")));
const WizardForm = Loadable(lazy(() => import("./views/forms/WizardForm")));
const OrderForm = Loadable(lazy(() => import("./views/forms/order-form/OrderForm")));
const InvoiceForm = Loadable(lazy(() => import("./views/forms/invoice-form/InvoiceForm")));
const PropertyListingForm = Loadable(lazy(() => import("./views/forms/PropertyListingForm")));

// AppLIst page
const AppList = Loadable(lazy(() => import("./views/list/AppList")));

// UserProfile page
const UserProfile = Loadable(lazy(() => import("./views/page-layouts/user-profile/UserProfile")));

// Account page
const Account = Loadable(lazy(() => import("./views/account/index")));

// ecommerce page
const Shop = Loadable(lazy(() => import("./views/ecommerce/Shop")));
const Cart = Loadable(lazy(() => import("./views/ecommerce/Cart")));
const Checkout = Loadable(lazy(() => import("./views/ecommerce/Checkout")));

// InvoiceList page
const InvoiceList = Loadable(lazy(() => import("./views/invoice/InvoiceList")));
const InvoiceDetails = Loadable(lazy(() => import("./views/invoice/InvoiceDetails")));
const InvoiceList2 = Loadable(lazy(() => import("./views/invoice/InvoiceList")));

// AppChat page
const AppChat = Loadable(lazy(() => import("./views/chat-box/AppChat")));

// AppInbox routes
const AppInbox = Loadable(lazy(() => import("./views/inbox/AppInbox")));

// AppTodo page
const AppTodo = Loadable(lazy(() => import("./views/todo/AppTodo")));
const TodoEditor = Loadable(lazy(() => import("./views/todo/TodoEditor")));

// CrudTable page
const CrudTable = Loadable(lazy(() => import("./views/CRUD/CrudTable")));

// echart page
// const AppEchart = Loadable(lazy(() => import('./views/charts/echarts/AppEchart')));
// const AppRechart = Loadable(lazy(() => import('./views/charts/recharts/AppRechart')));
// const ApexCharts = Loadable(lazy(() => import('./views/charts/apex-charts/ApexCharts')));

// Portfolio page
const About = Loadable(lazy(() => import("./views/portfolio/About")));
const Education = Loadable(lazy(() => import("./views/portfolio/Education")));
const Services = Loadable(lazy(() => import("./views/portfolio/Services")));
const ContactUs = Loadable(lazy(() => import("./views/portfolio/ContactUs")));
const Projects = Loadable(lazy(() => import("./views/portfolio/projects/Projects")));

const routes = [
  {
    element: (
      // <AuthGuard>
      <MatxLayout />
      // </AuthGuard>
    ),
    children: [
      ...materialRoutes,

      // dashboard route
      // { path: '/dashboard/default', element: <Analytics2 />, auth: authRoles.admin },
      { path: "dashboard/default", element: <Analytics2 />, auth: authRoles.sa },
      { path: "dashboard/analytics", element: <Analytics3 /> },
      { path: "dashboard/alternative", element: <Analytics /> },
      { path: "dashboard/inventory-management", element: <InventoryManagement /> },

      // Management routes
      { path: "/pages/contact-us-list", element: <ContactUsRequestList />, auth: authRoles.admin },
      { path: "/pages/users", element: <UsersList />, auth: authRoles.admin },
      { path: "/pages/project-management", element: <ProjectsList />, auth: authRoles.admin },
      { path: "/pages/new-project", element: <ProjectForm />, auth: authRoles.admin },
      { path: "/pages/view-project", element: <ProjectViewer />, auth: authRoles.admin },

      // customer routes
      { path: "/pages/customer-list", element: <CustomerList /> },
      { path: "/pages/new-customer", element: <CustomerForm /> },
      { path: "/pages/view-customer", element: <CustomerViewer /> },

      // product routes
      { path: "/pages/product-list", element: <ProductList /> },
      { path: "/pages/new-product", element: <ProductForm /> },
      { path: "/pages/view-product", element: <ProductViewer /> },

      // order routes
      { path: "/pages/order-list", element: <OrderList /> },

      // faq routes
      { path: "/pages/faq-1", element: <Faq1 /> },
      { path: "/pages/faq-2", element: <Faq2 /> },

      // Pricing pages
      { path: "/others/pricing-1", element: <Pricing1 /> },
      { path: "/others/pricing-2", element: <Pricing2 /> },
      { path: "/others/pricing-3", element: <Pricing3 /> },
      { path: "/others/pricing-4", element: <Pricing4 /> },

      // user routes
      { path: "/pages/user-list-1", element: <UserList1 /> },
      { path: "/pages/user-list-2", element: <UserList2 /> },
      { path: "/pages/user-list-3", element: <UserList3 /> },
      { path: "/pages/user-list-4", element: <UserList4 /> },

      // forms routes
      { path: "/forms/basic", element: <BasicForm /> },
      { path: "/forms/upload", element: <UploadForm /> },
      { path: "/forms/wizard", element: <WizardForm /> },
      { path: "/forms/order-form", element: <OrderForm /> },
      { path: "/forms/property-listing-form", element: <PropertyListingForm /> },
      { path: "/forms/customer-form", element: <CustomerForm /> },
      { path: "/forms/invoice-form", element: <InvoiceForm /> },

      // AppList routes
      { path: "/matx-list", element: <AppList /> },

      // UserProfile routes
      { path: "/page-layouts/user-profile", element: <UserProfile />, auth: authRoles.editor },

      // Account routes
      { path: "/account", element: <Account />, auth: authRoles.editor },

      // ecommerce routes
      { path: "/ecommerce/shop", element: <Shop />, auth: authRoles.admin },
      { path: "/ecommerce/cart", element: <Cart />, auth: authRoles.admin },
      { path: "/ecommerce/checkout", element: <Checkout />, auth: authRoles.admin },

      // invoice routes
      { path: "/invoice/list", element: <InvoiceList /> },
      { path: "/invoice/:id", element: <InvoiceDetails /> },
      { path: "/invoice/edit/:id", element: <InvoiceList2 /> },

      // AppChat routes
      { path: "/chat", element: <AppChat /> },

      // AppInbox routes
      { path: "/inbox", element: <AppInbox /> },

      // AppTodo routes
      { path: "/todo/list", element: <AppTodo /> },
      { path: "/todo/list/:id", element: <TodoEditor /> },

      // CrudTable routes
      { path: "/crud-table", element: <CrudTable /> },

      // EChart routes
      // { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor },
      // { path: "/charts/recharts", element: <AppRechart /> },
      // { path: "/charts/apex-charts", element: <ApexCharts /> },

      // profile section
      { path: "/portfolio/about", element: <About /> },
      { path: "/portfolio/education", element: <Education /> },
      { path: "/portfolio/services", element: <Services /> },
      { path: "/portfolio/contact_us", element: <ContactUs /> },
      { path: "/portfolio/projects", element: <Projects /> }
    ]
  },

  // session pages route
  // { path: '/session/404', element: <NotFound /> },
  { path: "/session/signin", element: <JwtLogin /> },
  // { path: '/session/signup', element: <JwtRegister /> },
  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "/", element: <Navigate to="/portfolio/about" /> },
  { path: "/", element: <Redirect /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
