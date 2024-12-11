import { authRoles } from "./auth/authRoles";

export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/default",
    icon: "dashboard",
    auth: authRoles.sa, // ONLY SUPER ADMIN(SA) CAN ACCESS
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: "analytics",
    auth: authRoles.admin, // ONLY SUPER ADMIN(SA) AND ADMIN CAN ACCESS
  },
  {
    name: "Alternative",
    path: "/dashboard/alternative",
    icon: "analytics",
    auth: authRoles.admin,
  },
  {
    name: "Inventory Management",
    path: "/dashboard/inventory-management",
    icon: "store",
    auth: authRoles.admin
  },
  { name: 'About', iconText: 'AB', path: '/portfolio/about', icon: 'person', },
  { name: 'Education', iconText: 'SU', path: '/portfolio/education', icon: 'school' },
  // { name: 'Experience', iconText: 'FP', path: '/session/forgot-password' },
  // { name: 'Skills', iconText: '404', path: '/session/404' },
  { name: 'Projects', iconText: 'PR', path: '/portfolio/projects', icon: 'description' },
  { name: 'Services', iconText: 'SR', path: '/portfolio/services', icon: 'settings' },
  { name: 'Contact Us', iconText: 'CU', path: '/portfolio/contact_us', icon: 'record_voice_over' },

  { label: "Admin Panel", type: "label", auth: authRoles.admin },
  {
    name: "Dashboard",
    icon: "manage_accounts",
    children: [
      { name: "Account", path: "/account", icon: "person_search", auth: authRoles.admin }, { name: "Responses", path: "/pages/contact-us-list", icon: "forum", auth: authRoles.admin }, // Icon representing responses or discussions
      { name: "Projects", path: "/pages/project-management", icon: "work", auth: authRoles.admin }, // Icon representing projects or work
      { name: "Users", path: "/pages/users", icon: "group", auth: authRoles.admin } // Icon representing users or a group
    ],
  },

  { label: "Pages", type: "label", auth: authRoles.admin },

  {
    name: "Customers",
    icon: "people",
    children: [
      { name: "Customer List", path: "/pages/customer-list", iconText: "CL", auth: authRoles.admin },
      { name: "View Customer", path: "/pages/view-customer", iconText: "VC", auth: authRoles.admin },
      { name: "New Customer", path: "/pages/new-customer", iconText: "NC", auth: authRoles.admin },
    ],
  },
  {
    name: "Products",
    icon: "shopping_cart",
    children: [
      { name: "Product List", path: "/pages/product-list", iconText: "PL", auth: authRoles.admin },
      { name: "View Product", path: "/pages/view-product", iconText: "VP", auth: authRoles.admin },
      { name: "New Product", path: "/pages/new-product", iconText: "NP", auth: authRoles.admin },
    ],
  },
  {
    name: "Orders",
    icon: "folder",
    children: [
      { name: "Order List", path: "/pages/order-list", iconText: "OL", auth: authRoles.admin },
      { name: "View Order", path: "/invoice/fdskfjdsuoiucrwevbgd", iconText: "VO", auth: authRoles.admin },
    ],
  },
  {
    name: "Help Center",
    icon: "help",
    children: [
      { name: "FAQ 1", path: "/pages/faq-1", iconText: "F1", auth: authRoles.admin },
      { name: "FAQ 2", path: "/pages/faq-2", iconText: "F2", auth: authRoles.admin },
    ],
  },
  {
    name: "Pricing",
    icon: "money",
    children: [
      { name: "Pricing 1", iconText: "P1", path: "/others/pricing-1", auth: authRoles.admin },
      { name: "Pricing 2", iconText: "P2", path: "/others/pricing-2", auth: authRoles.admin },
      { name: "Pricing 3", iconText: "P3", path: "/others/pricing-3", auth: authRoles.admin },
      { name: "Pricing 4", iconText: "P4", path: "/others/pricing-4", auth: authRoles.admin },
    ],
  },
  {
    name: "User List",
    icon: "people",
    children: [
      { name: "User List 1", path: "/pages/user-list-1", iconText: "U1", auth: authRoles.admin },
      { name: "User List 2", path: "/pages/user-list-2", iconText: "U2", auth: authRoles.admin },
      { name: "User List 3", path: "/pages/user-list-3", iconText: "U3", auth: authRoles.admin },
      { name: "User List 4", path: "/pages/user-list-4", iconText: "U3", auth: authRoles.admin },
    ],
  },
  {
    name: "Forms",
    icon: "description",
    children: [
      { name: "Order Form", path: "/forms/order-form", iconText: "OF", auth: authRoles.admin },
      { name: "Invoice Form", path: "/forms/invoice-form", iconText: "IF", auth: authRoles.admin },
      { name: "Property Listing Form", path: "/forms/property-listing-form", iconText: "PF", auth: authRoles.admin },
      { name: "Basic", path: "/forms/basic", iconText: "B", auth: authRoles.admin },
      { name: "Upload", path: "/forms/upload", iconText: "U", auth: authRoles.admin },
      { name: "Wizard", path: "/forms/wizard", iconText: "W", auth: authRoles.admin },
    ],
  },
  {
    name: "Matx List",
    icon: "list",
    children: [{ name: "List", path: "/matx-list", iconText: "L", auth: authRoles.admin }],
  },
  // {
  //   name: "Session/Auth",
  //   icon: "security",
  //   children: [
  //     { name: "Sign in", iconText: "SI", path: "/session/signin" },
  //     { name: "Sign up", iconText: "SU", path: "/session/signup" },
  //     { name: "Forgot Password", iconText: "FP", path: "/session/forgot-password" },
  //     { name: "Error", iconText: "404", path: "/session/404" },
  //   ],
  // },
  { label: "Apps", type: "label", auth: authRoles.admin },
  {
    name: "Ecommerce",
    icon: "shopping_basket",

    children: [
      { name: "Shop", path: "/ecommerce/shop", iconText: "S", auth: authRoles.admin },
      { name: "Cart", path: "/ecommerce/cart", iconText: "C", auth: authRoles.admin },
      { name: "Checkout", path: "/ecommerce/checkout", iconText: "CO", auth: authRoles.admin },
    ],
  },

  { name: "Invoice Builder", icon: "receipt", path: "/invoice/list", auth: authRoles.admin },
  { name: "Chat", icon: "chat", path: "/chat", auth: authRoles.admin },
  { name: "Inbox", icon: "inbox", path: "/inbox", auth: authRoles.admin },
  { name: "Todo", icon: "center_focus_strong", path: "/todo/list", auth: authRoles.admin },
  { name: "CRUD Table", icon: "format_list_bulleted", path: "/crud-table", auth: authRoles.admin },

  // { label: "Tables", type: "label" },
  // {
  //   name: "Data Table",
  //   icon: "table_view",

  //   children: [
  //     { name: "Simple Mui Table", path: "/data-table/simple-mui-table", iconText: "T1" },
  //     { name: "Expandable Mui Table", path: "/data-table/expandable-mui-table", iconText: "T2" },
  //   ],
  // },

  { label: "Components", type: "label", auth: authRoles.admin },
  {
    name: "Components",
    icon: "favorite",
    badge: { value: "30+", color: "secondary" },
    children: [
      { name: "Auto Complete", path: "/material/autocomplete", iconText: "A", auth: authRoles.admin },
      { name: "Buttons", path: "/material/buttons", iconText: "B", auth: authRoles.admin },
      { name: "Checkbox", path: "/material/checkbox", iconText: "C", auth: authRoles.admin },
      { name: "Dialog", path: "/material/dialog", iconText: "D", auth: authRoles.admin },
      // { name: "Drag and Drop", iconText: "D", path: "/others/drag-and-drop", auth: authRoles.admin },
      { name: "Expansion Panel", path: "/material/expansion-panel", iconText: "E", auth: authRoles.admin },
      { name: "Form", path: "/material/form", iconText: "F", auth: authRoles.admin },
      { name: "Icons", path: "/material/icons", iconText: "I", auth: authRoles.admin },
      { name: "Menu", path: "/material/menu", iconText: "M", auth: authRoles.admin },
      { name: "Progress", path: "/material/progress", iconText: "P", auth: authRoles.admin },
      { name: "Radio", path: "/material/radio", iconText: "R", auth: authRoles.admin },
      { name: "Switch", path: "/material/switch", iconText: "S", auth: authRoles.admin },
      { name: "Slider", path: "/material/slider", iconText: "S", auth: authRoles.admin },
      { name: "Snackbar", path: "/material/snackbar", iconText: "S", auth: authRoles.admin },
      { name: "Table", path: "/material/table", iconText: "T", auth: authRoles.admin },
    ],
  },

  { label: "Charts", type: "label", auth: authRoles.admin },
  {
    name: "Charts",
    icon: "trending_up",
    children: [
      { name: "Echarts", path: "/charts/echarts", iconText: "E", auth: authRoles.admin },
      { name: "Recharts", path: "/charts/recharts", iconText: "R", auth: authRoles.admin },
      { name: "Apex Charts", path: "/charts/apex-charts", iconText: "A", auth: authRoles.admin },
    ],
  },
];

