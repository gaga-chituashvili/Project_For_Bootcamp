import NewTask from "../pages/newtask/NewTask.jsx";
import { routes } from "../constant/route.js";
import Home from "../pages/home/Home.jsx";

const approutes = [
  { path: routes.home, Component: Home },
  { path: routes.newTask, Component: NewTask },
];

export default approutes;
