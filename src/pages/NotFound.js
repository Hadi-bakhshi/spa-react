import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <>
      <p>
        404
        <br />
        متاسفانه صفحه مورد نظر یافت نشد
      </p>
      <Link to='/'>بازگشت به صفحه اصلی</Link>
    </>
  );
};

export default NotFound;
