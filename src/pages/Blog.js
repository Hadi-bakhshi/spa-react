import { Link } from "react-router-dom";

const items = [
  { name: "blog -1", link: "/blogs/1" },
  { name: "blog -2", link: "/blogs/2" },
  { name: "blog -3", link: "/blogs/3" },
];

const Blog = () => {
  return (
    <div>
      <h2>صفحه ی بلاگ</h2>
      {items.map((item) => {
        return (
          <span key={item.link}>
            <Link to={item.link}>{item.name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default Blog;
