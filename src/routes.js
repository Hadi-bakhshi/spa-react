import BlogComponent from "./Components/BlogComponent/BlogComponent";
import AboutUsPage from "./pages/AboutUsPage";
import Blog from "./pages/Blog";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", element: <BlogComponent /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/posts/:id([0-9]+)?", element: <PostPage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/", element: <HomePage /> },
  { elemend: <NotFound /> },
];

export default routes;

// ([A-Za-z0-9]+)
