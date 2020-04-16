import ChangePass from "./views/Pages/ChangePass";
import Dashboard from "./views/Dashboard";
import ForgetPass from "./views/Pages/ForgetPass";
import Login from "./views/Pages/Login";
import Profile from "./views/Pages/Profile";
import ResetPassword from "./views/Pages/ResetPass";
import Register from "./views/Pages/Register";
import DefaultLayout from "./containers/DefaultLayout";
const routes = [
  { path: "/change-password", name: "Change Passwords", component: ChangePass },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/forget-password", name: "Forget Password", component: ForgetPass },
  { path: "/login", name: "Login Page", component: Login },
  { path: "/profile", name: "User Profile", component: Profile },
  { path: "/reset-password", name: "Reset Password", component: ResetPassword },
  { path: "/register", name: "Register", component: Register },
  {
    path: "/default-layout",
    exact: true,
    name: "Default Layout",
    component: DefaultLayout,
  },
];

export default routes;
