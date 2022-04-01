import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebarAside">
      <ul className="aside">
        <li>
          <NavLink
            to="/profile/dashboard"
            className={(navData) => (navData.isActive ? "activeTab" : "")}
          >
            داشبورد
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/downloads"
            className={(navData) => (navData.isActive ? "activeTab" : "")}
          >
            دانلودها
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
