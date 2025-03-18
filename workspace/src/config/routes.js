import NewTask from "../pages/newtask/NewTask.jsx";
import { routes } from "../constant/route.js";
import Home from "../pages/home/Home.jsx";
import CommentarPage from "../pages/commentar/CommentarPage.jsx";

const approutes = [
  { path: routes.home, Component: Home },
  { path: routes.newTask, Component: NewTask },
  { path: routes.commentar, Component: CommentarPage },
];

export default approutes;
