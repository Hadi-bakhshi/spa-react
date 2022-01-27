import { NavLink, withRouter } from "react-router-dom";
import styles from './navigation.module.css'
const items = [
  {name: "پستها" , link: '/posts'},
  {name: "بلاگ" , link: '/blogs'},
  { name: "پروفایل", link: "/profile" },
  { name: "درباره ما", link: "/about-us" },
  { name: "خانه", link: "/", exact: true },
];
const Navigation = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarul}>
        {items.map((item) => {
          return (
            <li className={styles.navbarli} key={item.link}>
              <NavLink
                to={item.link}
                activeClassName={styles.activeLink}
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
