import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const MenuItemWrapper = ({ children, option }) => {
  if (option.href) {
    return (
      <Box
        component={Link}
        to={option.href} // Changed `href` to `to` for React Router Link
        {...option.linkProps}
        sx={{
          px: 4,
          py: 1.5,
          width: '100%',
          display: 'flex',
          color: 'inherit',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        {children}
      </Box>
    );
  } else {
    return <>{children}</>;
  }
};

const OptionsMenu = ({ icon, options, menuProps, iconProps, leftAlignMenu, iconButtonProps }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-haspopup="true" onClick={handleClick} {...iconButtonProps}>
        {icon || <span {...iconProps}>⋮</span>} {/* Use a default icon if none provided */}
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        {...menuProps}
      >
        {options.map((option, index) => {
          if (typeof option === 'string') {
            return (
              <MenuItem key={index} onClick={handleClose}>
                {option}
              </MenuItem>
            );
          } else if (option.divider) {
            return <Divider key={index} {...option.dividerProps} />;
          } else {
            return (
              <MenuItem
                key={index}
                {...option.menuItemProps}
                {...(option.href && { sx: { p: 0 } })}
                onClick={() => handleClose()}
              >
                <MenuItemWrapper option={option}>
                  {option.icon ? option.icon : null}
                  {option.text}
                </MenuItemWrapper>
              </MenuItem>
            );
          }
        })}
      </Menu>
    </>
  );
};

export default OptionsMenu;
