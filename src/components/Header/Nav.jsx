import clsx from "clsx";
import style from "./Header.module.scss";
import { useSelector } from "react-redux";
import Menu from "react-burger-menu/lib/menus/slide";

const Nav = ({ children, isMenu, setMenu }) => {
  const { isMobileOrTablet } = useSelector((state) => state.app);
  return isMobileOrTablet ? (
    <Menu
      isOpen={isMenu}
      onStateChange={(state) => {
        setMenu(state.isOpen);
      }}
      width={"100%"}
      noOverlay
      customBurgerIcon={false}
      className={clsx(style.header__nav, style.nav)}
    >
      {children}
    </Menu>
  ) : (
    <nav className={clsx(style.header__nav)}>{children}</nav>
  );
};
export default Nav;
