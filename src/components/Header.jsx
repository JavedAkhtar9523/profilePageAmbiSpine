import React from "react";
import "../Styles/Header.css";
import avtar from "../Images/admin.png";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";
import { SiBookmyshow } from "react-icons/si";

const Header = () => {
  return (
    <nav>
      <div className="left_nav">
        <div className="profile">
          <img src={avtar} alt="" />
        </div>
        <IoSearchCircleSharp className="search_icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="icon_list">
        <ul>
          <div className="item_1">
            <li>
              <FaUserShield fontSize={"30px"} />
              <p>Spreads Connect</p>
            </li>
          </div>
          <div className="item_1">
            <li>
              <IoMdNotificationsOutline fontSize={"30px"} />
              <p>Notification</p>
            </li>
          </div>
          <div className="item_1">
            <li>
              <PiBagSimple fontSize={"30px"} />
              <p>Jobs</p>
            </li>
          </div>
          <div className="item_1">
            <li>
              <SiBookmyshow fontSize={"30px"} />
              <p>Shows</p>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
