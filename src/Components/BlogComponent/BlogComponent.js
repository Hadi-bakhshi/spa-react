import { Link } from "react-router-dom";
import queryString from "query-string";

const BlogComponent = ({ location, match }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  const id = match.params.id;
  return (
    <div>
      <h2>Blog Detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}>رفتن به بلاگ بعدی</Link>
    </div>
  );
};

export default BlogComponent;
