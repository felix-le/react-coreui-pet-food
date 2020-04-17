import ChangePass from "./views/Pages/ChangePass";
import Dashboard from "./views/Dashboard";
import ForgetPass from "./views/Pages/ForgetPass";
import Login from "./views/Pages/Login";
import Profile from "./views/Pages/Profile";
import ResetPassword from "./views/Pages/ResetPass";
import Register from "./views/Pages/Register";
import DefaultLayout from "./containers/DefaultLayout";
import Settings from './views/Pages/Settings';
import Users from './views/Pages/Users'
// import TestFunction
const routes = [
  { path: "/change-password", showListPage:true,name: "Change Passwords", component: ChangePass },
  { path: "/dashboard", showListPage:false,  name: "Dashboard", component: Dashboard },
  { path: "/forget-password", name: "Forget Password", component: ForgetPass },
  { path: "/login", showListPage:true, name: "Login Page", component: Login },
  { path: "/profile", showListPage:true,name: "User Profile", component: Profile },
  { path: "/reset-password", showListPage:true,name: "Reset Password", component: ResetPassword },
  { path: "/register", showListPage:true,name: "Register", component: Register },
  {
    path: "/default-layout",
    exact: true,
    name: "Default Layout",
    showListPage:true,
    component: DefaultLayout,
  },

  { path: "/Settings", showListPage:false,name: "Settings", component: Settings },
  { path: "/Users", showListPage:false,name: "Users", component: Users },
];

export default routes;
