import { Link } from "react-router-dom";

const BlogComponent = (props) => {
    const id = props.match.params.id;
    return ( 
        <div>
            <h2>Blog Detail - {id}</h2>
            <Link to='/blogs'>بازگشت به صفحه ی بلاگ</Link>
        </div>
     );
}
 
export default BlogComponent;