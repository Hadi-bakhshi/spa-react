import BlogComponent from "./Components/BlogComponent/BlogComponent";
import AboutUsPage from "./pages/AboutUsPage";
import Blog from "./pages/Blog";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", component: BlogComponent },
  { path: "/blogs", component: Blog },
  { path: "/about-us", component: AboutUsPage },
  { path: "/profile", component: Profile },
  { path: "/", exact: true, component: HomePage },
  { component: NotFound },
];

export default routes;
