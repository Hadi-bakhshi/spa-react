import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <ul className="aside">
        <li>
          <Link to="/profile/dashboard">داشبورد</Link>
        </li>
        <li>
          <Link to="/profile/downloads">دانلودها</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
