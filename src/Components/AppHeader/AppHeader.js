import React, { useState } from "react";
import "./AppHeader.css";
import "./AppHeaderMediaQuery.css";
import user_image from "../../assets/images/user.png";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const AppHeader = ({ showSidepanel, setShowSidepanel }) => {
  const slide_Handler = () => {
    setShowSidepanel(!showSidepanel);
  };

  return (
    <div className="app-header-inner">
      <div className="container-fluid py-2">
        <div className="row justify-content-between align-items-center">
          <div className="app-utilities col-auto">
            <span
              onClick={slide_Handler}
              id="sidepanel-toggler"
              className="d-inline-block d-xl-none"
            >
              {showSidepanel ? (
                <AiOutlineMenuFold size="24px" color="#B9983D" />
              ) : (
                <AiOutlineMenuUnfold size="24px" color="#B9983D" />
              )}
            </span>

            {/* <a className="dashbaord-home-link" href="javascript:void(0)">
                <h4>Dashbaord</h4>
              </a> */}
          </div>

          <div className="app-utilities col-auto">
            <div className="app-utility-item">
              <BsBell size="24px" color="#B9983D" />
            </div>
            <div className="app-utility-item">
              <IoMailOutline size="24px" color="#B9983D" />
            </div>

            <div className="app-utility-item">
              <div className="user-profile-container">
                <img src={user_image} alt="profile-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
