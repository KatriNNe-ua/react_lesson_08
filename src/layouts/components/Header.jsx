import { NavLink } from "react-router";
import frontRoutes from "../../routes/frontRoutes";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink
          to={frontRoutes.navigate.home}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : ""}`
          }
        >
          Головна
        </NavLink>
        <NavLink
          to={frontRoutes.navigate.teachers.index}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : ""}`
          }
        >
          Вчителі
        </NavLink>
        <NavLink
          to={frontRoutes.navigate.meeting}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : ""}`
          }
        >
          Збори
        </NavLink>
        <NavLink
          to={frontRoutes.navigate.aboutApp}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : ""}`
          }
        >
          Про додаток
        </NavLink>
        <NavLink
          to={frontRoutes.navigate.aboutDev}
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link-active" : ""}`
          }
        >
          Про розробника
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
