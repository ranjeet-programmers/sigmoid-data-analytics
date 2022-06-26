import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./loginSlice";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hanldeLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Tooltip title="Logout">
      <IconButton
        onClick={hanldeLogout}
        color="inherit"
        aria-label="logout"
        component="span"
      >
        <LogoutIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Logout;
