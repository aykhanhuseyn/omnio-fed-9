import {
  Avatar,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
import omnio_icon from "../../../public/Omnio_icon_white.png";
import { badgeTypes } from "../../data/badgeTypes";
import { sidebarData } from "../../data/sidebarData";

const settings = ["Profile", "Log out"];
export const StyledAside = styled('aside')`
  height: 100vh;
  width: 84px;
  background-color: #574b90;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
  position: 'fixed';
  left: 0;
  top: 0;
`;

const StyledOmnio = styled('img')`
  width: 52px;
  height: 52px;
`;

 const StyledLink = styled(Link)`
  margin-bottom: 52px;
`;

export const StyledNav = styled('nav')`
  margin-top: 16px;
  border-top: 1px solid #3d3575;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  margin-bottom: 32px;
  padding: 8px 10px;
  border-radius: 4px;
  &:hover {
    background-color: #978CBA;
  }
  &.active {
    background-color: #bfb4d5;
    .MuiSvgIcon-root {
      color: #574b90;
    }
  }
`;

const StyledBadge = styled(Badge)`
	& .MuiBadge-badge {
		position: 'absolute';
		bottom: 12px;
		left: 0;
	}
`;

export const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

  return (
    <StyledAside>
      <StyledLink to="/">
        <StyledOmnio src={omnio_icon} alt="omnio_icon"></StyledOmnio>
      </StyledLink>
      <Tooltip placement="right" title="user Name">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt="user_picture" sx={{ width: 52, height: 52 }} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "10px", ml: "76px" }}
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <ListItemText>{setting}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <StyledBadge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        color={badgeTypes[selectedIndex].color}
        overlap="circular"
        badgeContent=" "
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="when device is locked"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}
      ></StyledBadge>
      <Menu
        sx={{ mt:'-20px',ml:'50px' }}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {badgeTypes.map((type, index) => (
          <MenuItem
            key={type.key}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <ListItemIcon>
              <Badge
                color={type.color}
                overlap="circular"
                badgeContent=" "
              ></Badge>
            </ListItemIcon>
            <ListItemText>{type.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
      <StyledNav>
        {sidebarData.map((nav) => (
          <Tooltip placement="right" key={nav.key} title={nav.title}>
            <StyledNavLink to={nav.link}>
              <nav.icon sx={{ fontSize: 32, color: "#fff" }} />
            </StyledNavLink>
          </Tooltip>
        ))}
      </StyledNav>
    </StyledAside>
  );
};
