import React from "react";
import { BLOG_NAVBAR_DATA, SIDE_MENU_DATA } from "../../utils/data";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const SideMenu = ({ activeMenu, isBlogMenu }) => {
  const user = null;
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return <div>side menu</div>;
};

export default SideMenu;
