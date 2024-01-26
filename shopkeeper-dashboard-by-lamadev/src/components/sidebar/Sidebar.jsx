import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoFoodIcon from "@mui/icons-material/NoFood";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> Foodiee </span>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
        <hr />
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Live Orders</span>
          </li>

          <li>
            <NoFoodIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <DinnerDiningIcon className="icon" />
            <span>Add Item</span>
          </li>

          <p className="title">USER</p>
          <hr />
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
