import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebarAside">
      <ul className="aside">
        <li>
          <NavLink to="/profile/dashboard" activeClassName="activeTab">داشبورد</NavLink>
        </li>
        <li>
          <NavLink to="/profile/downloads" activeClassName="activeTab">دانلودها</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
