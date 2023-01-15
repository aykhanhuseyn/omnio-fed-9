import type { BadgeTypeMap } from '@mui/material';

type BadgeType = {
	text: string;
	color: BadgeTypeMap['props']['color'];
	key: string;
};

export const badgeTypes: BadgeType[] = [
	{
		text: 'Online',
		color: 'success',
		key: 'online',
	},
	{
		text: 'On break',
		color: 'warning',
		key: 'onbreak',
	},
	{
		text: 'Offline',
		color: 'error',
		key: 'offline',
	},
];
