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
} from '@mui/material';
import { useState } from 'react';
import type { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth.slice';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CSSProperties } from 'styled-components';
import { badgeTypes } from '../../data/badgeTypes';
import { sidebarData } from '../../data/sidebarData';

const settings = ['Profile', 'Log out'];
interface AsideProps {
	position: CSSProperties['position'];
	width: `${number}px`;
	borderLeft: CSSProperties['borderLeft'];
	padding: CSSProperties['padding'];
	alignItems: CSSProperties['alignItems'];
}
export const StyledAside = styled('aside')<AsideProps>`
	min-height: 100vh;
	width: ${(props) => props.width || '84px'};
	background-color: ${({theme})=>theme.palette.primary.main};
	display: flex;
	flex-direction: column;
	align-items: ${(props) => props.alignItems || 'center'};
	padding: ${(props) => props.padding || '0'};
	position: ${(props) => props.position || 'fixed'};
	left: 0;
	top: 0;
	border-left: ${(props) => props.borderLeft || 'none'};
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
		background-color: #978cba;
	}
	&.active {
		background-color: #bfb4d5;
		color: #574b90;
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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const open = Boolean(anchorEl);
	const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = (
		event: MouseEvent<HTMLElement>,
		index: number,
	) => {
		setSelectedIndex(index);
		setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<StyledAside
			position='fixed'
			width='84px'
			borderLeft='none'
			padding='32px 0'
			alignItems='center'
		>
			<StyledLink to='/'>
				<StyledOmnio src='/Omnio_icon_white.png' alt='omnio icon'></StyledOmnio>
			</StyledLink>
			<Tooltip placement='right' title='user Name'>
				<IconButton onClick={handleOpenUserMenu}>
					<Avatar alt='user_picture' sx={{ width: 52, height: 52 }} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '10px', ml: '76px' }}
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem
					key='profile'
					onClick={() => {
						navigate('/profile');
						handleCloseUserMenu();
					}}
				>
					<ListItemText>Profile</ListItemText>
				</MenuItem>
				<MenuItem
					key='logout'
					onClick={() => {
						// window.localStorage.removeItem('token');
						dispatch(logOut());
					}}
				>
					<ListItemText>Log out</ListItemText>
				</MenuItem>
			</Menu>
			<StyledBadge
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				color={badgeTypes[selectedIndex].color}
				overlap='circular'
				badgeContent=' '
				id='lock-button'
				aria-haspopup='listbox'
				aria-controls='lock-menu'
				aria-label='when device is locked'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClickListItem}
			/>
			<Menu
				sx={{ mt: '-20px', ml: '50px' }}
				id='lock-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'lock-button',
					role: 'listbox',
				}}
			>
				{badgeTypes.map((type, index) => (
					<MenuItem
						key={type.key}
						selected={index === selectedIndex}
						onClick={(event) => handleMenuItemClick(event, index)}
					>
						<ListItemIcon>
							<Badge color={type.color} overlap='circular' badgeContent=' '></Badge>
						</ListItemIcon>
						<ListItemText>{type.text}</ListItemText>
					</MenuItem>
				))}
			</Menu>
			<StyledNav>
				{sidebarData.map((nav) => (
					<Tooltip placement='right' key={nav.key} title={nav.title}>
						<StyledNavLink to={nav.link}>
							<nav.icon sx={{ fontSize: 32, color: '#fff' }} />
						</StyledNavLink>
					</Tooltip>
				))}
			</StyledNav>
		</StyledAside>
	);
};
