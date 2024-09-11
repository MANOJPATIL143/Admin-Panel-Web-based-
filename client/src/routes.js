import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/PaymentHistory";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/ReviewManagement";
import ServiceManagement from "views/examples/ServiceManagement";
import Notifications from "views/examples/Notifications";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/servicemanagment",
    name: "Service Managment",
    icon: "ni ni-planet text-blue",
    component: <ServiceManagement />,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Paymant History",
    icon: "ni ni-pin-3 text-orange",
    component: <Maps />,
    layout: "/admin",
  },
  
  {
    path: "/tables",
    name: "Review Management",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Tables />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Chat History",
    icon: "ni ni-single-02 text-yellow",
    component: <Profile />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ni ni-key-25 text-info",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: <Register />,
  //   layout: "/auth",
  // },
];
export default routes;
