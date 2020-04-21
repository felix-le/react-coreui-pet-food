import Users from "./views/Pages/Users";
import Food from "./views/Pages/Food";
import Settings from "./views/Pages/Settings";
import Infor from "./views/Pages/Infor";
import Dashboard from "./views/Dashboard";
import DetailUser from "./views/Pages/DetailUser";

// configs
import { URL_PAGE } from "./configs";

const mainRoutes = [
  {
    path: URL_PAGE.DASHBOARD,
    name: "Dashboard",
    exact: true,
    component: Dashboard,
  },
  { path: URL_PAGE.INFO, exact: true, name: "About Project", component: Infor },
  { path: URL_PAGE.FOOD, name: "Food", component: Food, exact: true },
  {
    path: URL_PAGE.SETTINGS,
    name: "Settings",
    component: Settings,
    exact: true,
  },
  { path: URL_PAGE.USERS, name: "Users", component: Users, exact: true },
  {
    path: `${URL_PAGE.USERS_DETAIL}/:id`,
    name: "Detail User",
    component: DetailUser,
    exact: true,
  },
];

export default mainRoutes;
