import React, { useState, useEffect } from "react";
import "./AppSidebar.css";
import "./AppSidebarMediaQuery.css";
import logo from "../../assets/images/Infinity-Logo.png";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { GiDividedSquare } from "react-icons/gi";
import { FaListAlt } from "react-icons/fa";
import { RiFileList3Fill, RiQuestionnaireFill } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faArrowRightArrowLeft,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const AppSidebar = ({ showSidepanel, togleSidePanel }) => {
  const handleWindowResize = async () => {
    window.innerWidth >= 1200 ? togleSidePanel(true) : togleSidePanel(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={`${
        showSidepanel
          ? "AppSidebar sidepanel-visible"
          : "AppSidebar sidepanel-hidden"
      }`}
    >
      <div>
        <IoClose
          onClick={() => togleSidePanel(false)}
          className="sidepanel-close d-xl-none"
          color="#fff"
          size="35px"
        />
      </div>

      <div
        id="sidepanel-drop"
        className="sidepanel-drop"
        onClick={() => togleSidePanel(false)}
      ></div>
      <div className="sidebar-start d-flex flex-column">
        <div className="sidebar-header p-1">
          <img src={logo} alt="company-logo" className="company-logo" />
        </div>

        <div className="sidebar-body min-vh-100 ">
          <ul className="sidebar-body-menu">
            <li className="slide">
              <Link to="/" className="slide-subitem active">
                <BsFillGrid1X2Fill
                  size="18px"
                  color="#99A4B3"
                  className="mx-3"
                />
                Dashbaord
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <FontAwesomeIcon
                  icon={faSackDollar}
                  size="lg"
                  color="#99A4B3"
                  className="mx-3"
                />
                Submit a Property
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <ImHome3 size="18px" color="#99A4B3" className="mx-3" />
                Property List
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <FontAwesomeIcon
                  icon={faArrowRightArrowLeft}
                  size="lg"
                  color="#99A4B3"
                  className="mx-3"
                />
                Transactions
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <GiDividedSquare size="20px" color="#99A4B3" className="mx-3" />
                Create Dividend
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <FaListAlt size="18px" color="#99A4B3" className="mx-3" />
                Divident List
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <RiFileList3Fill size="20px" color="#99A4B3" className="mx-3" />
                Listing Guidelines
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <RiQuestionnaireFill
                  size="20px"
                  color="#99A4B3"
                  className="mx-3"
                />
                FAQ
              </Link>
            </li>
            <li className="slide">
              <Link to="/" className="slide-subitem">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  size="lg"
                  color="#99A4B3"
                  className="mx-3"
                />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
