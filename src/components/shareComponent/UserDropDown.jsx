import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Use an icon from MUI

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url) => {
    if (url) {
      window.location.href = url; // Redirect to the URL
    }
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Perform logout logic
    console.log('Logged out');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <Fragment>
      <IconButton onClick={handleDropdownOpen}>
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, mt: 2.5 } }}
      >
        <Box sx={{ py: 1.75, px: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="User Name"
              src="https://via.placeholder.com/150" // Placeholder image
              sx={{ width: 38, height: 38, borderRadius: "20%" }}
            />
            <Box sx={{ display: 'flex', ml: 2.5, alignItems: 'flex-start', flexDirection: 'column' }}>
              <Typography sx={{ fontWeight: 500 }}>User Name</Typography>
              <Typography variant='body2'>Role Name</Typography> {/* Replace with actual role */}
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <MenuItem onClick={() => handleDropdownClose('/profile')}>
          <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
            <Typography>Profile</Typography>
          </Box>
        </MenuItem>
        <Divider sx={{ my: 2 }} />
        <MenuItem onClick={handleLogout}>
          <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
            <Typography>Sign Out</Typography>
          </Box>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
