import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Search,
  ShoppingCart,
  AccountCircle,
  Person,
  Settings,
  ExitToApp,
  Login,
} from "@mui/icons-material";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignInClick = () => {
    handleMenuClose(); // Close the menu
    navigate("/signin"); // Redirect to the sign-in page
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        borderBottom: "1px solid lightgray",
      }}
    >
      <Toolbar
        sx={{
          paddingX: "40px",
        }}
      >
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <InputBase
            placeholder="What can we help you find?"
            inputProps={{ "aria-label": "search" }}
            sx={{
              width: "250px",
              border: "1px solid lightgray",
              padding: "4px 8px",
              borderRadius: 1,
            }}
            startAdornment={
              <IconButton type="submit" sx={{ p: "0px" }} aria-label="search">
                <Search />
              </IconButton>
            }
          />
        </Box>

        {/* Logo */}
        <Typography variant="h4" sx={{ flexGrow: 0 }}>
          ShopEase
        </Typography>

        {/* Cart and Profile Icons */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="My account" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </MenuItem>
            <MenuItem onClick={handleSignInClick}> {/* Update this MenuItem */}
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
