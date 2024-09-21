import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AvaterIcon from "../assets/mambers/Avatar.svg";
import BellIcon from "../assets/mambers/bell.svg";
import DownIcon from "../assets/mambers/dwon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const getUserData = JSON.parse(localStorage.getItem("adminData"));
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    localStorage.removeItem("adminData");
    // navigate("/");
  };

  const menuOption = [
    {
      label: "Logout",
    },
  ];
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.br/eakpoints.down("md"));
  console.log("getUserData", getUserData);
  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        background: "white !important",
        boxShadow: "none !important",
        paddingTop: "3px",
      }}
    >
      <Toolbar className="top-toolbar">
        {/* Left Section */}
        <Box flexGrow={1} display="flex" justifyContent="flex-start">
          <Typography variant="h6" noWrap></Typography>
        </Box>

        {/* Right Section */}
        <Box display="flex" alignItems="center">
          {/* Language Toggle */}
          {/* <Button variant="outlined" sx={{ mr: 2 }}>
            EN 
          </Button> */}
          <div className="circle">EN</div>

          {/* Notifications */}
          <div className="circle ms-3">
            <IconButton size="large" aria-label="notifications" color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>

          {/* User Avatar and Dropdown */}
          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
            <Typography sx={{ ml: 1 }}>
              {user?.first_name ||
                getUserData?.user?.first_name + getUserData?.user?.last_name ||
                "Admin User"}
            </Typography>
            <IconButton style={{padding:"0px"}} onClick={handleMenuOpen}>
              <ArrowDropDownIcon />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{ mt: 1 }}
              color="black"
              slotProps={{
                paper: {
                  sx: {
                    backgroundImage: "none",
                    backgroundColor: "white !important",
                    width: "150px",
                  },
                },
              }}
            >
              {menuOption?.map((data) => (
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#fdf3e4  !important",
                    },
                  }}
                >
                  {data?.label}
                </MenuItem>
              ))}
              {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem> */}
            </Menu>
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        {/* {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
