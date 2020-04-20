import Users from './views/Pages/Users'
import Food from './views/Pages/Food'
import Settings from './views/Pages/Settings';
import Infor from './views/Pages/Infor'
import Dashboard from './views/Dashboard'


const mainRoutes = [
  { path: "/dashboard", name: "Dashboard", exact: true ,component: Dashboard },
  { path: "/users",name: "Users", exact: true ,component: Users },
  { path: "/infor", exact: true , name: "About Project", component: Infor },
  { path: "/food", name: "Food", component: Food, exact: true },
  { path: "/settings",name: "Settings", component: Settings, exact: true },

]

export default mainRoutes;